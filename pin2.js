function getPINs(spec) {
  var memory = [
    ["0", "8"],
    ["1", "2", "4"],
    ["2", "3", "5", "1"],
    ["3", "6", "2"],
    ["4", "1", "5", "7"],
    ["5", "2", "6", "8", "4"],
    ["6", "3", "9", "5"],
    ["7", "4", "8"],
    ["8", "5", "9", "0", "7"],
    ["9", "6", "8"],
  ];

  var ans = spec
    .split("")
    .map((ix) => memory[ix])
    .reduce((s, f) => {
      if (!s) return f;
      return s.reduce((vals, comb) => vals.concat(f.map((k) => comb + k)), []);
    });
  console.log(ans);
}

getPINs("11");
