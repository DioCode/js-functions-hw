function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}

/////////

// function isUnique(str) {
//   return str.length === new Set(str).length;
// }

// for self-check
console.log(isUnique('1234') === true);
console.log(isUnique('1233') === false);

// if cond