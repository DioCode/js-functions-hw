// insertWhitespace('HelloWorld') -> 'Hello World'

// let str = prompt('Write some text');

// function insertWhitespace(str) {
//   str = str.split('str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90');
//   for (let i = 0; i < str.length; i++) {
//     // if (str[i] == str[i].toUpperCase()) {
//     //   // str[i].toUpperCase + '\n';
//     // }
//     // str = str.split('');
//   }
//   return str.join(' ');
// }

///////

function insertWhitespace(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (i + 1 !== str.length) {
      if (str[i + 1] === str[i + 1].toUpperCase()) {
        newStr += `${str[i]} `;
      } else {
        newStr += str[i];
      }
    } else {
      newStr += str[i];
    }

  }

  return newStr;
}

console.log(insertWhitespace('HelloWorld'));

console.log(insertWhitespace('HelloWorld') === 'Hello World');
console.log(insertWhitespace('MarvinTalksTooMuch') === 'Marvin Talks Too Much');

// if cond