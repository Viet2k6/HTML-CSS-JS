let tasks = JSON.parse(localStorage.getItem("taskList")) || [];
let tableContainer = document.getElementById("infoTable");
let submitBtn = document.getElementById("submitBtn");

displayTasks();

function displayTasks() {
    tableContainer.innerHTML = `
        <tr class="thead">
            <td><b></b></td>
            <td><b>Content</b></td>
            <td><b>Due date</b></td>
            <td><b>Status</b></td>
            <td><b>Assigned to</b></td>
            <td><b>Action</b></td>
        </tr>`;

    tasks.forEach((task, index) => {
        task.id = index + 1;
        tableContainer.innerHTML += `
            <tr>
                <td>${task.id}</td>
                <td>${task.content}</td>
                <td>${task.dueDate}</td>
                <td>${task.status}</td>
                <td>${task.assignedTo}</td>
                <td>
                    <button class="fix" data-index="${index}">Edit</button>
                    <button class="delete" data-index="${index}">Delete</button>
                </td>
            </tr>`;
    });

    document.querySelectorAll(".fix").forEach((btn) => {
        btn.onclick = function () {
            editTask(Number(this.getAttribute("data-index")));
        };
    });

    document.querySelectorAll(".delete").forEach((btn) => {
        btn.onclick = function () {
            deleteTask(Number(this.getAttribute("data-index")));
        };
    });

    localStorage.setItem("taskList", JSON.stringify(tasks));
}

function editTask(index) {
    let id = tasks[index].id;
    let content = prompt(`Enter new content:`, tasks[index].content);
    let dueDate = prompt(`Enter new due date (YYYY-MM-DD):`, tasks[index].dueDate);
    let status = prompt(`Enter new status (Pending / Completed / Rejected):`, tasks[index].status);
    let assignedTo = prompt(`Enter new assigned user:`, tasks[index].assignedTo);

    if (content && dueDate && status && assignedTo) {
        tasks[index] = { id, content, dueDate, status, assignedTo };
        displayTasks();
    } else {
        alert("Mời nhập đầy đủ thông tin!");
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

submitBtn.onclick = function (event) {
    event.preventDefault();

    let content = document.getElementById("content").value;
    let dueDate = document.getElementById("date").value;
    let status = document.getElementById("status").value;
    let assignedTo = document.getElementById("user").value;

    if (content === "" || dueDate === "" || status === "" || assignedTo === "") {
        alert("Mời nhập đầy đủ thông tin!");
    } else {
        let id = tasks.length + 1;
        tasks.push({ id, content, dueDate, status, assignedTo });

        displayTasks();

        document.getElementById("content").value = "";
        document.getElementById("date").value = "";
        document.getElementById("status").value = "Choose status";
        document.getElementById("user").value = "";
    }
};
