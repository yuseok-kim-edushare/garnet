// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

namespace Garnet.codegen
{
    /// <summary>
    /// A struct holding the necessary info for source generation for each enum
    /// </summary>
    public readonly record struct EnumInfo
    {
        /// <summary>
        /// Enum name
        /// </summary>
        public readonly string Name;

        /// <summary>
        /// Enum values
        /// </summary>
        public readonly string[] Values;

        /// <summary>
        /// Creates a new instance of EnumInfo struct
        /// </summary>
        /// <param name="name">Enum name</param>
        /// <param name="values">Enum values</param>
        public EnumInfo(string name, List<string> values)
        {
            Name = name;
            Values = values.ToArray();
        }
    }
}
