
const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", countVowels);

// using the substring method 
function countVowels() {
   let vowelCount = 0;
   let wordVal = word.value.toLowerCase();

   for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    if (letter.match(/([a,e,i,o,u])/)) {
        vowelCount ++ ;
    }
    result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels` 
   }
}