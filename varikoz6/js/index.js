let header = document.querySelector('.header');
let nav = document.querySelectorAll('.nav_a');
let navAdres = document.querySelectorAll('.addres_p');
let navBtn = document.getElementById('nav_btn');
let navBtn2 = document.getElementById('nav_btn2');
let logo = document.querySelector('.grid_item_logo');
headerH = document.querySelector('.header').clientHeight;
document.onscroll = function (){
  let scroll = window.scrollY;
  if(scroll > headerH){
    nav.forEach(item => {
      item.classList.add('nav_fixed');
    });
    navAdres.forEach(item => {
      item.classList.add('addres_p_fixed');
    });
    header.classList.add('header_fixed');
    navBtn.classList.add('btn2');
    navBtn2.classList.add('btn2');
    logo.classList.add('logo_fixed');
  }
  else{
    header.classList.remove('header_fixed');
    nav.forEach(item => {
      item.classList.remove('nav_fixed');
    });
    navAdres.forEach(item => {
      item.classList.remove('addres_p_fixed');
    });
    navBtn.classList.remove('btn2');
    navBtn2.classList.remove('btn2');
    logo.classList.remove('logo_fixed');
    document.body.removeAttribute('style');

  }
}

function init() {
let map = new ymaps.Map('map', {
  center: [55.78808088814055,49.14802751921999],
  zoom:19
});
}
ymaps.ready(init);
function beforeAfter() {
  document.getElementById('kobavenusab').style.width = document.getElementById('pedsumid').value + "%";
}
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("btn_burger").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open")
  })
})
function scrollTo(element){
  let headerH = document.querySelector('.header').clientHeight;
  let headerMobH = document.querySelector('.mobile_nav').clientHeight;
  let heightWitH = element.offsetTop - headerH - headerMobH;
  window.scroll({
    left: 0,
    top: heightWitH,
    behavior: 'smooth'
  })
}
let buttonAbout = document.querySelector('#desk_about_btn');
let buttonDoctors = document.querySelector('#doctor_btn');
let buttonSale = document.querySelector('#sale_btn');
let buttonPrice = document.querySelector('#service_btn');
let buttonResult = document.querySelector('#result_btn')
let buttonFind = document.querySelector('#find_btn');
let mobileButtonAbout = document.querySelector('#mob_about_id');
let mobileButtonDoctors = document.querySelector('#mob_doctors_id');
let mobileButtonSale = document.querySelector('#mob_sales_id');
let mobileButtonServices = document.querySelector('#mob_services_id');
let mobileButtonResult = document.querySelector('#mob_results_id');
let mobileButtonFind = document.querySelector('#mob_find_id');
let aboutSect = document.querySelector('.about_sect');
buttonAbout.addEventListener('click', () =>{
  scrollTo(about_sect);
})
buttonDoctors.addEventListener('click', () =>{
  scrollTo(doct_sect_id);
})
buttonSale.addEventListener('click', () =>{
  scrollTo(sale_sect_id);
})
buttonPrice.addEventListener('click', () =>{
  scrollTo(price_sect_id);
})
buttonResult.addEventListener('click', () =>{
  scrollTo(result_sect_id);
})
buttonFind.addEventListener('click', () =>{
  scrollTo(map_sect_id);
})
mobileButtonAbout.addEventListener('click', () =>{
  scrollTo(about_sect);
})
mobileButtonDoctors.addEventListener('click', () =>{
  scrollTo(doct_sect_id);
})
mobileButtonSale.addEventListener('click', () =>{
  scrollTo(sale_sect_id);
})
mobileButtonServices.addEventListener('click', () =>{
  scrollTo(price_sect_id);
})
mobileButtonResult.addEventListener('click', () =>{
  scrollTo(result_sect_id);
})
mobileButtonFind.addEventListener('click', () =>{
  scrollTo(map_sect_id);
})
new Swiper('.text-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination:{
    el: '.swiper-pagination',
    clickable:true,
  },
  loop: true,
});
let popupLinkProm = document.querySelectorAll('.prom_btn');
let body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;
const timeout = 800;
if(popupLinkProm.length > 0){
  for(let index = 0; index < popupLinkProm.length; index++){
    const popupLink = popupLinkProm[index];
    popupLink.addEventListener("click", function (e){
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0){
  for(let index = 0; index < popupCloseIcon.length; index++){
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e){
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}
function popupOpen(currentPopup){
  if(currentPopup && unlock){
    const popupActive = document.querySelector('.popup.open');
    if(popupActive) {
      popupClose(popupActive, false);
    } else{
      bodyLock();
    }
    
    currentPopup.classList.add('open');
    currentPopup.addEventListener("click", function (e){
      if(!e.target.closest('.popup_content')){
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}
function popupClose(popupActive, doUnlock = true) {
  if(unlock){
    popupActive.classList.remove('open');
    if(doUnlock){
      bodyUnLock();
    }
  }
}
function bodyLock(){
  const lockPaddingValue = window.innerWidth - document.querySelector('.main').offsetWidth + 'px';
  if(lockPadding.length > 0){
    for(let index = 0; index < lockPadding.length; index++){
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
  unlock = false;
  setTimeout(function (){
    unlock = true;
  }, timeout);
}
function bodyUnLock(){
  setTimeout(function (){
    for(let index = 0; index < lockPadding.length; index++){
      const el = lockPadding[index];
      el.style.paddingRight = '0px';
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
  unlock = false;
  setTimeout(function (){
    unlock = true;
  }, timeout);
}
document.addEventListener('keydown', function (e){
  if(e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});
(function(){
  if(!Element.prototype.closest){
    Element.prototype.closest = function (css){
      var node = this;
      while(node){
        if(node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function (){
  if(!Element.prototype.matches){
    Element.prototype.matches = Element.prototype.matchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector;
  }
})();
