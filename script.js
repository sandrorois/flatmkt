// Menu hambruger
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});



//Animação OnScroll da Section Services 


function animateOnScroll() {
    const elements = document.querySelectorAll('.section-title, .service-item');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            el.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


// Animação da seção IDEIAS
function animateIdeasSection() {
    const ideas = document.querySelector('.ideas');
    const windowHeight = window.innerHeight;

    if (ideas) {
        const position = ideas.getBoundingClientRect().top;

        if (position < windowHeight - 400) {
            ideas.classList.add('animate');
        }
    }
}

window.addEventListener('scroll', animateIdeasSection);
window.addEventListener('load', animateIdeasSection);
