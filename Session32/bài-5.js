let inputTask = document.getElementById('inputTask');
let addBtn = document.getElementById('add');
let list = document.getElementById('myUL');

addBtn.onclick = function() {
    let taskContent = inputTask.value;
    if (taskContent === "") {
        alert("Nhiệm vụ không được để trống!");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = `${taskContent} <button class="del">X</button>`;
    list.appendChild(li);
    inputTask.value = ""; 
    deleteTask();
};

function deleteTask() {
    let deleteBtns = document.querySelectorAll('.del');
    deleteBtns.forEach(button => {
        button.onclick = function () {
            let confirmDelete = confirm("Bạn có chắc muốn xóa nhiệm vụ này không?");
            if (confirmDelete) {
                button.parentElement.remove();
            }
        };
    });
}
deleteTask();
