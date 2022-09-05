

let sizeSetting = document.querySelector('.size-setting');
var pixels = document.querySelector('.pixels');
var chapterContent = document.querySelector('.chapter-content');



//Get text size settings from localstorage
var lastSize = localStorage.getItem('size');
//Reveal text size settings from localstorage
if(lastSize) {
  chapterContent.style.fontSize = lastSize + 'px'; 
  pixels.textContent = lastSize;
  sizeSetting.value = lastSize;
}

sizeSetting.oninput = function () {
    pixels.textContent = sizeSetting.value;
   chapterContent.style.fontSize = sizeSetting.value + 'px';

//Save selected size setiings to localstorage
    lastSize = sizeSetting.value;
    localStorage.setItem('size', lastSize);
  };