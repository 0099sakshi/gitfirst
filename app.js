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

/* var header=document.querySelector('#main-header');
header.Style.borderbottom='solid 4x green'

var input=document.querySelector('input');
input.value='hello world';

var submit=document.querySelector('input[type]=submmit');
submit.value="SEND";

var item=document.querySelector('.list-group-item');
item.Style.color='green';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondtItem.style.color='coral'; */

//parentelements
console.log(itemlist.parentelement);
itemlist.parentelement.style.backgroundcolor='#f4f4f4';
console.log(itemlist.parentelement.parentelement.parentelement);

//childnodes
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundcolor='yellow';

//firstchild
console.log(itemlist.firstchild);
//firstElementchild
console.log(itemlist.firstElementchild);
itemlist.firstElementchild.textcontent='hello 1';

//lastchild
console.log(itemlist.lastchild);
//lastElementchild
console.log(itemlist.lastElementchild);
itemlist.lastElementchild.textcontent='hello 4';

//nextsibling
console.log(itemlist.nextsibling);
//nextElementsibling
console.log(itemlist.nextElementsibling);

//previousSibling
console.log(itemlist.previousSibling);
//previousElementSibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.backgroundcolor='green';

//createElement

//create a div
var newDiv=document.createElement('div');

//Add class
newDiv.classsName='hello 1';

//Add atr
newDiv.setAttribute('title,helloDiv');

//Create text node
var newDivText=document.createTextNode('hello world');

//Add text to div
newDiv.appendChild(newDivText);
 var container=document.querySelector('header.container');
 var h1=document.querySelector('header.h1');

 console.log(newDiv);

 newDiv.style.fontsize='30px';
 container.insertBefore(newDiv,h1);