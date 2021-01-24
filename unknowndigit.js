function solveExpression(exp) {
  var nums = [];
  var base = exp.split("?").length - 1; // Number of ?'s

  for (i = 0; i <= 9; i++) {
    var attEq = exp;
    attEq = attEq.split("--").join("+");
    attEq = attEq.split("?").join(i);
    //console.log(attEq);
    var eq = attEq.split("=");
    //No leading zeros

    if (eval(eq[0]).toString() == +eq[1].toString()) {
      if (!exp.includes(i.toString())) {
        if (!attEq.match("^0[0-9].*$")) {
          console.log(eq);
          nums.push(i);
        }
      }
    }
  }
  // //Find Operators
  // for (var i = 0; i < question.length; i++) {
  //   if (
  //     question.charAt(i) == "*" ||
  //     question.charAt(i) == "+" ||
  //     question.charAt(i) == "-"
  //   ) {
  //     nums.push(question.charAt(i));
  //     question.split(question.charAt(i)).forEach((num) => nums.push(num));
  //   }
  // }
  // nums.push(exp.split("=")[1]);
  // //Layout: Operator, val1, val2, answer

  // //val 1 - Operator - Val2 = answer ?
  // for (i = 0; i < Math.pow(10, base); i++) {
  //   if (i.toString().length == base) {
  //     var vals = i.toString().split("");
  //     if (
  //       eval(nums[1] + nums[0] + nums[2].replace("?", vals[0])) ==
  //       +nums[3].replace("?", vals[1])
  //     ) {
  //       console.log("val1 is " + vals[0] + " and val 2 is " + vals[1]);
  //     }
  //   }
  // }

  //Adjacent negatives = positive

  //If multiple digits work return lowest one (int)
  //If no digits work return -1 (int)
  return nums.length > 0
    ? nums.sort(function (a, b) {
        return a - b;
      })[0]
    : -1;
}

console.log(solveExpression("?37798-?13815=23983"));
