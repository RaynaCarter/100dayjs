// Random Generator App
// Created by Carter, Rayna (R.) on 12/04/2024

const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = randomNumber;
};

btn.addEventListener("click", generateNumber);

//generates number upon page loading 
generateNumber();
