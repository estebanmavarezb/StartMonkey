//Object that contains the strings of the HTML
const dom = {
    homePath: window.location.pathname.split('/')[1].replace('.html', ''),
    active: 'active',
    bars: '.bars',
    navList: '.nav-list',
    menuClose: '.bars.close',
    navListActive: 'nav-list_active',
    monkey: '.mono',
    imgGrid(num) { return `.imagen-grilla-${num}` },
    donuts(num) { return `.dona-${num}`},
    banana: '.banana',
    cel: '.cel',
    lamp: '.lamp', //It's an img tag
    world: '.world',
    statistics: '.estadistica',
    lampIcon: '.lamp-icon', //It's a div tag
    pink: '.pink',
    blue: '.blue',
    yellow: '.puzzle-y',
    inputForm: '.input-form'
}

//Object that contains style properties from css
const styles = {
    none(elem){ return elem.style.display = 'none' },
    block(elem){ return elem.style.display = 'block' },
    toggle(elem, className){ return elem.classList.toggle(className) },
}

//Object that will contain the input values
let inputValues = {
    name: '',
    email: '',
    message: ''
}

//Function that returns a querySelector
const sE = elem => document.querySelector(elem);

//Function that returns a ScrollReveal object
const Scroll = (elem, time = 0) => ScrollReveal().reveal(elem, {delay: time});

window.onload = () => {

    const bars = sE(dom.bars);
    const navList = sE(dom.navList);
    const menuClose = sE(dom.menuClose);
    const inputForm = document.querySelectorAll(dom.inputForm);
    const homeLi = sE(`${dom.navList} #home`);

    (dom.homePath === 'index') ? styles.toggle(homeLi.children[0], dom.active) : null;

    //Event to open the menu
    bars.onclick = () => {
        styles.toggle(navList, dom.navListActive);
        styles.none(bars);
        styles.block(menuClose);
    }

    //Event to close the menu
    menuClose.onclick = () => {
        styles.toggle(navList, dom.navListActive);
        styles.none(menuClose);
        styles.block(bars);
    }

    Array.from(inputForm).forEach(input => {
        input.oninput = e => {
            inputValues = {
                ...inputValues,
                [e.target.name]:e.target.value
            }
        }
    })

    //ScrollReveal
    Scroll(dom.monkey);
    Scroll(dom.imgGrid(3));
    Scroll(dom.imgGrid(4));
    Scroll(dom.imgGrid(5));
    Scroll(dom.imgGrid(6));
    Scroll(dom.imgGrid(7));
    Scroll(dom.imgGrid(8));
    Scroll(dom.imgGrid(9));
    Scroll(dom.imgGrid(10));
    Scroll(dom.imgGrid(11));
    Scroll(dom.imgGrid(12));
    Scroll(dom.imgGrid(13));
    Scroll(dom.imgGrid(14));
    Scroll(dom.imgGrid(15));
    Scroll(dom.imgGrid(16));
    Scroll(dom.imgGrid(17));
    Scroll(dom.donuts(1));
    Scroll(dom.donuts(2));
    Scroll(dom.donuts(3));
    Scroll(dom.donuts(4));
    Scroll(dom.banana);
    Scroll(dom.cel);
    Scroll(dom.lamp);
    Scroll(dom.world);
    Scroll(dom.statistics);
    Scroll(dom.lampIcon);
    Scroll(dom.pink);
    Scroll(dom.blue);
    Scroll(dom.yellow);
}