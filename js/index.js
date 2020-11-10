//Object that contains the strings of the HTML
const dom = {
    bars: '.bars',
    navList: '.nav-list',
    menuClose: '.bars.close',
    navListActive: 'nav-list_active',
    monkey: '.mono',
    imgGrid(num) { return `.imagen-grilla-${num}` },
    banana: '.banana',
    cel: '.cel',
    lamp: '.lamp', //It's an img tag
    world: '.world',
    statistics: '.estadistica',
    lampIcon: '.lamp-icon', //It's a div tag
    pink: '.pink',
    blue: '.blue',
    yellow: '.puzzle-y'
}

//Function that returns a querySelector
const sE = elem => document.querySelector(elem);

//Function that returns a ScrollReveal object
const scroll = elem => ScrollReveal().reveal(elem);

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

        //ScrollReveal
        scroll(dom.monkey);
        scroll(dom.imgGrid(3));
        scroll(dom.imgGrid(4), {delay: 50});
        scroll(dom.imgGrid(5), {delay: 100});
        scroll(dom.imgGrid(6), {delay: 150});
        scroll(dom.imgGrid(7), {delay: 200});
        scroll(dom.imgGrid(8), {delay: 250});
        scroll(dom.imgGrid(9), {delay: 300});
        scroll(dom.imgGrid(10), {delay: 350});
        scroll(dom.imgGrid(11), {delay: 400});
        scroll(dom.imgGrid(12), {delay: 410});
        scroll(dom.imgGrid(13), {delay: 420});
        scroll(dom.imgGrid(14), {delay: 430});
        scroll(dom.imgGrid(15), {delay: 440});
        scroll(dom.imgGrid(16), {delay: 450});
        scroll(dom.imgGrid(17), {delay: 460});
        scroll(dom.banana, {delay: 400});
        scroll(dom.cel, {delay: 400});
        scroll(dom.lamp, {delay: 400});
        scroll(dom.world, {delay: 400});
        scroll(dom.statistics, {delay: 400});
        scroll(dom.lampIcon, {delay: 400});
        scroll(dom.pink, {delay: 400});
        scroll(dom.blue, {delay: 400});
        scroll(dom.yellow, {delay: 400});

}