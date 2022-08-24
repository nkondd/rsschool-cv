/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

// Validate that variables exist
if(toggle && nav){
    toggle.addEventListener('click', ()=>{
        // Add the show-menu class to the div tag with the nav-menu class
        nav.classList.toggle('show-menu')
    })
}
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MOBILE MENU =====*/

const navLink = document.querySelectorAll('.header-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Each header-link removes the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    
        }
    })
}
window.addEventListener('scroll', scrollActive)
