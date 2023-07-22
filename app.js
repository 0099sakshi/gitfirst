var li=document.getElementsByTagName('li');
/* header.style.borderBottom='solid 3px #000';
var items=document.getElementsByClassName('list-group-items');*/
console.log(li);
console.log(li[1]);
li[1].textcontent='hello 2';
li[1].style.fontweight='bold';
li[1].style.backgroundcolor='yellow';

for(var i=0; i<items.length; i++){
    li[1].style.backgroundcolor='green';
}