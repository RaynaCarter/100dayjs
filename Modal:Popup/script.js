// creation of variables 
const popup = document.querySelector(".popup"),
    popupContent = document.querySelector(".popup-content")
    btn = document.querySelector(".btn"),
    close = document.querySelector(".close");

btn.addEventListener("click", openPopup);
close.addEventListener("click", closePopup);
popup.addEventListener("click", closePopup);

// open popup/popup
// the .preventdeafualt prevents the refreshing of the page when the button is pushed 
function openPopup(example) {
example.preventDefault();
popup.style.display = "block";
}

// close popup
function closePopup() {
    popup.style.display = "none";
}