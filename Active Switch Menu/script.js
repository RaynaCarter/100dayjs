// active menu switcher
const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) => {
    // tellsus if the items in the header were selcted 
    const navLink = e.target.parentElement;
    if (navLink.classList.contains("link")) {
        navList.querySelector(".active").classList.remove("active");
        navLink.classList.add("active");
    }
});