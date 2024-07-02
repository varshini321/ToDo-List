function addTodo(){
    //get input Value
       var todoInput=document.getElementById("todo-input");
       //remove WhiteSpace
       var todoText=todoInput.value.trim();
//create list item
       if(todoText!==""){
         var li=document.createElement("li");
         //setbtextcontent to input value
         li.textContent=todoText;
//craete a delete button
         var deleteButton=document.createElement("button");
         deleteButton.textContent="Delete";
         deleteButton.classList.add("delete-btn");

         deleteButton.onclick=function(){
            li.remove();
         };

         li.appendChild(deleteButton);
         document.getElementById("todo-list").appendChild(li);

         todoInput.value="";
       }

       
}