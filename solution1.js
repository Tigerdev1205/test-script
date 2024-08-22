function solution(S) {
  // Type your code here
  const up_count = S.split("^").length - 1;
  //   console.log("up_count", up_count);
  const down_count = S.split("v").length - 1;
  const left_count = S.split("<").length - 1;
  const right_count = S.split(">").length - 1;
  const max_count = Math.max(up_count, down_count, left_count, right_count);
  return S.length - max_count;
}
// Example usages:
console.log(solution("^vv<v")); // Output: 2
console.log(solution("v>>>vv")); // Output: 3
console.log(solution("<<<")); // Output:
// console.log(solution(2));
