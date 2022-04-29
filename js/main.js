import {
    SpanWrap
} from './modules/SpanWrap.js';



const TextWave = document.querySelectorAll('.a-TextWave');
const skill_openBtn = document.querySelector('.skill_openButton');
const skill_slideAnimation = document.querySelector('.skill_slide');
const ContactBtn = document.querySelector('.ContactBtn');
const ContactMenu = document.querySelector('.ContactMenu');
const hamburgerBtn = document.querySelector('.hamburgerBtn');
const headerMenu = document.querySelector('.headerMenu');

const vantaDark = function () {
    document.querySelector('#bg-animation-light').style.display = 'none';
    document.querySelector('#bg-animation-dark').style.display = 'block';
};

const vantaLight = function () {
    document.querySelector('#bg-animation-dark').style.display = 'none';
    document.querySelector('#bg-animation-light').style.display = 'block';
};



window.addEventListener('DOMContentLoaded', Wave());

async function Wave() {

    await new Promise(function (resolve, reject) {

        TextWave.forEach(function (value) {
            new SpanWrap(value);
        });
        resolve();
    });

    await new Promise(function (resolve) {
        const TextWaveHome = TextWave[0].children;
        setTimeout(() => {
            for (let i = 0; i < 4; i++) {
                TextWaveHome[i].classList.add('js-show');
            };
            resolve();
        }, 500);
    });

    await new Promise(function (resolve) {
        const TextWaveAbout = TextWave[1].children;
        setTimeout(() => {
            for (let j = 0; j < 7; j++) {
                TextWaveAbout[j].classList.add('js-show');
            };
            resolve();
        }, 750);
    });

    await new Promise(function (resolve) {
        const TextWaveContact = TextWave[2].children;
        setTimeout(() => {
            for (let k = 0; k < 10; k++) {
                TextWaveContact[k].classList.add('js-show');
            };
            resolve();
        }, 750);
    });
    await new Promise(function (resolve) {
        const TitleTextFade1 = TextWave[3].children;
        setTimeout(() => {

            resolve();
        }, 750);
    });
    await new Promise(function (resolve) {
        const TitleTextFade2 = TextWave[4].children;
        setTimeout(() => {

            resolve();
        }, 750);
    });
};



skill_openBtn.addEventListener('click', () => {
    skill_slideAnimation.classList.toggle('js-skill_slide');
    skill_openBtn.classList.toggle('js-skill_openButton');
});



ContactBtn.addEventListener('mouseover', () => {
    ContactMenu.classList.add('js-ContactMenu');
});

ContactBtn.addEventListener('mouseleave', () => {
    ContactMenu.classList.remove('js-ContactMenu');
});



document.querySelector('body').insertAdjacentHTML('afterbegin', '<div id="bg-animation-light"></div><div id="bg-animation-dark"></div>');

if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
    vantaDark();
} else {
    vantaLight();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        vantaDark();

    } else {
        vantaLight();
    }
});



hamburgerBtn.addEventListener('click', () => {
    headerMenu.classList.toggle('js-headerMenu');
    hamburgerBtn.classList.toggle('js-hamburgerBtn');
});