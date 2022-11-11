function febo() {
  var num = document.getElementById("numrange").value;

  if (num <= 0) {
    document.write("Invalid Number, Enter a positive integer.");
  } else {
    for (var i = 0; i < num; i++) {
      document.write(fibonaccix(i) + " ");
    }
  }
}
function fibonaccix(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonaccix(num - 1) + fibonaccix(num - 2);
  }
}
