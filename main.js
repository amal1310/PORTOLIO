/*==========================================
        TYPING EFFECT
==========================================*/

const roles = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Deep Learning Engineer",
    "Computer Vision Engineer",
    "Generative AI Developer",
    "Embedded & IoT Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent = currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 100);
}

window.onload = typeEffect;


/*==========================================
        ACTIVE NAVBAR
==========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop)
            current = section.getAttribute("id");

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current)
            link.classList.add("active");

    });

});


/*==========================================
        STICKY NAVBAR
==========================================*/

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(5,8,22,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    }

    else {

        navbar.style.background = "rgba(5,8,22,.65)";
        navbar.style.boxShadow = "none";

    }

});


/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==========================================
        SCROLL REVEAL
==========================================*/

const revealElements = document.querySelectorAll(

".hero-left,.hero-right,.about-container,.skill-card,.timeline-item,.project-card,.contact-box"

);

function reveal(){

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


/*==========================================
        COUNTER ANIMATION
==========================================*/

const counters = document.querySelectorAll(".card h1");

let started = false;

window.addEventListener("scroll",()=>{

    const about = document.querySelector("#about");

    if(!about) return;

    if(window.scrollY > about.offsetTop - 350 && !started){

        counters.forEach(counter=>{

            const target = parseInt(counter.innerText);

            let count = 0;

            const update = ()=>{

                count++;

                counter.innerText = count + "+";

                if(count < target){

                    requestAnimationFrame(update);

                }

            }

            update();

        });

        started = true;

    }

});


/*==========================================
        PROGRESS BAR
==========================================*/

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const totalHeight =

    document.documentElement.scrollHeight -

    document.documentElement.clientHeight;

    const progressHeight =

    (window.pageYOffset/totalHeight)*100;

    progress.style.width = progressHeight + "%";

});


/*==========================================
        BACK TO TOP BUTTON
==========================================*/

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.style.display = "flex";

    }

    else{

        topButton.style.display = "none";

    }

});

topButton.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/*==========================================
        HOVER EFFECT
==========================================*/

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


/*==========================================
        PARALLAX HERO IMAGE
==========================================*/

window.addEventListener("mousemove",(e)=>{

    const img = document.querySelector(".hero-right img");

    if(!img) return;

    const x = (window.innerWidth/2 - e.pageX)/45;

    const y = (window.innerHeight/2 - e.pageY)/45;

    img.style.transform =

    `translate(${x}px,${y}px)`;

});


/*==========================================
        LOADING ANIMATION
==========================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


console.log("Portfolio Loaded Successfully");
