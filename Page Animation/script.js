// smooth scrolling behavior with javascript 
AOS.init({
    duration: 1000,
}) 
const links = document.querySelectorAll(".nav-list li a")

for (link of links){
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();

    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}

// Sticky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    // toggles the class from header to header.sticky which 
    // has a different CSS section associated with it 
    header.classList.toggle("sticky", window.scrollY > 0);
})

// SCROLL INDICATOR
window.onscroll = () => scrollProgress();
function scrollProgress() {
    // there is an or (||) statement because we are targeting both chrome and safari 
    // scrollTop gets or sets the number of pixels by which an elements content is scrolled 
    // from its top edge.
 
    const currentState = document.body.scrollTop || document.documentElement.scrollTop;

    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercentage = (currentState / pageHeight) * 100;

    progressBar = document.querySelector(".progress");
    
    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPercentage + "%";

    // News letter JS
    const newsLetter = document.querySelector(".newsletter");
     if (scrollPercentage > 80) {
        newsLetter.style.transform = "translateX(0)";
     } else {
        newsLetter.style.transform = "translate(-100%)";
     }

     document.querySelector(".fa-times").addEventListener("click", () => {
        newsLetter.style.transform = "translateX(-100%)";
     });
}

