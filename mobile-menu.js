// Mobile Menu Functionality
const menuIcon = document.querySelector(".menu-icon");
const navlist = document.querySelector(".navlist");
const overlay = document.querySelector(".overlay");

// Toggle Menu
function toggleMenu() {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}

// Event Listeners
menuIcon.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Close menu when clicking nav links
document.querySelectorAll(".navlist a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Prevent Body Scroll
document.body.classList.remove("no-scroll");
