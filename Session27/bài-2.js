function inputInfos(arr) {
    let n = +prompt("Mời nhập số lượng sinh viên: ");
    if (n <= 0 || isNaN(n)) {
        alert("Số lượng không hợp lệ.");
        return;
    }

    for (let i = 0; i < n; i++) {
        let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
        if (name === null || name === "") {
            alert("Tên không được để trống.");
            i--; 
        } else {
            arr.push(name);
        }
    }
}

function displayList(arr) {
    if (arr.length === 0) {
        alert("Danh sách sinh viên trống.");
    } else {
        alert("Danh sách sinh viên:\n" + arr.join("\n"));
    }
}

function findStudent(arr) {
    let name = prompt("Mời nhập tên sinh viên cần tìm:");
    if (arr.includes(name)) {
        alert(`Sinh viên "${name}" có trong danh sách.`);
    } else {
        alert(`Không tìm thấy sinh viên "${name}".`);
    }
}

function removeStudent(arr) {
    let name = prompt("Mời nhập tên sinh viên cần xóa:");
    let index = arr.indexOf(name);
    if (index !== -1) {
        arr.splice(index, 1);
        alert(`Đã xóa sinh viên "${name}".`);
    } else {
        alert(`Không tìm thấy sinh viên "${name}".`);
    }
}

let menu = 
`
1. Nhập danh sách sinh viên.
2. Hiển thị danh sách sinh viên.
3. Tìm sinh viên theo tên.
4. Xóa sinh viên khỏi danh sách.
5. Thoát.

Lựa chọn của bạn là gì?
`;

let choice;
let arr = [];
while (choice !== 5) {
    choice = +prompt(menu);

    switch (choice) {
        case 1:
            inputInfos(arr);
            break;
        case 2:
            displayList(arr);
            break;
        case 3:
            findStudent(arr);
            break;
        case 4:
            removeStudent(arr);
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
    }
}


