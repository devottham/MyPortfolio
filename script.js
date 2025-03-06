// Mobile Menu Functionality
const menuIcon = document.querySelector(".menu-icon");
const navlist = document.querySelector(".navlist");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}

menuIcon.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Close menu when clicking nav links
document.querySelectorAll(".navlist a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 991) {
            toggleMenu();
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Current Page Active Link
const currentPage = window.location.pathname.split("/").pop() || 'index.html';
document.querySelectorAll(".navlist a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Touch Support
menuIcon.addEventListener("touchstart", (e) => {
    e.preventDefault();
    toggleMenu();
});

// Prevent Body Scroll
document.body.classList.remove("no-scroll");

// Rotating Text Animation
let text = document.querySelector(".text p");
if (text) {
    text.innerHTML = text.innerHTML.split("").map((char, i) =>
        `<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`
    ).join("");
}

// Form Submission Handling
document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    if (chatForm) {
        chatForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            })
            .then(response => {
                if (response.ok) {
                    alert('Message sent successfully!');
                    this.reset();
                } else {
                    alert('Failed to send message. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        });
    }
});

// Dynamic Year Update for Footer
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Lazy Loading for Images
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
        });
    }
});

// Prevent Default Touch Behavior for Buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('touchstart', (e) => {
        e.preventDefault();
        button.click();
    });
});
