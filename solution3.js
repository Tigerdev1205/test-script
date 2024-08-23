function solution(S) {
  // Type your code here
  const cost = {
    "^": { "^": 0, "<": 1, ">": 3, "v": 2 },
    "<": { "^": 3, "<": 0, ">": 2, "v": 1 },
    ">": { "^": 1, "<": 2, ">": 0, "v": 3 },
    "v": { "^": 2, "<": 3, ">": 1, "v": 0 },
  };

  let minMoves = Infinity

  for (let target of ['^', '<', '>', 'v']) {
      let moves = 0;
      for (let arrow of S) {

        moves += cost[arrow][target];
      }
      minMoves = Math.min(minMoves, moves);
  }
  return minMoves

}

// Example usages:
console.log(solution("^vv<")); // Output: 3
console.log(solution("vv>>vv")); // Output: 4
console.log(solution("<<<")); // Output: 0
console.log(solution("<^>v"));// Output: 6