// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

using Microsoft.CodeAnalysis.Text;
using Microsoft.CodeAnalysis;
using System.Collections.Immutable;
using System.Text;

namespace Garnet.codegen
{
    /// <summary>
    /// An incremental generator that generates a custom enum attribute (GenerateEnumParserAttribute) and a static class (EnumParserUtils)
    /// containing fast parser methods for each enum decorated with the custom attribute in the referencing project.
    /// </summary>
    [Generator]
    public class EnumParserUtilsGenerator : IIncrementalGenerator
    {
        /// <summary>
        /// Custom attribute code
        /// </summary>
        private const string GenerateEnumParserAttribute =
            @"using System;

namespace Garnet
{
    [AttributeUsage(AttributeTargets.Enum)]
    public class GenerateEnumParserAttribute : Attribute
    {
    }
}";

        /// <inheritdoc />
        public void Initialize(IncrementalGeneratorInitializationContext context)
        {
            context.RegisterPostInitializationOutput(ctx => ctx.AddSource(
                "GenerateEnumParserAttribute.g.cs",
                SourceText.From(GenerateEnumParserAttribute, Encoding.UTF8)));

            var enumsToGenerate = context.SyntaxProvider
                .ForAttributeWithMetadataName(
                    "Garnet.GenerateEnumParserAttribute",
                    predicate: static (_, _) => true,
                    transform: static (ctx, _) => GetEnumInfo(ctx.SemanticModel, ctx.TargetNode))
                .Where(static m => m is not null);

            context.RegisterSourceOutput(enumsToGenerate.Collect(),
                static (spc, source) => Execute(source, spc));
        }

        /// <summary>
        /// Execute code generation for collection of enums decorated with custom attribute generated in the Initialize step
        /// </summary>
        /// <param name="enumsToGenerate">Collection of enums</param>
        /// <param name="context">Context</param>
        static void Execute(ImmutableArray<EnumInfo?> enumsToGenerate, SourceProductionContext context)
        {
            var nonNullEnums = enumsToGenerate.OfType<EnumInfo>().ToList();
            if (enumsToGenerate.Length > 0)
            {
                var result = GenerateEnumParserUtilsClass(nonNullEnums);
                context.AddSource("EnumParserUtils.g.cs", SourceText.From(result, Encoding.UTF8));
            }
        }

        /// <summary>
        /// Extracts the necessary info for source generation for each enum
        /// </summary>
        /// <param name="semanticModel"></param>
        /// <param name="enumDeclarationSyntax"></param>
        /// <returns>Enum info</returns>
        static EnumInfo? GetEnumInfo(SemanticModel semanticModel, SyntaxNode enumDeclarationSyntax)
        {
            if (semanticModel.GetDeclaredSymbol(enumDeclarationSyntax) is not INamedTypeSymbol enumSymbol)
            {
                return null;
            }

            var enumName = enumSymbol.ToString();
            var members = enumSymbol.GetMembers()
                .OfType<IFieldSymbol>()
                .Where(f => f.ConstantValue is not null)
                .Select(f => f.Name)
                .ToList();

            return new EnumInfo(enumName, members);
        }

        public static string GenerateEnumParserUtilsClass(List<EnumInfo> enumsToGenerate)
        {
            var sb = new StringBuilder();
            sb.AppendLine("using System;");
            sb.AppendLine("using Garnet.common;");
            sb.AppendLine();
            sb.AppendLine("namespace Garnet");
            sb.AppendLine("{");
            sb.AppendLine("    public static partial class EnumParserUtils");
            sb.AppendLine("    {");

            for (var i = 0; i < enumsToGenerate.Count; i++)
            {
                GenerateTryParseMethod(sb, enumsToGenerate[i]);
                if (i < enumsToGenerate.Count - 1)
                    sb.AppendLine();
            }

            sb.AppendLine("    }");
            sb.AppendLine("}");

            return sb.ToString();
        }

        private static void GenerateTryParseMethod(StringBuilder sb, EnumInfo enumInfo)
        {
            var enumFullName = enumInfo.Name;
            var enumFullNameMethod = enumFullName.Replace('.', '_');

            sb.AppendLine($"        public static bool TryParse{enumFullNameMethod}(ReadOnlySpan<byte> input, out {enumFullName} value)");
            sb.AppendLine("        {");
            sb.AppendLine("            value = default;");

            foreach (var member in enumInfo.Values)
            {
                sb.AppendLine($"            if (input.EqualsUpperCaseSpanIgnoringCase(\"{member}\"u8))");
                sb.AppendLine("            {");
                sb.AppendLine($"                value = {enumFullName}.{member};");
                sb.AppendLine("                return true;");
                sb.AppendLine("            }");
            }

            sb.AppendLine();
            sb.AppendLine("            return false;");
            sb.AppendLine("        }");
        }
    }
}
