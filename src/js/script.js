let menuBar = document.querySelector('.menu-mobile i');
let listMenu = document.querySelector('.list-menu-mobile');
let btnMenu = document.querySelector('btn-menu');
let btnClose = document.querySelector('btn-close');

menuBar.addEventListener('click', (e)=> {
    listMenu.style.display = 'block';
    btnMenu.style.display = 'none';
    btnClose.style.display = 'block';
})