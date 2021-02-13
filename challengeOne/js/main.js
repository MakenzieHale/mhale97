import Utilities from './utilities.js'



let utilityInstance = new Utilities("list"); // creates instance of utilities. Creates utility object
 utilityInstance.BuildToDoList(); // calls function for each instance a new utility is created.



 function newElement(){
     let element = document.getElementById('myInput');
     utilityInstance.addToDo(element.value);
     element.value = "";

    }
    document.getElementById('button').addEventListener('click',newElement); 

    document.getElementById("list").addEventListener("click",function(e) {
        if (e.target && e.target.matches("li")) {
            if(e.target.className == "checked"){
                e.target.className = "";//remove classname of checked
            } else{
          e.target.className = "checked"; //add class of checked to the li element.
            }
          }

      //use utility instance to update local storage.
      utilityInstance.updateItem(e.target.id,e.target.className == "checked");//updating the item to be checked in local storage
      


      });


    

