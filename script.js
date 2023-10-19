let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    // let header = document.querySelector('header')

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}