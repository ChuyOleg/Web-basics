"use strict";

const DOWNLOAD_BUTTON = document.getElementById("download");
const RANDOM_USER_URL = "https://randomuser.me/api";
const RESULT_MSG = document.getElementById("resultMsg");

const downloadUsers = () => {
    const cards = document.getElementsByClassName('card')
    for (const card of cards){
        fetch(RANDOM_USER_URL)
            .then(response => response.json(), () => {RESULT_MSG.innerText="Error"})
            .then(user => {
                const userData = user.results[0];
                card.getElementsByClassName("card-img")[0].src = userData.picture.large;
                card.getElementsByClassName("card-cell")[0].innerText = "Cell: " + userData.cell;
                card.getElementsByClassName("card-city")[0].innerText = "City: " + userData.location.city;
                card.getElementsByClassName("card-country")[0].innerText = "Country: " + userData.location.country;
                card.getElementsByClassName("card-code")[0].innerText = "Postal code: " + userData.location.postcode;
                RESULT_MSG.innerText='Success!'
            }).catch(() => alert("Something went wrong..."));
    }
}

DOWNLOAD_BUTTON.addEventListener("click", () => downloadUsers());
