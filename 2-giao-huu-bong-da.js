/**
 * Hàm combination tính số cách sắp xếp k phần tử giống nhau trong n phần tử
 * @param {number} k
 * @param {number} n
 * @returns
 */
const combination = (k, n) => {
  if (k === 0 || k === n) {
    return 1;
  } else {
    return combination(k - 1, n - 1) + combination(k, n - 1);
  }
};

/**
 *
 * @param {*} testCases mỗi testCase là một mảng chứa 2 số đại diện cho tỉ số của hai đội [TT, TTLab]
 * @returns một mảng chứa đầu ra tương ứng của mỗi testCase
 */
const giaoHuuBongDa = (testCases) => {
  const results = [];
  testCases.forEach((testCase) => {
    const [tt, ttLab] = testCase;
    results.push(combination(tt, tt + ttLab));
  });
  return results;
};

console.log(
  giaoHuuBongDa([
    [2, 0],
    [1, 3],
  ])
); // [1, 4]

console.log(
  giaoHuuBongDa([
    [1, 1],
    [2, 2],
    [1, 4],
  ])
); // [2, 6, 5]
