var headertitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var items=document.getElementsByClassName('list-group-items');
console.log(items);
console.log(items[1]);
items[1].textcontent='hello';
items[1].style.fontweight='bold';
items[1].style.backgroundcolor='yellow';