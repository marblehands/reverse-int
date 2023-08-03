module.exports = function reverse (n) {
  let result = '';
  let module = Math.abs(n);
  let str = String(module);
  let i = str.length;
  
  while ( i > 0 ) {
    result = result + str[i - 1];
    i = i - 1;
  }
  return result;
}
