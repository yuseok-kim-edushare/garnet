window.BENCHMARK_DATA = {
  "lastUpdate": 1730151547028,
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
          "id": "665bda1ae92aaff071c7d8c05bb2edd11b23c0a7",
          "message": "Fix bug in ObjectOperations",
          "timestamp": "2024-10-28T21:22:42Z",
          "url": "https://github.com/microsoft/garnet/commit/665bda1ae92aaff071c7d8c05bb2edd11b23c0a7"
        },
        "date": 1730151545590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1773.2309645244054,
            "unit": "ns",
            "range": "± 12.277929914728604"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1782.6699559529623,
            "unit": "ns",
            "range": "± 23.155922794419347"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1611.885228597201,
            "unit": "ns",
            "range": "± 5.102283478084043"
          }
        ]
      }
    ]
  }
}