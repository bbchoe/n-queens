/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n, newBoard) {
  if (newBoard === undefined) {
    var newBoard = new Board ({ n : n });
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++ ) {
      if (newBoard.getPiece(i, j) === 0) {
        newBoard.togglePiece(i, j);
        if (newBoard.hasRowConflictAt(i) || newBoard.hasColConflictAt(j)) {
          newBoard.togglePiece(i, j);
        }
      }
    }
  }
  var resArr = [];
  for (var i = 0; i < n; i ++) {
    resArr.push(newBoard.get(i));
  }
  var solution = resArr; //fixme
  //debugger;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var resultArray = [];
  var count = n; // n is the size of rows or columns, essentially a side length; n*n = area, which is total number of spots left
  //What is our base case? How will we stop this recursion after it has found all the solutions?
  //The correct count is as follows [1, 1, 2, 6, 24, 120, 720, 5040, 40320]

  var findASolution = (count, starterBoard) => {
    if (count === 1) {
      var aSolution = findNRooksSolution(n, starterBoard);
      if (!resultArray.contains(aSolution)) {
        resultArray.push(aSolution);
      }
    } else if {
      for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
          if (starterBoard.getPiece(i, j) === 0) {
            starterBoard.togglePiece(i, j);
            if (starterBoard.hasAnyColConflicts() || starterBoard.hasAnyRowConflicts()) {
              starterBoard.togglePiece(i, j);
            }
          }
          findASolution(count - 1, starterBoard);
        }
      }
    }
  };

  var solutionCount = resultArray.length; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

// Brian and Vlad test cases

var board3 = new Board({n:3});
board3.togglePiece(0,1);
board3.togglePiece(1,2);
var result = findNRooksSolution(3, board3);
console.log('show result ' ,result);
