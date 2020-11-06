//Object that contains the strings of the HTML
const dom = {
    bars: '.bars',
    navList: '.nav-list'
}

//Function that returns a querySelector
const sE = elem => document.querySelector(elem);

window.onload = () => {

    //Event to open the menu
    sE(dom.bars).addEventListener('click', () => {
        sE(dom.navList).classList.toggle('nav-list_active')
    })

}