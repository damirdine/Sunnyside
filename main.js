let burgerBtn = document.querySelector('.burger-menu');
let headerNav = document.querySelector('.nav');

burgerBtn.addEventListener('click',() => {
    headerNav.classList.toggle('active')
})