//Java Script Switch, this is as same as If Else statement

let A = 20;

switch (true) {
  case A <= 100 && A >= 50:
    document.write("A+");
    break;
  case A <= 90 && A >= 80:
    document.write("A");
    break;
  case A <= 70 && A >= 60:
    document.write("B");
    break;
  case A <= 50 && A >= 40:
    document.write("C");
    break;
  default:
    document.write("F");
}

let B = 50;
switch (true) {
  case B == A:
    document.write("Ok");
    break;
  case B !== A:
    document.write("Not Equal");
  default:
    document.write("Not A Nimber");
}
