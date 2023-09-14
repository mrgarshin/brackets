module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    bracketsConfig.forEach(element => {
      if(str[i] === element[0]) {
        stack.push(str[i])
      } if(str[i] === element[1] && stack[stack.length-1] === element[0]) {
        stack.pop();
      }
    });
  }
  // console.log(stack)
  return stack.length === 0;
}

// const config2 = [['1', '2'], ['3', '4']];
// check('1324', config2)