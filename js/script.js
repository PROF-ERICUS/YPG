/* =========================================
MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileNavigation = document.getElementById("mobileNavigation");

if (menuToggle && mobileNavigation) {


menuToggle.addEventListener("click", () => {

    mobileNavigation.classList.toggle("open");

    const icon = menuToggle.querySelector(".material-icons");

    if (mobileNavigation.classList.contains("open")) {
        icon.textContent = "close";
    } else {
        icon.textContent = "menu";
    }

});


}


/* =========================================
CLOSE MOBILE MENU AFTER CLICK
========================================= */

const mobileLinks = document.querySelectorAll(
"#mobileNavigation a"
);

mobileLinks.forEach(link => {


link.addEventListener("click", () => {

    mobileNavigation.classList.remove("open");

    const icon = menuToggle.querySelector(".material-icons");

    if (icon) {
        icon.textContent = "menu";
    }

});


});

/* =========================================
CURRENT YEAR
========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
currentYear.textContent = new Date().getFullYear();
}

/* =========================================
HEADER SHADOW ON SCROLL
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {


if (!header) return;

if (window.scrollY > 20) {
    header.style.boxShadow =
        "0 5px 25px rgba(0, 0, 0, 0.08)";
} else {
    header.style.boxShadow = "none";
}


});

