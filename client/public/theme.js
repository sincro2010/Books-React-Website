

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

const currentTheme = localStorage.getItem('theme');
if (currentTheme == 'dark') {
    page.classList.add('dark-theme');
  }

themeButton.onclick = function() {
   
    page.classList.toggle('dark-theme');


  let theme = 'light';
  if (page.classList.contains('dark-theme')) {
    theme = 'dark';
  } 
  localStorage.setItem('theme', theme);
};


