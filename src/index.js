module.exports = function getZerosCount(number) {
  var multiplier = 5;
  var arr = [];
  var result = 0;

  while(arr[arr.length-1] >= 1 || arr.length == 0) {
    arr.push(Math.floor(number / multiplier));
    multiplier *= 5;
  }

  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  
  return result;
}
