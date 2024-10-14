window.BENCHMARK_DATA = {
  "lastUpdate": 1728940097996,
  "repoUrl": "https://github.com/microsoft/garnet",
  "entries": {
    "BDNBenchmark - Resp.RespTsavoriteStress (os ubuntu-latest, framework net8.0, configuration Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "68d0972ccb4255528d1174fb769ee0270d599155",
          "message": "Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers",
          "timestamp": "2024-10-14T21:02:46Z",
          "url": "https://github.com/microsoft/garnet/commit/68d0972ccb4255528d1174fb769ee0270d599155"
        },
        "date": 1728940019657,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Resp.RespTsavoriteStress.Get",
            "value": 20549.927168782553,
            "unit": "ns",
            "range": "± 109.87893011228456"
          },
          {
            "name": "BDN.benchmark.Resp.RespTsavoriteStress.Set",
            "value": 18653.09128417969,
            "unit": "ns",
            "range": "± 144.0353968048221"
          },
          {
            "name": "BDN.benchmark.Resp.RespTsavoriteStress.Incr",
            "value": 27173.29769592285,
            "unit": "ns",
            "range": "± 252.87662109256993"
          }
        ]
      }
    ],
    "BDNBenchmark - Resp.RespLuaStress (os ubuntu-latest, framework net8.0, configuration Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "68d0972ccb4255528d1174fb769ee0270d599155",
          "message": "Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers",
          "timestamp": "2024-10-14T21:02:46Z",
          "url": "https://github.com/microsoft/garnet/commit/68d0972ccb4255528d1174fb769ee0270d599155"
        },
        "date": 1728940031554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Resp.RespLuaStress.BasicLuaStress1",
            "value": 177.15753909746806,
            "unit": "ns",
            "range": "± 1.6051575487525471"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaStress.BasicLuaStress2",
            "value": 291.8813014348348,
            "unit": "ns",
            "range": "± 2.742004558566918"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaStress.BasicLuaStress3",
            "value": 1340.5866329193116,
            "unit": "ns",
            "range": "± 4.904321060264595"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaStress.BasicLuaStress4",
            "value": 2771.392560068766,
            "unit": "ns",
            "range": "± 21.82630707291076"
          }
        ]
      }
    ],
    "BDNBenchmark - Cluster.RespClusterBench (os ubuntu-latest, framework net8.0, configuration Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "68d0972ccb4255528d1174fb769ee0270d599155",
          "message": "Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers",
          "timestamp": "2024-10-14T21:02:46Z",
          "url": "https://github.com/microsoft/garnet/commit/68d0972ccb4255528d1174fb769ee0270d599155"
        },
        "date": 1728940031819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.RespClusterBench.Get",
            "value": 28835.88067626953,
            "unit": "ns",
            "range": "± 105.32861692336571"
          },
          {
            "name": "BDN.benchmark.Cluster.RespClusterBench.Set",
            "value": 25364.82776489258,
            "unit": "ns",
            "range": "± 115.22972182344766"
          },
          {
            "name": "BDN.benchmark.Cluster.RespClusterBench.MGet",
            "value": 21044.283978975734,
            "unit": "ns",
            "range": "± 21.675538056731288"
          },
          {
            "name": "BDN.benchmark.Cluster.RespClusterBench.MSet",
            "value": 18682.342987060547,
            "unit": "ns",
            "range": "± 141.9175795358318"
          }
        ]
      }
    ],
    "BDNBenchmark - Cluster.RespClusterMigrateBench (os ubuntu-latest, framework net8.0, configuration Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "68d0972ccb4255528d1174fb769ee0270d599155",
          "message": "Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers",
          "timestamp": "2024-10-14T21:02:46Z",
          "url": "https://github.com/microsoft/garnet/commit/68d0972ccb4255528d1174fb769ee0270d599155"
        },
        "date": 1728940031103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.RespClusterMigrateBench.Get",
            "value": 46896.716779436385,
            "unit": "ns",
            "range": "± 439.9357008144219"
          },
          {
            "name": "BDN.benchmark.Cluster.RespClusterMigrateBench.Set",
            "value": 47791.856471470426,
            "unit": "ns",
            "range": "± 96.0317356198837"
          },
          {
            "name": "BDN.benchmark.Cluster.RespClusterMigrateBench.MGet",
            "value": 41458.17583759014,
            "unit": "ns",
            "range": "± 44.948771269026004"
          },
          {
            "name": "BDN.benchmark.Cluster.RespClusterMigrateBench.MSet",
            "value": 39428.55940598708,
            "unit": "ns",
            "range": "± 132.53847448246242"
          }
        ]
      }
    ],
    "BDNBenchmark - Resp.RespLuaRunnerStress (os ubuntu-latest, framework net8.0, configuration Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "68d0972ccb4255528d1174fb769ee0270d599155",
          "message": "Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers",
          "timestamp": "2024-10-14T21:02:46Z",
          "url": "https://github.com/microsoft/garnet/commit/68d0972ccb4255528d1174fb769ee0270d599155"
        },
        "date": 1728940041220,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Resp.RespLuaRunnerStress.BasicLuaRunner1",
            "value": 197.29728430112203,
            "unit": "ns",
            "range": "± 0.8281956418359838"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaRunnerStress.BasicLuaRunner2",
            "value": 311.72251698176063,
            "unit": "ns",
            "range": "± 2.370557758510817"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaRunnerStress.BasicLuaRunner3",
            "value": 576.3369459152221,
            "unit": "ns",
            "range": "± 5.546153379807748"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaRunnerStress.BasicLuaRunner4",
            "value": 2916.4730339050293,
            "unit": "ns",
            "range": "± 25.617028483657357"
          }
        ]
      }
    ],
    "BDNBenchmark - Resp.RespTsavoriteStress (os windows-latest, framework net8.0, configuration Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "68d0972ccb4255528d1174fb769ee0270d599155",
          "message": "Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers",
          "timestamp": "2024-10-14T21:02:46Z",
          "url": "https://github.com/microsoft/garnet/commit/68d0972ccb4255528d1174fb769ee0270d599155"
        },
        "date": 1728940077705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Resp.RespTsavoriteStress.Get",
            "value": 20669.430307241586,
            "unit": "ns",
            "range": "± 21.642840724081058"
          },
          {
            "name": "BDN.benchmark.Resp.RespTsavoriteStress.Set",
            "value": 17960.51068987165,
            "unit": "ns",
            "range": "± 26.481607296010033"
          },
          {
            "name": "BDN.benchmark.Resp.RespTsavoriteStress.Incr",
            "value": 26155.86130777995,
            "unit": "ns",
            "range": "± 147.17609286029804"
          }
        ]
      }
    ],
    "BDNBenchmark - Resp.RespLuaRunnerStress (os windows-latest, framework net8.0, configuration Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "68d0972ccb4255528d1174fb769ee0270d599155",
          "message": "Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers",
          "timestamp": "2024-10-14T21:02:46Z",
          "url": "https://github.com/microsoft/garnet/commit/68d0972ccb4255528d1174fb769ee0270d599155"
        },
        "date": 1728940081759,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Resp.RespLuaRunnerStress.BasicLuaRunner1",
            "value": 120.37139279501778,
            "unit": "ns",
            "range": "± 0.3611634443922457"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaRunnerStress.BasicLuaRunner2",
            "value": 180.877472559611,
            "unit": "ns",
            "range": "± 0.8464975715427747"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaRunnerStress.BasicLuaRunner3",
            "value": 355.40253321329754,
            "unit": "ns",
            "range": "± 1.2673021540241713"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaRunnerStress.BasicLuaRunner4",
            "value": 2240.0607916025015,
            "unit": "ns",
            "range": "± 6.695029986551593"
          }
        ]
      }
    ],
    "BDNBenchmark - Resp.RespLuaStress (os windows-latest, framework net8.0, configuration Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "68d0972ccb4255528d1174fb769ee0270d599155",
          "message": "Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers",
          "timestamp": "2024-10-14T21:02:46Z",
          "url": "https://github.com/microsoft/garnet/commit/68d0972ccb4255528d1174fb769ee0270d599155"
        },
        "date": 1728940087915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Resp.RespLuaStress.BasicLuaStress1",
            "value": 103.6726312977927,
            "unit": "ns",
            "range": "± 0.4788612786899913"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaStress.BasicLuaStress2",
            "value": 178.69295438130698,
            "unit": "ns",
            "range": "± 0.7453511584997676"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaStress.BasicLuaStress3",
            "value": 795.791098276774,
            "unit": "ns",
            "range": "± 2.8703169018151646"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaStress.BasicLuaStress4",
            "value": 1691.3782628377278,
            "unit": "ns",
            "range": "± 4.401467504653916"
          }
        ]
      }
    ]
  }
}