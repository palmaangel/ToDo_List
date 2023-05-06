var toDoItem = prompt("What do you want to add?");
var buttons = document.querySelectorAll('#todoContainer #todo-button');
const addItem = document.querySelector('#todoContainer .todoItemList');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){

        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    });

});

addItem.innerHTML += '<li> <span class="item">' , toDoItem , '</span> <span id="todo-button">REMOVE</span></li>'
