let inputTask = document.getElementById('inputTask');
let addBtn = document.getElementById('add');
let list = document.getElementById('myUL');
let works = JSON.parse(localStorage.getItem('todoList')) || [];
displayWorks();

function displayWorks() {
    list.innerHTML = "";
    works.forEach((work, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${work} <button class="del" data-index="${index}">X</button>`;
        list.appendChild(li);
    });
    addDeleteEvent();
    saveTasks();
}

function saveTasks() {
    localStorage.setItem('todoList', JSON.stringify(works));
}

function deleteWork(index) {
    works.splice(index, 1);
    displayWorks();
}

function addDeleteEvent() {
    document.querySelectorAll('.del').forEach(btn => {
        btn.onclick = (event) => {
            let confirmDelete = confirm("Bạn có chắc muốn xóa việc cần làm này không?");
            if (confirmDelete) {
                deleteWork(Number(event.target.getAttribute('data-index')));
            }
        };
    });
}

addBtn.onclick = function () {
    let taskContent = inputTask.value;
    if (taskContent === "") {
        alert("Nhiệm vụ không được để trống");
        return;
    }
    works.push(taskContent);
    inputTask.value = "";
    displayWorks();
};
