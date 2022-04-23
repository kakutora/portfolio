class SpanWrap {
    constructor(target) {

        this.target = this.convertElement(target);
        this.nodes = [...this.target.childNodes];

        this.convert();
    }

    convert() {

        let spanWrapText = ""

        this.nodes.forEach((node) => {
            if (node.nodeType == 3) { //テキストの場合
                const text = node.textContent.replace(/\r?\n/g, ''); //テキストから改行コード削除
                //spanで囲んで連結
                spanWrapText = spanWrapText + text.split('').reduce((acc, v) => {
                    return acc + `<span>${v}</span>`
                }, "");
            } else { //テキスト以外
                //<br>などテキスト以外の要素をそのまま連結
                spanWrapText = spanWrapText + node.outerHTML
            }
        })

        this.target.innerHTML = spanWrapText

    }

    //jQueryオブジェクトや文字列セレクターを変換
    convertElement(element) {
        if (element instanceof HTMLElement) {
            return element
        }
        return document.querySelector(element);
    }
}

const TextWave = document.querySelectorAll('.a-TextWave');

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

ContactBtn.addEventListener('mouseover', () => {
    document.querySelector('.ContactMenu').classList.add('js-ContactMenu');
});

ContactBtn.addEventListener('mouseleave', () => {
    document.querySelector('.ContactMenu').classList.remove('js-ContactMenu');
});