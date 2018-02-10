//SCROLL BACKGROUND IMAGE ONSCROLL
var text1 = document.getElementById('background-text-1');
var text2 = document.getElementById('background-text-2');
var text3 = document.getElementById('background-text-3');

var background1 = document.getElementById('background-1');
var background2 = document.getElementById('background-2');
var background3 = document.getElementById('background-3');


const scroll = () => {
  var background1Location = background1.getBoundingClientRect().top
  var background2Location = background2.getBoundingClientRect().top
  var background3Location = background3.getBoundingClientRect().top

  if (background1Location > (0 - 500) && background1Location < 1000) {
    background1.style.backgroundPositionY = -background1Location * .3 + 'px';
    text1.style.opacity = ('1' / (-background1Location * 0.1));
  }
  if (background2Location > (0 - 500) && background2Location < 1000) {
    background2.style.backgroundPositionY = -background2Location * .3 + 'px';
    text2.style.left = -background2Location * .3 + 'px';
  }
  if (background3Location > (0 - 500) && background3Location < 1000) {
    background3.style.backgroundPositionY = -background3Location * .3 + 'px';
  }

  console.log('Er wordt gescrolled ' + onscroll);
  console.log('Bg 3 locatie ' + background3Location);

}

window.addEventListener('scroll', scroll);
