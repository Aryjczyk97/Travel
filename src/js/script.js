const btnBurger = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')
const allNavlink = document.querySelectorAll('.nav__link')

const showMenu = () => {
    nav.classList.toggle('nav--active')

    allNavlink.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    
}
btnBurger.addEventListener('click', showMenu)