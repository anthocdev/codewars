function solution(input, markers) {
  answer = "";
  for (ln of input.split("\n")) {
    for (marker of markers) {
      ix = ln.indexOf(marker);
      if (ix != -1) {
        ln = ln.slice(0, ix); //Get str up to comment marker
      }
    }

    answer.length > 0 ? (answer += "\n" + ln.trim()) : (answer += ln.trim());
  }
  return answer;
}

// console.log(
//   solution("apples, plums % and bananas\npears\noranges !applesauce", [
//     "%",
//     "!",
//   ])
// );

class User {
  constructor() {
    this.rank = -8; // -8 Starting
    this.progress = 0; //0 Starting, max 100;
  }
}

User.prototype.rank = function () {
  return this.rank;
};

User.prototype.progress = function () {
  return this.progress;
};

User.prototype.incProgress = function (val) {
  if (!isNaN(val) && val != 0 && val > -9 && val < 9) {
    rankDiff = val - this.rank;
    if (val >= 1 && this.rank <= -1) rankDiff--; //Ignoring 0 rank
    rankup = 10 * rankDiff * rankDiff;
    this.progress += rankup;
    //@TODO: 0 Rank ignored
    //Turn > 99 into new levels
    if (this.progress > 99) {
      this.rank += Math.floor(this.progress / 100);
      this.progress = this.progress % 100;
    }
    return this.progress;
  }

  throw new Error();
};

var jack = new User();
console.log(jack.incProgress(-7));
console.log(jack.progress);
console.log(jack.rank);
