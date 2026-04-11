// Menu hamburger
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuToggle.classList.toggle("open");
});

// Fecha menu mobile ao clicar em um item
menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
        menuToggle.classList.remove("open");
    });
});

// Scroll animations
const animatedEls = document.querySelectorAll('.section-title, .service-item');
const serviceDetalhes = document.querySelectorAll('.service-detalhe');
const detalhe = document.getElementById('services-detalhe');
const ideas = document.querySelector('.ideas');

function onScroll() {
    const wh = window.innerHeight;
    const sy = window.scrollY;

    animatedEls.forEach(el => {
        if (el.getBoundingClientRect().top < wh - 100) el.classList.add('animate');
    });

    if (ideas && ideas.getBoundingClientRect().top < wh - 400) ideas.classList.add('animate');

    serviceDetalhes.forEach(el => el.style.transform = `rotate(${sy * 0.2}deg)`);

    if (detalhe) detalhe.style.transform = `translateY(-50%) rotate(${sy * 0.15}deg)`;
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
