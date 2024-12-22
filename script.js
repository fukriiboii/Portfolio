const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.onclick = function() {
    navBar.classList.toggle("active");
};

const navLinks = document.querySelectorAll(".nav-bar a");

navLinks.forEach(link => {
    link.onclick = function() {
        navBar.classList.remove("active");
    };
});