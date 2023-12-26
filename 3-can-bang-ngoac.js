const isValidStringLength = (str) => {
  return str.length < 10000;
};

/**
 *
 * @param {string} str
 * @returns Trả về YES nếu là có tính đúng dắn dâu và ngược lại
 */
const balanceBracket = (str) => {
  if (!isValidStringLength(str)) return false;
  const matchingBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  // Mảng chứa các kí tự ( [ {
  const stackbalance = [];
  for (const char of str) {
    switch (char) {
      case "(":
      case "[":
      case "{":
        stackbalance.push(char);
        break;
      case ")":
      case "]":
      case "}":
        const lastBalance = stackbalance.pop();
        if (lastBalance !== matchingBrackets[char]) {
          return "NO";
        }
      default:
        break;
    }
  }
  return stackbalance.length === 0 ? "YES" : "NO";
};

console.log(balanceBracket("")); // YES
console.log(balanceBracket("{ [ ( ) ] }")); // YES
console.log(balanceBracket("(abcxyz)")); // YES
console.log(balanceBracket("{[()]}")); // YES
console.log(balanceBracket("{[()}]")); // NO
console.log(balanceBracket("]()[")); // NO
