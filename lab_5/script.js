"use strict";

// ______ TASK 1 _____

const FORM = document.getElementById("formId");

const submitForm = ev => {
    ev.preventDefault();

    let failCondition = false;

    const namePattern = new RegExp(FORM.name.pattern);
    const name = FORM.name.value;
    const nameError = document.getElementById("invalid-pib");
    if (namePattern.test(name)) {
        nameError.hidden = true;
    } else {
        nameError.hidden = false;
        failCondition = true;
    }

    const groupPattern = new RegExp(FORM.group.pattern);
    const group = FORM.group.value;
    const groupError = document.getElementById("invalid-group");
    if (groupPattern.test(group)) {
        groupError.hidden = true;
    } else {
        groupError.hidden = false;
        failCondition = true;
    }

    const phonePattern = new RegExp(FORM.phone.pattern);
    const phone = FORM.phone.value;
    const phoneError = document.getElementById("invalid-phone");
    if (phonePattern.test(phone)) {
        phoneError.hidden = true;
    } else {
        phoneError.hidden = false;
        failCondition = true;
    }


    const idCardPattern = new RegExp(FORM.idCard.pattern);
    const idCard = FORM.idCard.value;
    const idCardError = document.getElementById("invalid-ID-card");
    if (idCardPattern.test(idCard)) {
        idCardError.hidden = true;
    } else {
        idCardError.hidden = false;
        failCondition = true;
    }

    const facultyPattern = new RegExp(FORM.faculty.pattern);
    const faculty = FORM.faculty.value;
    const facultyError = document.getElementById("invalid-faculty");
    if (facultyPattern.test(faculty)) {
        facultyError.hidden = true;
    } else {
        facultyError.hidden = false;
        failCondition = true;
    }

    if (!failCondition) {
        document.getElementById("result-PIB").innerText = "ПІБ: " + name;
        document.getElementById("result-group").innerText = "Група: " + group;
        document.getElementById("res-phone").innerText = "Телефон: " + phone;
        document.getElementById("res-ID-card").innerText = "ID-card: " + idCard;
        document.getElementById("res-faculty").innerText = "Факультет: " + faculty;
    } else {
        document.getElementById("result-PIB").innerText = "";
        document.getElementById("result-group").innerText = "";
        document.getElementById("res-phone").innerText = "";
        document.getElementById("res-ID-card").innerText = "";
        document.getElementById("res-faculty").innerText = "";
    }
};

FORM.addEventListener("submit", ev => submitForm(ev));

// ______ TASK 2 _____

const VARIANT_CELL =  document.getElementById("variantCell");

const randomColor = () => {
    VARIANT_CELL.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const paletteColor = () => {
    const palette = document.getElementById("palette");
    VARIANT_CELL.style.backgroundColor = palette.value;
}

const fullColumnPaletteColor = () => {
    const palette = document.getElementById("palette");
    const rows = document.querySelectorAll("table tr");
    rows.forEach((row) => {
       const cell = row.getElementsByTagName("th")[1];
       cell.style.backgroundColor = palette.value;
    });
}

VARIANT_CELL.addEventListener("mouseover", () => randomColor());
VARIANT_CELL.addEventListener("click", () => paletteColor());
VARIANT_CELL.addEventListener("dblclick", () => fullColumnPaletteColor());
