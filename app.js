var toDoListItem = document.querySelectorAll('#todoContainer li .item')
var toDoItem = prompt("What do you want to add?")


const addItem = document.querySelector('#todoitemlist');
addItem.innerHTML += '<li class="item">' + toDoItem + '<button class="todo-button" type="submit"><i> REMOVE</i></button></li>'