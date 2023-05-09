//var toDoItem = prompt("What do you want to add?");
var buttons = document.querySelectorAll('.todoItemList #todo-button');
const addItem = document.querySelector('#todoContainer .todoItemList');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){

        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    });

});

//addItem.innerHTML += '<li> <span class="item">' , toDoItem , '</span> <span id="todo-button">REMOVE</span></li>'
const Where = document.querySelector(parent.Element'#todo-button')

console.log(Where)