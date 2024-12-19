console.log(window);
console.log(Object.getOwnPropertyNames(window));

// setItem(): Add key and value to localStorage 
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// window.localStorage.setItem("key", "value");

// Note: localStorage can only store strings 

// SET ITEM IN LOCAL STORAGE
window.localStorage.setItem("firstName", "Bob");
localStorage.setItem("LastName", "Doe");

const person = {
    fullname: "Jane Doe",
    age: 34,
    location: "France"
};

// We used JSON.stringify to convert the info in person to a string before storing it to localStorage
localStorage.setItem("user", JSON.stringify(person));

const fruits = ["Pineapple", "Apple", "Guava"];

localStorage.setItem("fruits", JSON.stringify(fruits));

// GET ITEM FROM LOCAL STORAGE
// console.log(localStorage.getItem("firstName"));

// REMOVE ITEM FROM LOCAL STORAGE
localStorage.removeItem("fruits");

// CLEARING ALL ITEMS FROM LOCALSTORAGE
localStorage.clear();

// USING THE KEY METHOD
localStorage.setItem("LastName", "Doe");
localStorage.setItem("age", "29292929");

console.log(localStorage.key(0));
console.log(localStorage.key(1));