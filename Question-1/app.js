function check() {
  var num1 = document.getElementById("firstnum").value;

  if (isNaN(num1)) {
    var st = "Not Valid Number";
    document.getElementById("checknum").innerHTML = st;
  } else {
    if (num1 == 0) {
      var st1 = "Number is Zero";
      document.getElementById("checknum").innerHTML = st1;
    } else if (num1 > 0) {
      var st2 = "Valid Positive Number";
      document.getElementById("checknum").innerHTML = st2;
    } else {
      var st3 = "Valid Negative Number";
      document.getElementById("checknum").innerHTML = st3;
    }
  }
}
