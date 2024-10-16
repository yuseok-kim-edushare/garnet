window.BENCHMARK_DATA = {
  "lastUpdate": 1729112345108,
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
        "date": 1729112343082,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Resp.RespParseStress.InlinePing",
            "value": 2270.3935396830243,
            "unit": "ns",
            "range": "± 23.774351822330917"
          },
          {
            "name": "BDN.benchmark.Resp.RespParseStress.Set",
            "value": 18920.35312906901,
            "unit": "ns",
            "range": "± 18.63441507450011"
          },
          {
            "name": "BDN.benchmark.Resp.RespParseStress.SetEx",
            "value": 26286.39260559082,
            "unit": "ns",
            "range": "± 165.95079203662712"
          },
          {
            "name": "BDN.benchmark.Resp.RespParseStress.SetNx",
            "value": 24402.67578023275,
            "unit": "ns",
            "range": "± 138.6318274353208"
          },
          {
            "name": "BDN.benchmark.Resp.RespParseStress.SetXx",
            "value": 27125.91347679725,
            "unit": "ns",
            "range": "± 57.22656864336617"
          },
          {
            "name": "BDN.benchmark.Resp.RespParseStress.Get",
            "value": 14094.717538016183,
            "unit": "ns",
            "range": "± 26.106559067708204"
          },
          {
            "name": "BDN.benchmark.Resp.RespParseStress.Increment",
            "value": 28041.993052164715,
            "unit": "ns",
            "range": "± 181.33266849283373"
          },
          {
            "name": "BDN.benchmark.Resp.RespParseStress.ZAddRem",
            "value": 190716.32622419085,
            "unit": "ns",
            "range": "± 1161.818424846056"
          },
          {
            "name": "BDN.benchmark.Resp.RespParseStress.LPushPop",
            "value": 177620.84256998697,
            "unit": "ns",
            "range": "± 374.6996335705371"
          },
          {
            "name": "BDN.benchmark.Resp.RespParseStress.SAddRem",
            "value": 156850.9694905599,
            "unit": "ns",
            "range": "± 1756.5278227400674"
          },
          {
            "name": "BDN.benchmark.Resp.RespParseStress.HSetDel",
            "value": 201567.4751464844,
            "unit": "ns",
            "range": "± 2174.8500638749324"
          },
          {
            "name": "BDN.benchmark.Resp.RespParseStress.MyDictSetGet",
            "value": 235454.1777750651,
            "unit": "ns",
            "range": "± 632.6366757120759"
          }
        ]
      }
    ]
  }
}