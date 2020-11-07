//Object that contains the strings of the HTML
const dom = {
    bars: '.bars',
    navList: '.nav-list',
    menuClose: '.bars.close',
    navListActive: 'nav-list_active'
}

//Function that returns a querySelector
const sE = elem => document.querySelector(elem);

window.onload = () => {

    const bars = sE(dom.bars);
    const navList = sE(dom.navList);
    const menuClose = sE(dom.menuClose);

    //Event to open the menu
    bars.onclick = () => {
        navList.classList.toggle(dom.navListActive);
        bars.style.display = 'none';
        menuClose.style.display ='block';
    }

    //Event to close the menu
    menuClose.onclick = () => {
        navList.classList.toggle(dom.navListActive);
        menuClose.style.display = 'none';
        bars.style.display ='block';
    }

}