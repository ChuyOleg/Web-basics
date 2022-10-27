"use strict";

const BLUE_COLOR = "blue";
const GREEN_COLOR = "green";
const WHITE_COLOR = "white";
const BLACK_COLOR = "black";

const THIRD_ELEMENT = document.getElementById("education");
const FOURTH_ELEMENT = document.querySelector(".hobby");

const changeColor = element => () => {
    if (element.style.backgroundColor === BLUE_COLOR) {
        element.style.color = BLACK_COLOR;
        element.style.backgroundColor = GREEN_COLOR;
    } else {
        element.style.color = WHITE_COLOR;
        element.style.backgroundColor = BLUE_COLOR;
    }
}

THIRD_ELEMENT.addEventListener("click", changeColor(THIRD_ELEMENT));
FOURTH_ELEMENT.addEventListener("click", changeColor(FOURTH_ELEMENT));
