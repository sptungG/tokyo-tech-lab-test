/**
 *
 * @param {string} str
 * @returns Trả về YES nếu là có tính đúng dắn dâu và ngược lại
 */
const balanceBracket = (str) => {
  // Mảng chứa các kí tự ( [ {
  let arr = [];
  for (const char of str) {
    const charCode = char.charCodeAt(0);
    if (charCode === 40 || charCode === 91 || charCode === 123) {
      arr.push(char);
    } else {
      const lastArr = arr.pop();
      if (lastArr === undefined || Math.abs(lastArr.charCodeAt(0) - charCode) > 2) {
        return "NO";
      }
    }
  }
  return arr.length === 0 ? "YES" : "NO";
};

console.log(balanceBracket("()")); // YES
console.log(balanceBracket("{[()]}")); // YES
console.log(balanceBracket("{[()}]")); // NO
console.log(balanceBracket("]()[")); // NO
