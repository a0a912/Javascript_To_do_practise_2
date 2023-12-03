


//references

form = document.getElementById("create_new_task");
task_list = document.getElementById("task_list");
new_task_button = document.getElementById("new_task_button");
modal_box = document.getElementById("modal_box");
close_modal = document.getElementById("close_modal");
modal_background = document.getElementById("modal_background");
save_task = document.getElementById("save_task");

all_tasks = document.getElementById("all_tasks");
pending = document.getElementById("pending");
completed = document.getElementById("completed")

document.addEventListener("DOMContentLoaded", function() {


    new_task_button.addEventListener("click", function () {
        modal_box.style.display = "block";
        modal_background.style.display = "block";

        //modal_box.style.top = "0";
        //modal_box.style.width = "60vw"

    });

    close_modal.addEventListener("click", function (){

        modal_box.style.display = "none";
        modal_background.style.display = "none";

    });

    modal_background.addEventListener("click", function (){

        modal_box.style.display = "none";
        modal_background.style.display = "none";
    });




    form.addEventListener("submit", function (event){
        event.preventDefault();
        new_task_title = document.getElementById("new_task_title").value
        new_task_description = document.getElementById("new_task_description").value;
        new_task_due_date =  document.getElementById("new_task_due_date").value;
        task_list.innerHTML += `
           
                <li>
                <input type="checkbox">
                <label > ${new_task_title}</label>
            <p>${new_task_description}</p>
            <p>Due: ${new_task_due_date}</p>
            <p class="task_actions"><button class="edit_task">Edit</button><button class="delete_task">Delete</button></p>
    
        `
        modal_box.style.display = "none";
        modal_background.style.display = "none";



    });

    task_list.addEventListener("click", function(event) {
        const target = event.target;

        // Check if the clicked element is a "delete" button
        if (target.classList.contains("delete_task")) {
            // Get the parent li element (task) and remove it
            const taskItem = target.closest("li");
            if (taskItem) {
                taskItem.remove();
            }
        }
    });
    task_list.addEventListener("click", function(event) {
        const target = event.target;

        // Check if the clicked element is a "edit" button
        if (target.classList.contains("edit_task")) {
            // If it is, open up a model to edit its corresponding task

            modal_box.style.display = "block";
            modal_background.style.display = "block";

            save_task.addEventListener("click", function () {
                const taskItem = target.closest("li");
                if (taskItem) {
                    taskItem.remove();
                }


            })
        }
    });

    pending.addEventListener("click", function (){

        var list_items = task_list.getElementsByTagName("li");

        for (var i=0; i< list_items.length; i++) {
            var checkbox = list_items[i].querySelector("input[type='checkbox']");

            if (checkbox.checked){
                list_items[i].style.display = 'none'
            }
        }
    });

    all_tasks.addEventListener("click", function (){
        var list_items = task_list.getElementsByTagName("li");

        for (var i=0; i< list_items.length; i++) {
            list_items[i].style.display = "block";
        }

    });

    completed.addEventListener("click", function (){

        var list_items = task_list.getElementsByTagName("li");

        for (var i=0; i< list_items.length; i++) {
            var checkbox = list_items[i].querySelector("input[type='checkbox']");

            if (!checkbox.checked){
                list_items[i].style.display = 'none'
            }
        }
    });







});