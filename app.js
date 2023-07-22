/* header.style.borderBottom='solid 3px #000';
var items=document.getElementsByClassName('list-group-items');
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textcontent='hello 2';
li[1].style.fontweight='bold';
li[1].style.backgroundcolor='yellow';

for(var i=0; i<items.length; i++){
    li[1].style.backgroundcolor='green';
}*/

var header=document.querySelector('#main-header');
header.Style.borderbottom='solid 4x green'

var input=document.querySelector('input');
input.value='hello world';

var submit=document.querySelector('input[type]=submmit');
submit.value="SEND";

var item=document.querySelector('.list-group-item');
item.Style.color='green';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondtItem.style.color='coral';