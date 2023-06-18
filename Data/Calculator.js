import { NumPadButtons } from "../Constants";

export var input = "";
export var result = "0";
export var memoryStorage = [];
export var lastStoredMemoryValue = "";

export function addChar(character) {
  if (input == null || input == "0") input = character;
  else input += character;
}
export function deleteChar() {
  input = input.substring(0, input.length - 1);
}
export function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}
export function cos(value) {
  return Math.cos(value);
}

export function sin(value) {
  return Math.sin(value);
}

export function tan(value) {
  return Math.tan(value);
}

export function sqrt(value) {
  return Math.sqrt(value);
}

export function ln(value) {
  return Math.log(value);
}

export function exp(value) {
  return Math.exp(value);
}

export function percent() {}

export function changeSign() {
  if (input.substring(0, 1) == "-") input = input.substring(1, input.length);
  else input = "-" + input;
}

//calculate and show result
export function calculate() {
  //pervalue caclulation
  result = "";
}

function square(value) {
  value = eval(value) * eval(value);
}

function isNum(num) {
  var isNum = true;
  for (var i = 0; i < num.length; i++) {
    var ch = str.charAt(i);
    for (var j = 0; j < 10; j++) {
      if (ch !== NumPadButtons[j]) {
        isNum = false;
        break;
      }
    }
    if (!isNum) break;
  }
  return isNum;
}
