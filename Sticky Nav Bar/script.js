// smooth scrolling behavior with javascript 

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