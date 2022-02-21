const  usl = document.querySelector('.btn-js');
const  we = document.querySelector('.btn-js-we');
const  work = document.querySelector('.btn-js-work');
const  cont = document.querySelector('.btn-js-cont');
const  spes = document.querySelector('.padro');
const  otziv = document.querySelector('.otziv')
const  serv = document.querySelector('.services');
const  about = document.querySelector('.about');
const  works = document.querySelector('.works');
const  contacts = document.querySelector('.contacts');
const  spec = document.querySelector('.spes');

usl.addEventListener('click', function(e) {
	const pos = serv.getBoundingClientRect().top;
		window.scrollBy({top:pos});
	});
spes.addEventListener('click', function(e) {
  const pos = spec.getBoundingClientRect().top;
    window.scrollBy({top:pos});
  });
we.addEventListener('click', function(e) {
	const pos = about.getBoundingClientRect().top;
		window.scrollBy({top:pos});
	});
work.addEventListener('click', function(e) {
	const pos = otziv.getBoundingClientRect().top;
		window.scrollBy({top:pos});
	});
cont.addEventListener('click', function(e) {
	const pos = contacts.getBoundingClientRect().top;
		window.scrollBy({top:pos});
	});

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const close = document.querySelector('.close');

burger.addEventListener('click', function(e) {
		navbar.style.display = "block";
	    close.style.display = "block";
	    burger.style.display = "none";
});
close.addEventListener('click', function(e) {
		navbar.style.display = "none";
		close.style.display = "none";
		burger.style.display = "flex";
});
(function () {
  //на4 то4ка
  let offset = 0;
  //размер картинки
  let imgset = 672;
  //коли4ество картинок
  let kolVo = 2;
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
