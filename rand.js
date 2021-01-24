// function mirror(data) {
//   if (data.length == 0) return data;
//   var newData = JSON.parse(
//     JSON.stringify(
//       data.sort((a, b) => {
//         return a - b;
//       })
//     )
//   );
//   for (i = 0; i < data.length + 1; i++) {
//     if (newData[data.length - i] != undefined) {
//       if (newData[data.length - i] != Math.max.apply(Math, data)) {
//         newData.push(newData[data.length - i]);
//       }
//     }
//   }

//   return newData;
// }

function mirror(data) {
  var fw = [];
  var bw = [];
  data.forEach((element) => {
    fw.push(element);
    bw.push(element);
  });
  return fw.sort((a, b) => a - b).concat(bw.sort((a, b) => b - a).slice(1));
}

function rgb(r, g, b) {
  const hexData = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const rgb = [r, g, b];
  var hex = "";

  for (cc of rgb) {
    var val = cc;
    if (val > 255) val = 255;
    if (val < 0) val = 0;

    var v1 = Math.floor(val / 16);
    var v2 = val % 16;
    console.log(v1);
    console.log(v2);
    hex += hexData[v1];
    hex += hexData[v2];
  }

  return hex;
}

function leaderboardSort(leaderboard, changes) {
  for (ch of changes) {
    var [player, change] = ch.split(" "),
      pos = leaderboard.findIndex((ix) => ix === player); //Finding matching player position
    leaderboard.splice(pos, 1); //Deleting existing record
    leaderboard.splice(pos - change, 0, player); //Adding new rank.
  }

  return leaderboard;
}

//Pagination helper

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.itemsPerPage = itemsPerPage;
  this.items = collection;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.items.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.itemCount() / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex < 0 || this.pageCount() <= pageIndex) return -1;
  return this.items
    .slice(pageIndex * this.itemsPerPage(), this.itemCount())
    .splice(0, this.itemsPerPage()).length;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  return Math.floor(itemIndex / this.itemsPerPage);
};
