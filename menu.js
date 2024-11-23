const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.style.transition = 'transform 0.5s ease';
    menu.style.transform = 'translateX(0)';
});

closeButton.addEventListener('click', () => {
    menu.style.transition = 'transform 0.5s ease';
    menu.style.transform = 'translateX(-100%)';
});
