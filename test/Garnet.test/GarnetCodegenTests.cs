// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using NUnit.Framework.Legacy;
using StackExchange.Redis;

namespace Garnet.test
{
    [TestFixture]
    public class GarnetCodegenTests
    {
        [Test]
        public void TestEnumParsers()
        {
            var inputSpan = "MASTER"u8;
            EnumParserUtils.TryParseGarnet_server_ClientType(inputSpan, out var clientType);
            ClassicAssert.AreEqual(server.ClientType.MASTER, clientType);
        }
    }
}
