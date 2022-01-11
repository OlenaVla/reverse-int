module.exports = function reverse (n) {
  let strNum = Math.abs(n).toString();
  let strRes = '';
  for (var i = strNum.length-1; i>=0; i--)
  {
     strRes += strNum.charAt(i);
  }
  return Number(strRes);
}
