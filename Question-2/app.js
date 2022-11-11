function sumArray() {
  var arr = [1, -1, 0, -3, 5];
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
    } else {
      sum += arr[i];
    }
  }

  document.getElementById(
    "checksum"
  ).innerHTML = `Sum of Positive Numbers in array[1, -1, 0, -3, 5] is : ${sum}`;
}
