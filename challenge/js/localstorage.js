document.addEventListener('DOMContentLoaded', () =>{
    const ref = localStorage.getItem('todoItemsRef');
    if(ref){
        todoItems = JSON.parse(ref);
        todoItems.forEach(t => {
            showTodos(t);
        });
    }
});