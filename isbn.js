function validISBN10(isbn) {
  var total = 0;
  if (isbn.length < 10) return false;
  for (var i = 0; i < isbn.length; i++) {
    if (i < 9) {
      if (!isNaN(isbn.charAt(i))) {
        total += (i + 1) * parseInt(isbn.charAt(i));
      } else {
        return false;
      }
    } else {
      if (isbn.charAt(i).toUpperCase() == "X") {
        total += (i + 1) * 10;
      } else if (!isNaN(isbn.charAt(i))) {
        total += (i + 1) * parseInt(isbn.charAt(i));
      }
    }
  }
  return total % 11 == 0;
}

function ipsBetween(start, end) {
  //Separate values
  var startSplit = start.split(".");
  var endSplit = end.split(".");

  //Turn into integers
  for (var i = 0; i < startSplit.length; i++) {
    startSplit[i] = +startSplit[i];
  }
  for (var i = 0; i < endSplit.length; i++) {
    endSplit[i] = +endSplit[i];
  }

  //Convert addresses to integers
  var startInt =
    startSplit[0] * Math.pow(2, 24) +
    startSplit[1] * Math.pow(2, 16) +
    startSplit[2] * Math.pow(2, 8) +
    startSplit[3];
  var endInt =
    endSplit[0] * Math.pow(2, 24) +
    endSplit[1] * Math.pow(2, 16) +
    endSplit[2] * Math.pow(2, 8) +
    endSplit[3];

  //Calculate
  return endInt - startInt;
}

function iqTest(numbers) {
  //Split into array
  var splitNums = numbers.split(" ");
  var calc = [
    { ix: 0, occurence: 0 },
    { ix: 1, occurence: 0 },
  ];
  //Index based on type (even:0, odd:1)
  for (var i = 0; i < splitNums.length; i++) {
    var index = +splitNums[i] % 2 == 0 ? 0 : 1;
    calc[index] = { ix: i + 1, occurence: ++calc[index].occurence };
  }

  return calc[0].occurence < calc[1].occurence ? calc[0].ix : calc[1].ix;
}

//console.log(iqTest("2 2 3"));
//console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
//console.log(validISBN10("048665088X"));

const omnibool = { n: 1, valueOf: () => (this.n = !this.n) };

function doubles(s) {
  s = s.toLowerCase();
  var newString = "";
  var pos = 0;

  for (var pos; pos < s.length; pos++) {
    if (s.charAt(pos) == s.charAt(pos + 1)) {
      ++pos;
    } else {
      newString += s.charAt(pos);
    }
  }

  return newString;
}

function doubles2(s) {
  var resultString = [];
  for (var ch of s) {
    if (
      resultString.length != 0 &&
      resultString[resultString.length - 1] == ch
    ) {
      resultString.pop(); //Remove last item
    } else {
      resultString.push(ch);
    }
  }

  return resultString.join("");
}

function maskify(cc) {
  var masked = "";

  if (cc.length <= 4) return cc;
  for (c in cc) {
    if (c < cc.length - 4) {
      masked += "#";
    } else {
      masked += cc.charAt(c);
    }
  }

  return masked;
}

String.prototype.camelCase = function () {
  var cc = this.valueOf().split(" ");

  for (str in cc) {
    cc[str] = cc[str].charAt(0).toUpperCase() + cc[str].slice(1);
  }

  return cc.join("");
};

//console.log(maskify("4556364607935616"));
//console.log(doubles2("xxbnnnnnyaaaaam"));
//console.log("dog shit".camelCase());

function tribonacci(signature, n) {
  var tribo = signature;

  while (tribo.length < n) {
    var sum = 0;
    for (val of tribo.slice(-3)) {
      sum += val;
    }
    tribo.push(sum);
  }

  return tribo.slice(0, n);
}

//console.log(tribonacci([1, 1, 1], 0));

// function solve(arr) {
//   var days = 0;
//   while (arr.length > 1) {
//     days++;
//     arr.sort((a, b) => b - a);
//     for (i = 0; i < 2; i++) {
//       console.log(arr);
//       if (arr[i] > 0) {
//         arr[i]--;
//         if (arr[i] == 0) arr.splice(i);
//       }
//     }
//   }

//   return days;
// }

function solve(arr) {
  arr.slice().sort((a, b) => a - b);
  return Math.min(arr[0] + arr[1], Math.floor((arr[0] + arr[1] + arr[2]) / 2));
}

// function solve(arr) {
//   arr.sort((a, b) => b - a);

//   return arr[0] > arr[1] + arr[2] ? arr[1] + arr[2] : arr[0];
// }

console.log(solve([1, 2, 1]));
