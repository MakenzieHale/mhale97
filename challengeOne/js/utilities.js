import {readFromLS, writeToLS} from  './ls.js'
const taskListKey = "taskList"; 


    BuildToDoList() { //adding input to the todo list

        //creating the list
        document.getElementById(this.mElementId).innerText = "";

        for (let key in this.mTaskList) {
            const taskItem = document.createElement('li');
            taskItem.id = key;
            const taskText = document.createTextNode(this.mTaskList[key].Text); // using "Text" to look up the value of the task
            if (this.mTaskList[key].Completed == true) {
                taskItem.className = "checked";
            }
            taskItem.appendChild(taskText);

            document.getElementById(this.mElementId).appendChild(taskItem); //mElementId is only a member variable-not accessed globally
        
        }
    }
    addToDo(aText) { // communicating text within input field to be built.
        let newId = "todo" + Object.keys(this.mTaskList).length;
        this.mTaskList[newId] = {
            Text: aText,
            checked: false,
            id: Date.now(), 
            

        };
     //mTaskList allowing to look up the items from the task list by their ID. Storing the text and determining if completed or not
        //update local storage with taskList
        writeToLS(taskListKey,this.mTaskList);
        return this.BuildToDoList();


    }
    updateItem(aID,aCompleted) { //using ID to find li item and update its completed status
        this.mTaskList[aID].Completed = aCompleted;//looks up property and updates with new value of whether it was completed or not 
         //update local storage with taskList
        writeToLS(taskListKey,this.mTaskList);
         return this.BuildToDoList();

    }

    //includer writetoLs with delete button
}