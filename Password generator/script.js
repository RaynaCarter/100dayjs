const empty = "",
uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lCase = "abcdefghijklmnopqrstuvwxyz",
number = "0123456789",
symbol = "!@#$%^&*-_";

// ID and Class Identifiers 
const pLength = document.getElementById("p-length");
const subButton = document.getElementById("submit");
const pUpper = document.getElementById("p-uppercase");
const pLower = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const password = document.getElementById("password");

//Event listeners 
subButton.addEventListener("click", genPw);
// pUpper.addEventListener("click", genPw);
// pLower.addEventListener("click", genPw);
// pNumber.addEventListener("click", genPw);
// pSymbol.addEventListener("click", genPw);


function genPw() {
    let initialPw = empty;
    let charOptions = "";
    // generates a random number from 0-25 (for alphabet) or 0-10 (for numbers and symbols)
    // add initial character if checked 
    if(pUpper.checked) {
        initialPw += uCase.charAt(Math.floor(Math.random() * 26));
        charOptions += uCase;
    }if(pLower.checked) {
        initialPw += lCase.charAt(Math.floor(Math.random() * 26));
        charOptions += lCase;
    }if (pNumber.checked) {
        initialPw += number.charAt(Math.floor(Math.random() * 10));
        charOptions += number;
    }if (pSymbol.checked) {
        initialPw += symbol.charAt(Math.floor(Math.random() * 10));
        charOptions += symbol;
    }
    scramble(initialPw);
    console.log(pLength.value);
    for (let i = 0; i < (pLength.value-(initialPw.length)); i++) {
        initialPw += charOptions.charAt(Math.floor(Math.random() * charOptions.length));     
    }
    console.log(initialPw);
    return initialPw
}

// I dont want the password to always start in a certain order so I'm gonna scramble it 
// Using the Fisher-Yates shuffle Algorithm
function scramble(initialPw) {
    // create an array of strings from the initialPw 
    let splitInitialPw = initialPw.split("");
    // interate through the indexes of the string working backwards
    for (let i = (splitInitialPw.length - 1); i > 0; i--) {
        // chose a random number between 0 and arr length
        let j = Math.floor(Math.random() * (i + 1));

        // swap every splitInitialPw[i] with a splitInitialPw[j]
        [splitInitialPw[i], splitInitialPw[j]] = [splitInitialPw[j], splitInitialPw[i]]
    }
    // console.log(splitInitialPw);
    initialPw = splitInitialPw.join;
    return initialPw;
}