/* ==========================================
   AI Portfolio - main.js
   Part 1
========================================== */

// ===========================
// Mobile Navigation
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

}

// Close menu after clicking

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("open");

    });

});

// ===========================
// Sticky Navbar
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("sticky");

    }

    else {

        navbar.classList.remove("sticky");

    }

});

// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===========================
// Active Navigation Link
// ===========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================
// Scroll To Top Button
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    }

    else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/* ==========================================
   AI Portfolio - main.js
   Part 2
========================================== */

// ===========================
// Typing Animation
// ===========================

const typingElement = document.querySelector(".typing");

const professions = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Deep Learning Engineer",
    "Computer Vision Engineer",
    "NLP Engineer",
    "Generative AI Engineer",
    "Embedded AI Engineer"
];

let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentText = professions[professionIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            professionIndex++;

            if (professionIndex >= professions.length) {

                professionIndex = 0;

            }

        }

    }

    const speed = isDeleting ? 50 : 120;

    setTimeout(typeEffect, speed);

}

typeEffect();


// ===========================
// Animated Skill Bars
// ===========================

const skillBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const width = entry.target.dataset.width;

            entry.target.style.width = width;

        }

    });

}, {

    threshold: 0.4

});

skillBars.forEach(bar => {

    bar.style.width = "0";

    skillObserver.observe(bar);

});


// ===========================
// Counter Animation
// ===========================

const counters = document.querySelectorAll(".stat-card h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const finalText = counter.innerText;

        const finalNumber = parseInt(finalText);

        if (isNaN(finalNumber)) return;

        let current = 0;

        const increment = Math.ceil(finalNumber / 60);

        const timer = setInterval(() => {

            current += increment;

            if (current >= finalNumber) {

                current = finalNumber;

                clearInterval(timer);

            }

            if (finalText.includes("+")) {

                counter.innerText = current + "+";

            }

            else if (finalText.includes("%")) {

                counter.innerText = current + "%";

            }

            else {

                counter.innerText = current;

            }

        }, 25);

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.6

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


// ===========================
// Scroll Reveal Animation
// ===========================

const revealElements = document.querySelectorAll(

    ".glass, .project-card, .timeline-item, .education-card, .stat-card"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(element => {

    element.classList.add("hidden");

    revealObserver.observe(element);

});
/* ==========================================
   AI Portfolio - main.js
   Part 3
==========================================*/


// ======================================
// Hero Fade Animation
// ======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ======================================
// Floating Hero Card
// ======================================

const heroCard = document.querySelector(".profile-card");

if (heroCard) {

    let direction = 1;

    let position = 0;

    setInterval(() => {

        position += direction * 0.3;

        heroCard.style.transform =
            `translateY(${position}px)`;

        if (position >= 12)

            direction = -1;

        if (position <= -12)

            direction = 1;

    }, 25);

}



// ======================================
// Mouse Glow Effect
// ======================================

const glow = document.createElement("div");

glow.classList.add("mouse-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});



// ======================================
// Glass Card Hover Effect
// ======================================

const glassCards = document.querySelectorAll(".glass");

glassCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX =

            (centerY - y) / 18;

        const rotateY =

            (x - centerX) / 18;

        card.style.transform =

            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});



// ======================================
// AI Pulse Animation
// ======================================

const projectCards =

document.querySelectorAll(".project-card");

setInterval(() => {

    const random = Math.floor(

        Math.random() * projectCards.length

    );

    projectCards[random].classList.add("pulse");

    setTimeout(() => {

        projectCards[random].classList.remove("pulse");

    }, 1800);

}, 3000);




// ======================================
// Parallax Background
// ======================================

window.addEventListener("scroll", () => {

    const bg =

        document.querySelector(".bg-animation");

    if (!bg) return;

    bg.style.transform =

        `translateY(${window.scrollY * 0.25}px)`;

});




// ======================================
// Hero Text Fade
// ======================================

const heroContent =

document.querySelector(".hero-content");

if (heroContent) {

    heroContent.style.opacity = 0;

    heroContent.style.transform =

        "translateY(50px)";

    setTimeout(() => {

        heroContent.style.transition =

            "1.4s ease";

        heroContent.style.opacity = 1;

        heroContent.style.transform =

            "translateY(0px)";

    }, 400);

}



// ======================================
// Project Card Hover Glow
// ======================================

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =

            "0 0 30px #00e5ff";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "";

    });

});



// ======================================
// Navbar Blur
// ======================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.style.backdropFilter =

            "blur(18px)";

    }

    else {

        navbar.style.backdropFilter =

            "blur(8px)";

    }

});



// ======================================
// Random Floating Icons
// ======================================

const icons =

document.querySelectorAll(".hero-social a");

icons.forEach((icon, index) => {

    let angle = index * 60;

    setInterval(() => {

        angle += 0.4;

        icon.style.transform =

            `translateY(${Math.sin(angle)*6}px)`;

    }, 25);

});
/* ==========================================
   AI Portfolio - main.js
   Part 4
==========================================*/


// ======================================
// AI Particle Background
// ======================================

const background = document.querySelector(".bg-animation");

if (background) {

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.top = Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particle.style.animationDuration =
            6 + Math.random() * 8 + "s";

        particle.style.width =
            4 + Math.random() * 8 + "px";

        particle.style.height =
            particle.style.width;

        background.appendChild(particle);

    }

}



// ======================================
// Contact Form Validation
// ======================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =

            form.querySelector('input[type="text"]');

        const email =

            form.querySelector('input[type="email"]');

        const message =

            form.querySelector("textarea");

        if (

            name.value.trim() === "" ||

            email.value.trim() === "" ||

            message.value.trim() === ""

        ) {

            alert("Please fill all fields.");

            return;

        }

        alert("Thank you! Your message has been sent.");

        form.reset();

    });

}



// ======================================
// Dynamic Footer Year
// ======================================

const year = document.querySelector(".copyright");

if (year) {

    year.innerHTML =

        `© ${new Date().getFullYear()} Amal M <br>
         Designed & Developed using HTML, CSS & JavaScript`;

}



// ======================================
// Page Loader
// ======================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.classList.add("loader-hide");

        setTimeout(() => {

            loader.remove();

        }, 800);

    }

});



// ======================================
// Scroll Performance
// ======================================

let scrollTimer;

window.addEventListener("scroll", () => {

    clearTimeout(scrollTimer);

    document.body.classList.add("scrolling");

    scrollTimer = setTimeout(() => {

        document.body.classList.remove("scrolling");

    }, 150);

});



// ======================================
// Visibility API
// ======================================

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        console.log("Portfolio Paused");

    }

    else {

        console.log("Portfolio Active");

    }

});



// ======================================
// Console Branding
// ======================================

console.log(

`%c
=====================================
        AMAL M PORTFOLIO
=====================================
AI Engineer
Machine Learning Engineer
Data Scientist
=====================================
`,

"color:#00e5ff;font-size:15px;font-weight:bold;"

);



// ======================================
// Welcome Animation
// ======================================

setTimeout(() => {

    document.body.classList.add("page-ready");

}, 300);



// ======================================
// Keyboard Shortcut
// Press H -> Go Home
// ======================================

document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "h") {

        document.querySelector("#home")

            .scrollIntoView({

                behavior: "smooth"

            });

    }

});



// ======================================
// Image Lazy Loading
// ======================================

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("loaded");

            imageObserver.unobserve(entry.target);

        }

    });

});

images.forEach(img => {

    imageObserver.observe(img);

});



// ======================================
// End of main.js
// ======================================

console.log("Portfolio Loaded Successfully");
