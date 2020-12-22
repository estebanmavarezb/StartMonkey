//Object that contains the strings of the HTML
const dom = {
    mazeballPath: window.location.pathname,
    active: 'active',
    bars: '.bars',
    navList: '.nav-list',
    menuClose: '.bars.close',
    navListActive: 'nav-list_active',
    appstore: '.appstore',
    playstore: '.playstore',
    mzImg: '.mz-image',
    video: '.video',
    phones(num) {return `.phone-${num}`}
}
//Object that contains style properties from css
const styles = {
    none(elem){ return elem.style.display = 'none' },
    block(elem){ return elem.style.display = 'block' },
    toggle(elem, className){ return elem.classList.toggle(className) },
}


//Function that returns a querySelector
const sE = elem => document.querySelector(elem);

//Function that returns a ScrollReveal object
const Scroll = (elem, time = 0) => ScrollReveal().reveal(elem, {delay: time});

//Active the class if the conditional is true
const gamesLi = sE(`${dom.navList} #games`);

(dom.mazeballPath.includes('mazeball')) ? styles.toggle(gamesLi.children[0], dom.active) : null;

window.onload = () => {

    const bars = sE(dom.bars);
    const navList = sE(dom.navList);
    const menuClose = sE(dom.menuClose);


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
    
}
//ScrollReveal
Scroll(dom.appstore, 200);
Scroll(dom.playstore, 200);
Scroll(dom.mzImg, 400);
Scroll(dom.video, 300);
Scroll(dom.phones(1), 200);
Scroll(dom.phones(2), 350);
Scroll(dom.phones(3), 450);
Scroll(dom.phones(4), 20);
