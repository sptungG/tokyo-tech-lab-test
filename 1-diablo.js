/**
 * 0 ≤ `m`, `k`, `c` ≤ 1000
 *
 * 0 < `d` ≤ 1000
 */
const isValidInput = (m, d, k, c) =>
  0 <= m <= 1000 && 0 <= k <= 1000 && 0 <= c <= 1000 && 0 <= d <= 1000;

/**
 * @param {number} m là số con quái
 * @param {number} d độ phục hồi của thanh kiếm
 * @param {number} k độ bền của thanh kiếm giảm đi k
 * @param {number} c số tiền tốn đẻ sửa thanh kiếm
 * @returns số tiền để qua màn
 */
const diablo = (m, d, k, c) => {
  if (!isValidInput(m, d, k, c)) return;

  // Nếu độ bền ban đầu ít hơn hoặc bằng sát thương, và có nhiều hơn một con quái,
  // thì không thể tiếp tục, trả về -1.
  if (d <= k && m > 1) return -1;

  let count = 0; // số lần sửa chữa cần thiết
  let tg = d; // độ bền hiện tại bằng độ bền ban đầu

  // Tiếp tục vòng lặp cho đến khi không còn quái nào
  while (m > 0) {
    // Kiểm tra nếu độ bền hiện tại trừ đi sát thương nhỏ hơn hoặc bằng 0,
    // và còn nhiều hơn một con quái.
    if (tg - k <= 0 && m > 1) {
      count++; // Tăng biến đếm số lần sửa chữa
      tg = d; // Đặt lại độ bền hiện tại bằng độ bền ban đầu sau khi sửa chữa
    }

    m = m - 1; // Giảm số lượng quái
    tg -= k; // Giảm độ bền hiện tại đi giá trị sát thương
  }

  // Trả về tổng số vàng cần thiết cho sửa chữa
  return count * c;
};

console.log("- Diablo -");

console.log(diablo(10, 5, 1, 2)); // 4

console.log(diablo(10, 4, 1, 2)); // 4

console.log(diablo(10, 5, 2, 2)); // 8

console.log(diablo(10, 7, 8, 1)); // -1
