import { SpanWrap } from './class/SpanWrap.js';

window.addEventListener('DOMContentLoaded', Wave());

async function Wave() {

    await new Promise(function (resolve, reject) {
        const TextWave = document.querySelectorAll('.a-TextWave');
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
            for (let j = 0; j < 8; j++) {
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

document.querySelector('.skill_openButton').addEventListener('click', () => {
    document.querySelector('.skill_slide').classList.toggle('js-skill_slide');
    document.querySelector('.skill_openButton').classList.toggle('js-skill_openButton');
});

const ContactBtn = document.querySelector('.ContactBtn');
const ContactMenu = document.querySelector('.ContactMenu');

ContactBtn.addEventListener('mouseover', () => {
    ContactMenu.classList.add('js-ContactMenu');
});

ContactBtn.addEventListener('mouseleave', () => {
    ContactMenu.classList.remove('js-ContactMenu');
});