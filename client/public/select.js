let select = document.querySelector('.select');
let selectOptions = select.children;
var lastSelected = localStorage.getItem('select');




var currentPage = document.querySelector('.current');
var paginator = document.querySelector('.paginator');
var pages = paginator.children;


if(lastSelected) {
    select.value = lastSelected; 
}

console.log(selectOptions);
console.log(pages);

var addPageValue = function (page) {
    var pageUrl = page.querySelector('a').getAttribute('href');
    var pageUrlParams = new URLSearchParams(pageUrl);
    var pageId = pageUrlParams.get('page');

    page.onclick = function () {
        
        select.selectedIndex = Number(pageId)+1;
       lastSelected = select.options[select.selectedIndex].value;
       localStorage.setItem('select', lastSelected);
       /*Старое решение*/
       /*select.selectedIndex = currentPage.textContent;
       lastSelected = select.options[select.selectedIndex].value;
       localStorage.setItem('select', lastSelected);*/
    };
}
for(var i=0; i<pages.length; i++) {
    addPageValue(pages[i]); 
   var pageL = pages[i];
    
}
/*Учимся доставать pageId из url*/
var pageUrl = pageL.querySelector('a').getAttribute('href');
var a = new URLSearchParams(pageUrl);
var pageId = a.get('page');
console.log(Number(pageId)+1);



select.onchange = function () {
    lastSelected = select.options[select.selectedIndex].value;
    window.location = this.value;
    localStorage.setItem('select', lastSelected);
    
}





