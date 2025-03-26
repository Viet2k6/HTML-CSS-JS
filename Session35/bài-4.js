let addBtn = document.getElementById('btn');
let table = document.getElementById('table');
let pagination = document.createElement('div'); 
pagination.id = "pagination";
document.querySelector(".container").appendChild(pagination);

let data = JSON.parse(localStorage.getItem('employeeList')) || [];
let currentPage = 1;
let rowsPerPage = 3;

displayDatas();

function displayDatas() {
    table.innerHTML = `
        <tr class="thead">
            <td>STT</td>
            <td>Tên</td>
            <td>Chức vụ</td>
        </tr>
    `;

    let start = (currentPage - 1) * rowsPerPage;
    let end = start + rowsPerPage;
    let paginatedData = data.slice(start, end);

    paginatedData.forEach((item, index) => {
        table.innerHTML += `
        <tr>
            <td>${start + index + 1}</td>
            <td>${item.name}</td>
            <td>${item.position}</td>
        </tr>
        `;
    });

    localStorage.setItem("employeeList", JSON.stringify(data));
    displayPagination();
}

function displayPagination() {
    pagination.innerHTML = "";
    let totalPages = Math.ceil(data.length / rowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement("button");
        btn.innerText = i;
        btn.onclick = function () {
            currentPage = i;
            displayDatas();
        };
        if (i === currentPage) {
            btn.style.fontWeight = "bold";
        }
        pagination.appendChild(btn);
    }
}

addBtn.onclick = function () {
    let name = document.getElementById('name').value;
    let position = document.getElementById('position').value;

    if (name === '' || position === '') {
        alert(`Mời nhập tên và chức vụ`);
    } else {
        data.push({ name, position });
        displayDatas();
        document.getElementById('name').value = "";
        document.getElementById('position').value = "";
    }
};
