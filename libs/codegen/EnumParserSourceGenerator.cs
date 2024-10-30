// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace Garnet.codegen
{
#pragma warning disable RS1041
    [Generator]
#pragma warning restore RS1041
    public class EnumParserSourceGenerator : IIncrementalGenerator
    {
        public void Initialize(GeneratorInitializationContext context)
        {
            context.RegisterForSyntaxNotifications(() => new EnumSyntaxReceiver());
        }

        public void Execute(GeneratorExecutionContext context)
        {
            if (context.SyntaxReceiver is not EnumSyntaxReceiver receiver)
                return;

            // Filter enums with the specific attribute using the semantic model.
            var enumsToProcess = new List<INamedTypeSymbol>();
            foreach (var enumSyntax in receiver.EnumsForParserGeneration)
            {
                var model = context.Compilation.GetSemanticModel(enumSyntax.SyntaxTree);
                var enumSymbol = model.GetDeclaredSymbol(enumSyntax) as INamedTypeSymbol;

                // Check if the attribute is applied
                if (enumSymbol?.GetAttributes().Any(attr =>
                        attr.AttributeClass?.Name == "GenerateEnumParserAttribute") == true)
                {
                    enumsToProcess.Add(enumSymbol);
                }
            }

            // Generate the class with a method for each enum.
            var source = GenerateEnumParsers(enumsToProcess);
            context.AddSource($"SessionParseStateEnumExtensions.g.cs", source);
        }

        private string GenerateEnumParsers(List<INamedTypeSymbol> enums)
        {
            var sb = new StringBuilder();
            sb.AppendLine($"public static class SessionParseStateEnumExtensions");
            sb.AppendLine("{");

            foreach (var enumSymbol in enums)
            {
                var enumName = enumSymbol.Name;
                sb.AppendLine($"    public static bool TryParse{enumName}(this SessionParseState parseState, out {enumName} value)");
                sb.AppendLine("    {");
                sb.AppendLine($"        // Handle {enumName} enum");
                sb.AppendLine("    }");
            }

            sb.AppendLine("}");
            return sb.ToString();
        }


        public class EnumSyntaxReceiver : ISyntaxReceiver
        {
            public List<EnumDeclarationSyntax> EnumsForParserGeneration { get; } = new();

            /// <inheritdoc />
            public void OnVisitSyntaxNode(SyntaxNode syntaxNode)
            {
                if (syntaxNode is EnumDeclarationSyntax enumDeclaration &&
                    enumDeclaration.AttributeLists.Count > 0)
                {
                    EnumsForParserGeneration.Add(enumDeclaration);
                }
            }
        }

        public void Initialize(IncrementalGeneratorInitializationContext context)
        {

        }
    }
}
