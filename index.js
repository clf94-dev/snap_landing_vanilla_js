const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const shadowContainer = document.querySelector('.navbar-shadow')
    const navLinks = document.querySelector('.nav-links li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        shadowContainer.classList.toggle('navbar-shadow-active')

    })
}

navSlide();
