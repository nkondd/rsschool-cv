/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Add the show-menu class to the div tag with the nav-menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MOBILE MENU =====*/

const navLink = document.querySelectorAll('.header-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // Each header-link removes the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SHOW SCROLL TOP =====*/

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

/*===== DARK/LIGHT THEME =====*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('secelted-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*===== REDUCE THE SIZE AND PRINT ON AN A4 SHEET =====*/

function scaleCv() {
    document.body.classList.add('scale-cv')
}

/*===== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED =====*/

function removeScale() {
    document.body.classList.remove('scale-cv')
}

/*===== GENERATE PDF =====*/

// PDF generated area

let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

// Html2pdf oprions


// Function to call areaCv and Html2Pdf options

function generateResume() {
    const areaCv = document.getElementById('area-cv');
    html2pdf()
    .set({ html2canvas: { scale: 4 } })
    .from(areaCv)
    .save();
}

// When the button is clicked, it executes the three functions 

resumeButton.addEventListener('click', () => {
    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements

    scaleCv()

    // 2. The PDF is generated

    generateResume()

    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.

    setTimeout(removeScale, 5000)
})