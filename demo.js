var form = document.getElementById('addform');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit events
form.addEventListener('submit',addItem);

//dlt event
itemlist.addEventListener('click',removeItem);
//filter event
itemlist.addEventListener('keyup',filterItems);
//Add items
function addItem(e){
e.preventdefault();

//get input value
var newItem = document.getElementById('item').value;

//create new li elements
var li=document.getElementById('li');

//Add class
li.className='list-group-item';
console.log('li');
//add text node with input value
li.appendChild(document.createTextNode(newItem));
//create delete button
var deleteBtn = document.createElement('button');

//add classes to dlt btn
deleteBtn.className = 'btn btn-danger btn-sm float-right-delete';
//append text node
deleteBtn.appendChild(document.createTextNode('x'));
//append btn to li
li.appendChild(deleteBtn);
//append li to list
itemlist.appendChild(li);
}
//remove items
function removeItem(e){
    if(e.target.clsslist.contains('delete')){
if(confirm('Are you sure?')){
var li = e.target.parentElement;
itemlist.removeChild(li);

}
    }
}
//filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);
    itemlist.getElementsByTagName('li');
    console.log('items');
}