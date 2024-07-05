/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

const buttonFixed = document.getElementById('scroll-up')

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const lightModeImg = 'imgLight';
const darkModeImg = 'imgDark';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const divOds = document.querySelector('.odsImg');
const divOdsImg = document.querySelector('.odsImg img');
const srcDark = "assets/img/ods15-white.png"
const srcLight = "assets/img/ods15.png"
const formGetBook = document.getElementById("lead__button")
let inputName = document.getElementById('inputName');
let inputEmail = document.getElementById('inputEmail');
let inputTel = document.getElementById('inputTel');

formGetBook.addEventListener('click', e => {
    if (inputName.value == '' || inputEmail.value == '' || inputTel.value == '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        window.location.href = 'html/checkout.html';
    }
})

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

const getImgTheme = () => {
    if (getCurrentTheme() === 'dark') {
        divOdsImg.classList.add(darkModeImg)
        divOdsImg.classList.remove(lightModeImg)
        divOdsImg.src = srcDark
    } else {
        divOdsImg.classList.remove(darkModeImg)
        divOdsImg.classList.add(lightModeImg)
        divOdsImg.src = srcLight
    }
}

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
    getImgTheme();
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__data, #scroll-up', model-viewer`, { origin: 'left', delay: 500 })
sr.reveal(`.home__img`, { delay: 500 })
sr.reveal(`.home__social`, { delay: 600 })
sr.reveal(`.about__img, .contact__box`, { origin: 'left' })
sr.reveal(`.about__data, .contact__form`, { origin: 'right' })
sr.reveal(`.odsImg, .questions__title, .questions__objective, .steps__card, .product__card, .questions__group, .footer`, { interval: 100 })

document.body.addEventListener('onload', getImgTheme())