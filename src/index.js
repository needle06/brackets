module.exports = function check(str, bracketsConfig) {
  let leftBrackets = [];
  let rightBrackets = [];
  bracketsConfig.forEach(element => {
      leftBrackets.push(element[0]);
      rightBrackets.push(element[1]);
  });
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let comparableChar = str[i];
    if (leftBrackets.includes(comparableChar) && rightBrackets.includes(comparableChar)) {
        if (stack.length == 0) {
            stack.push(comparableChar)
            continue
        }
        if (stack[stack.length - 1] == comparableChar) {
            stack.pop()
        } else {
            stack.push(comparableChar)
        }
        continue
    }

    if (leftBrackets.includes(comparableChar)) {
        stack.push(comparableChar);
        continue
    }

    if (rightBrackets.includes(comparableChar)) {
        if (stack.length == 0) return false;
        let poppedBracket = stack.pop();
        if (leftBrackets.indexOf(poppedBracket) != rightBrackets.indexOf(comparableChar)) return false
    }
  }
    if (stack.length > 0) return false

  return true;
}
