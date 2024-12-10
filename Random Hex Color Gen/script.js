// Random Hex Color Generator App
// Created by Carter, Rayna (R.) on 12/04/2024
const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const generateColor = () => {
    const randomColor = "#"+ Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = randomColor;
    hex.innerHTML = randomColor
};

btn.addEventListener("click", generateColor);

generateColor();