module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    bracketsConfig.forEach(element => {
      if(str[i] === element[0]) {
        stack.push(str[i])
      } if(str[i] === element[1]) {
        stack.pop();
      }
    });
  }
  return stack.length === 0;
}