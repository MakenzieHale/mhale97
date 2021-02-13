let todoItems = [];

//render todo
function showTodos(todo) {
    localStorage.setItem('todoItemsRef',JSON.stringify(todoItems));

    const list = document.querySelector('.js-todo-list');

    const item = document.querySelector(`[data-key = '${todo.id}']`);

    if (todo.deleted){
        item.remove();
        
        if(todoItems.length === 0)list.innerHTML = '';
        return
    }

    const isChecked = todo.checked ? 'done': '';

    const node = document.createElement("li");
     node.setAttribute('class', `todo-item ${isChecked}`);

     node.setAttribute('data-key', todo.id);

     node.innerHTML = `
     <input id="${todo.id}" type="checkbox"/>
     <label for="${todo.id}" class="tick js-tick"></label>
     <span>${todo.text}</span>
     <button class="delete-todo js-delete-todo">
     <svg><use href="#delete-icon"></use></svg>
     </button>
   `;
 

     if (item) {
         list.replaceChild(node,item);

     } else {
         list.append(node);
     }
   

}

function addTodo(text){
    const todo = {
    text,
    checked: false,
    id: Date.now(),

};

todoItems.push(todo);
showTodos(todo);
}

//function receives the key of the list item that was checked/unchecked and finds corresponding entry in the todoIems array  using findIndex method showTodos() is called with the todo object passed in
function toggleDone(key){
    const index = todoItems.findIndex(item => item.id === Number(key));

    todoItems[index].checked = !todoItems[index].checked;
    showTodos(todoItems[index]);
}

function deleteTodo(key){
    const index = todoItems.findIndex( item => item.id === Number(key));

    const todo = {
        deleted: true,
        ...todoItems[index]
    };

    todoItems = todoItems.filter(item => item.id !== Number(key));
    showTodos(todo);
}


const form = document.querySelector('.js-form');

//event listener
form.addEventListener('submit' , event => {
    event.preventDefault();//stops page refresh 

    const input = document.querySelector('.myInput')

    //read text value

    const text = input.value.trim();//removes white space 
    if (text !== ''){
        addTodo(text);
        input.value='';
        input.focus();
    }
});


//This function takes a todo object as its only parameter.  Constucts an li Dom node with document.createElement.
//mark task as completed.

const list = document.querySelector('.js-todo-list');

list.addEventListener('click', event =>{
    if (event.target.classList.contains('js-tick')){
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }

    if (event.target.classList.contains('js-delete-todo')){
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }

});

//local storage
//DOMContentLoaded fired, retrieve value of todoItemsRef from LS.  If it exist, JSON.parse used to convert the JSON string back to original array form and save in todoItems.
//any saved todo item is rendered as soon as the page loads
document.addEventListener('DOMContentLoaded', () =>{
    const ref = localStorage.getItem('todoItemsRef');
    if(ref){
        todoItems = JSON.parse(ref);
        todoItems.forEach(t => {
            showTodos(t);
        });
    }
});