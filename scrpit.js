let element = document.querySelector("button");

var number = 0;

function turnButtonRed() {
  element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button";
}

function turnButtonOrange() {
  element.style.backgroundColor = "orange";
  element.style.color = "white";
  element.innerHTML = "Orange Button";
}

function turnButtonGreen() {
  element.style.backgroundColor = "green";
  element.style.color = "white";
  element.innerHTML = "Green Button";
}

function greenButton() {
  if (element.innerHTML === "Red Button") {
    element.onclick = turnButtonGreen();
  } else {
    element.onclick = turnButtonRed;
  }
}

function malClick() {
  number++;
  console.log(number);
  if (number == 1 || number <= 5) {
    turnButtonRed();
  } else if (number == 6 || number <= 10) {
    turnButtonOrange();
  } else if (number >= 15) {
    turnButtonGreen();
  }
}
