function wraps(str, width) {
  let newStr = str[0];

  for (let i = 1; i < str.length; i++) {
    if (i % width == 0) {
      newStr += `\n${str[i]}`;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(wraps('abababab', 2))