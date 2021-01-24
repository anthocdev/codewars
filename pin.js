function getPINs(observed) {
  var pin = observed.split("");
  var keypad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [null, "0", null],
  ];
  var combs = [];

  for (num of pin) {
    x = 0;
    if (+num > 0) {
      var ix = returnIndex(keypad, num);
      for (pos of ix) {
        if (pos[0] >= 0 && pos[0] <= 3 && pos[1] >= 0 && pos[1] <= 3) {
          combs.push(keypad[pos[0]][pos[1]]);
        }
      }
    } else {
      combs.push(keypad[2][1]);
      combs.push(keypad[3][0]);
      combs.push(keypad[3][1]);
      combs.push(keypad[3][2]);
    }
  }

  console.log(combs);
}

function returnIndex(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    for (var x = 0; x < arr[i].length; x++) {
      if (arr[i][x] == val) {
        return [
          [i - 1, x],
          [i, x - 1],
          [i, x],
          [i, x + 1],
          [i + 1, x],
        ];
      }
    }
  }
}

getPINs("11");
