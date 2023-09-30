let inputFaild = document.getElementById("inputFaild");
let addToDo = document.getElementById("addToDo");
let ToDoContainer = document.getElementById("ToDoContainer");
addToDo.addEventListener("click" , addItem);
inputFaild.addEventListener("keypress", function(e){
    if(e.key=="Enter"){
        addItem()
    }
})
function addItem(e){
    const item_value =inputFaild.value 

    const item = document.createElement("div");
    item.classList.add("item");

    const item_content =document.createElement("div");
    item_content.classList.add("content");
    item.appendChild(item_content);

    const input_item = document.createElement("input");
    input_item.classList.add("text");
    input_item.type = "text";
    input_item.value = item_value;
    input_item.setAttribute("readonly", "readonly");
    input_item.addEventListener("dblclick", function(){
        input_item.style.textDecoration = "line-through";
    })
    item_content.appendChild(input_item);

    const item_actoin= document.createElement("div");
    item_actoin.classList.add("action");

    const edit_item = document.createElement("button");
    edit_item.classList.add("edit", "btn" , "btn-success");
    edit_item.type = "button";
    edit_item.innerText = "Edit";

    const delete_item = document.createElement("button");
    delete_item.classList.add("delete", "btn", "btn-danger", "fa", "fa-trash");
    delete_item.type = "button";

    item_actoin.appendChild(edit_item);
    item_actoin.appendChild(delete_item);

    item.appendChild(item_actoin);

    ToDoContainer.appendChild(item);

    inputFaild.value= " ";
    
    edit_item.addEventListener("click", (e) =>{
        if (edit_item.innerText.toLowerCase() == "edit"){
            edit_item.innerText = "save";
            input_item.removeAttribute("readonly");
            input_item.focus();
        }else{
            edit_item.innerText = "Edit";
                input_item.setAttribute("readonly", "readonly");
        }
    });
    delete_item.addEventListener("click", (e)=> {
        ToDoContainer.removeChild(item);
    });

}


