
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", findPalindrome)

// using the substring method 
function findPalindrome() {
    const word = document.querySelector(".input-text").value;
    let len = word.length;

// the Math.floor(length/2) helps to handle palindromes with odd numbers
// converts it to lower case
    let start = word.substring(0,Math.floor(len/2)).toLowerCase();

    let end = word.substring(len - Math.floor(len/2)).toLowerCase();

// For odd numbered palindromes, by the end of these lines of code the first 
// and last part of the palidrome will be isolated 
// leaving the middle letter

  let inverted = end.split("").reverse().join("");

  
    //let inverted = [...end].reverse().join("");
    if(start == inverted) {
        result.innerHTML = `${word.toUpperCase()} is a indeed a palindrome`;
    } else {
        result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
        
    }
}