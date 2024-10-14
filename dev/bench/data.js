window.BENCHMARK_DATA = {
  "lastUpdate": 1728940023458,
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
    ]
  }
}