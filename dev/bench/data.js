window.BENCHMARK_DATA = {
  "lastUpdate": 1729112256847,
  "repoUrl": "https://github.com/microsoft/garnet",
  "entries": {
    "Benchmark": [
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
          "id": "cdf2d25356fad2ca234a01969809b3e4d3aeb5fb",
          "message": "Bump threshold to 35% (135%) to trigger perf failure",
          "timestamp": "2024-10-16T20:52:20Z",
          "url": "https://github.com/microsoft/garnet/commit/cdf2d25356fad2ca234a01969809b3e4d3aeb5fb"
        },
        "date": 1729112245144,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.RespClusterBench.Get",
            "value": 23928.92804827009,
            "unit": "ns",
            "range": "± 38.94042208215273"
          },
          {
            "name": "BDN.benchmark.Cluster.RespClusterBench.Set",
            "value": 22877.053833007812,
            "unit": "ns",
            "range": "± 28.396387032753218"
          },
          {
            "name": "BDN.benchmark.Cluster.RespClusterBench.MGet",
            "value": 20354.4482421875,
            "unit": "ns",
            "range": "± 211.81705769027474"
          },
          {
            "name": "BDN.benchmark.Cluster.RespClusterBench.MSet",
            "value": 18242.273301344652,
            "unit": "ns",
            "range": "± 22.691578134412214"
          }
        ]
      }
    ]
  }
}