let addBtn = document.getElementById('btn');
let table = document.getElementById('table');
let data = JSON.parse(localStorage.getItem('employeeList')) || [];

displayDatas();

function displayDatas() {
    table.innerHTML = `
        <tr class="thead">
            <td>STT</td>
            <td>Tên</td>
            <td>Chức vụ</td>
        </tr>
    `;

    data.forEach((item, index) => {
        item.id = index + 1;
        table.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.position}</td>
        </tr>
        `;
    });

    localStorage.setItem("employeeList", JSON.stringify(data));
}

addBtn.onclick = function () {
    let id = data.length + 1;
    let name = document.getElementById('name').value;
    let position = document.getElementById('position').value;

    if (name === '' || position === '') {
        alert(`Mời nhập tên và chức vụ`);
    } else {
        data.push({ id, name, position });
        displayDatas();
        document.getElementById('name').value = "";
        document.getElementById('position').value = "";
    }
};
