function calc(ch) {
  if (ch == "=") {
    document.getElementsByClassName("input").text1.value = eval(
      document.getElementsByClassName("input").text1.value
    );
  } else {
    if (ch == "C") {
      document.getElementsByClassName("input").text1.value = "";
    } else {
      document.getElementsByClassName("input").text1.value += ch;
    }
  }
}
