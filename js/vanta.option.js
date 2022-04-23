document.querySelector('body').insertAdjacentHTML('afterbegin', '<div id="bg-animation-light"></div><div id="bg-animation-dark"></div>');

VANTA.DOTS({
  el: "#bg-animation-light",
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 100.00,
  minWidth: 100.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0,
  color2: 0xffffff,
  backgroundColor: 0xfafafa,
  size: 2.50,
  spacing: 50.00
});

VANTA.DOTS({
  el: "#bg-animation-dark",
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 100.00,
  minWidth: 100.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffffff,
  color2: 0x191919,
  backgroundColor: 0x191919,
  size: 2.50,
  spacing: 50.00
});

const vantaDark = function () {
  document.querySelector('#bg-animation-light').style.display = 'none';
  document.querySelector('#bg-animation-dark').style.display = 'block';
};

const vantaLight = function () {
  document.querySelector('#bg-animation-dark').style.display = 'none';
  document.querySelector('#bg-animation-light').style.display = 'block';
};

if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
  vantaDark();
  darkModeChanger();
} else {
  vantaLight();
  lightModeChanger();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    vantaDark();
    darkModeChanger();
  } else {
    vantaLight();
    lightModeChanger();
  }
});

/*
let isDarkmode = false;
const dummyDOM = document.querySelector('#dummy');

let observer = new IntersectionObserver(() => {
  isDarkmode = (getComputedStyle(dummyDOM).display === 'block');
  if (isDarkmode == false) {
    //VANTA.DOTS(waveWhite);
    document.querySelector('#bg-animation-dark').style.display = 'none';
    document.querySelector('#bg-animation-light').style.display = 'block';

  } else if (isDarkmode == true) {
    //VANTA.DOTS(waveBlack);
    //document.querySelector('#bg-animation').setAttribute('id','num2');
    document.querySelector('#bg-animation-light').style.display = 'none';
    document.querySelector('#bg-animation-dark').style.display = 'block';

  }
});
observer.observe(dummyDOM);
*/