let inputTask = document.getElementById('inputTask');
let addBtn = document.getElementById('add');
let list = document.getElementById('myUL');

let works = JSON.parse(localStorage.getItem('todoList')) || []; 
displayWorks();

function displayWorks() {
    list.innerHTML = "";
    works.forEach((work, index) => {
        list.innerHTML += `
            <li>
                ${work} 
                <div class="buttonContainer">
                    <button class="fix" data-index="${index}">Sửa</button>
                    <button class="del" data-index="${index}">Xóa</button>
                </div>
            </li>
        `;
    });

    document.querySelectorAll('.del').forEach(btn => {
        btn.onclick = function () {
            deleteWork(Number(this.getAttribute('data-index')));
        };
    });

    document.querySelectorAll('.fix').forEach(btn => {
        btn.onclick = function () {
            fixWork(Number(this.getAttribute('data-index')));
        };
    });

    localStorage.setItem('todoList', JSON.stringify(works)); 
}

function fixWork(index) {
    let newWork = prompt("Mời nhập công việc mới:");
    if (newWork !== null) {
        works[index] = newWork;
        displayWorks();
    }
}

function deleteWork(index) {
    works.splice(index, 1);
    displayWorks();
}

addBtn.onclick = function () {
    let task = inputTask.value;
    if (task === "") {
        alert("Nhiệm vụ không được để trống");
    } else {
        works.push(task);
        displayWorks();
        inputTask.value = ""; 
    }
};

