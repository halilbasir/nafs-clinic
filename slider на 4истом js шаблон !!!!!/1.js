(function () {
  //на4 то4ка
  let offset = 0;
  //размер картинки
  let imgset = 800;
  //коли4ество картинок
  let kolVo = 5;
  let sum = imgset * kolVo - 1;
const slider = document.querySelector('.slider-line');
const radius = document.querySelectorAll('.radius');
const sliderImg = document.querySelectorAll('.img-s');
const prev = document.querySelector('.prev');
const nek = document.querySelector('.nek');

for (var i = 0; i < radius.length; i++) {
const radId = radius[i].id;
  radius[i].addEventListener("click", function(e){
    if (radId == 1) {
      offset = 0;
      slider.style.left = -offset + 'px';
    }
    if (radId == 2) {
      offset = imgset;
      slider.style.left = -offset + 'px';
    }
    if (radId == 3) {
      offset = imgset*2;
      slider.style.left = -offset + 'px';
    }
    if (radId == 4) {
      offset = imgset*3;
      slider.style.left = -offset + 'px';
    }
    if (radId == 5) {
      offset = imgset*4;
      slider.style.left = -offset + 'px';
    }

});
};
function right() {
   offset = offset + imgset;
  slider.style.left = -offset + 'px';
  if (offset > sum ) {
    offset = 0;
    slider.style.left = -offset + 'px';
  }
}
function left() {
  offset = offset - imgset;
  slider.style.left = -offset + 'px';
  if (offset < 0) {
    offset = 2400;
    slider.style.left = -offset + 'px';
  }
}
nek.addEventListener('click', function(e) {
right();
});
prev.addEventListener('click', function(e) {
left();
});
var noswap = [slider,nek,prev];
var idstop ;
document.querySelector('.slider').addEventListener('mouseleave', function(e) {
  idstop =setInterval(() => right(), 3000);
});
document.querySelector('.slider').addEventListener('mouseenter', function() {
  clearInterval(idstop);
});


})();