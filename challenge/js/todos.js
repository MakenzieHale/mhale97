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

