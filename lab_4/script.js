"use strict";

const BLUE_COLOR = "blue";
const GREEN_COLOR = "green";
const WHITE_COLOR = "white";
const BLACK_COLOR = "black";

const THIRD_ELEMENT = document.getElementById("education");
const FOURTH_ELEMENT = document.querySelector(".hobby");

const REDUCE_IMG_SIZE_BUTTON = document.getElementById("reduceImgSize");
const INCREASE_IMG_SIZE_BUTTON = document.getElementById("increaseImgSize");
const ADD_IMG_BUTTON = document.getElementById("addImg");
const REMOVE_IMG_BUTTON = document.getElementById("removeImg");
const PHOTO_CONTAINER = document.querySelector(".img-container");
const PHOTO_ELEMENT_COPY = document.querySelector(".VolodumurImg").cloneNode();

const changeColor = element => () => {
    if (element.style.backgroundColor === BLUE_COLOR) {
        element.style.color = BLACK_COLOR;
        element.style.backgroundColor = GREEN_COLOR;
    } else {
        element.style.color = WHITE_COLOR;
        element.style.backgroundColor = BLUE_COLOR;
    }
}

const findLastElemInContainer = container => {
    return container.querySelector("img:last-child");
}

const reduceImgSize = container => () => {
    const lastElem = findLastElemInContainer(container);
    if (lastElem.height > 100) {
        lastElem.height -= 100;
        lastElem.width -= 220;
    }
}

const increaseImgSize = container => () => {
    const lastElem = findLastElemInContainer(container);
    if (lastElem.height < 600) {
        lastElem.height += 100;
        lastElem.width += 220;
    }
}

const addElement = container => () => {
    container.appendChild(PHOTO_ELEMENT_COPY.cloneNode());
}

const removeElement = container => () => {
    console.log(container)
    const lastElem = findLastElemInContainer(container);
    lastElem.remove();
}

THIRD_ELEMENT.addEventListener("click", changeColor(THIRD_ELEMENT));
FOURTH_ELEMENT.addEventListener("click", changeColor(FOURTH_ELEMENT));

REDUCE_IMG_SIZE_BUTTON.addEventListener("click", reduceImgSize(PHOTO_CONTAINER));
INCREASE_IMG_SIZE_BUTTON.addEventListener("click", increaseImgSize(PHOTO_CONTAINER));
ADD_IMG_BUTTON.addEventListener("click", addElement(PHOTO_CONTAINER));
REMOVE_IMG_BUTTON.addEventListener("click", removeElement(PHOTO_CONTAINER));
