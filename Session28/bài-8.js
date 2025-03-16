let choice;
let employees = [];
let menu = `
------ MENU ------
1. Thêm nhân viên mới.
2. Xóa nhân viên theo ID.
3. Cập nhật mức lương của nhân viên theo ID.
4. Tìm kiếm nhân viên theo tên.
5. Thoát chương trình.

Lựa chọn của bạn là gì?
`;
while (choice !== 5) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      employeeAdd();
      console.log(employees);
      break;
    case 2:
      removeEmployee();
      break;
    case 3:
      updateSalary();
      break;
    case 4:
      searchEmployee();
      break;
    case 5:
      alert("Thoát chương trình!");
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
  }
}

function employeeAdd() {
  let n = +prompt("Mời nhập số lượng nhân viên muốn thêm:");
  if (n <= 0 || isNaN(n)) {
    alert("Số lượng nhân viên không hợp lệ!");
    return;
  }
  for (let i = 0; i < n; i++) {
    let id = +prompt("Mời nhập ID nhân viên:");
    let name = prompt("Mời nhập tên nhân viên:");
    let position = prompt("Mời nhập vị trí nhân viên:");
    let salary = +prompt("Mời nhập lương nhân viên:");

    let isIdExists = false;
    for (let j = 0; j < employees.length; j++) {
      if (employees[j].id === id) {
        isIdExists = true;
        break;
      }
    }
    if (isIdExists) {
      alert(`ID ${id} đã tồn tại!`);
      i--; 
    } else {
      employees.push({ id, name, position, salary });
    }
  }
}

function removeEmployee() {
  let id = +prompt("Mời nhập ID nhân viên muốn xóa:");
  let index = -1;

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    employees.splice(index, 1); 
    alert("Xóa nhân viên thành công!");
  } else {
    alert(`Nhân viên có ID ${id} không tồn tại.`);
  }
}

function updateSalary() {
  let id = +prompt("Mời nhập ID nhân viên muốn cập nhật lương:");
  let found = false;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      let newSalary = +prompt(`Mời nhập lương mới cho ${employees[i].name}:`);
      if (newSalary > 0) {
        employees[i].salary = newSalary;
        alert("Cập nhật lương thành công!");
      } else {
        alert("Lương không hợp lệ!");
      }
      found = true;
      break;
    }
  }

  if (!found) {
    alert(`Nhân viên có ID ${id} không tồn tại.`);
  }
}

function searchEmployee() {
  let nameSearch = prompt("Mời nhập tên nhân viên muốn tìm:");
  let results = [];

  for (let i = 0; i < employees.length; i++) {
    let employeeNameLower = employees[i].name.toLowerCase();
    let searchLower = nameSearch.toLowerCase();

    if (employeeNameLower.includes(searchLower)) {
      results.push(employees[i]);
    }
  }
  if (results.length > 0) {
    let output = "Kết quả tìm kiếm:\n";
    for (let emp of results) {
      output += `ID: ${emp.id}\nTên: ${emp.name}\nVị trí: ${emp.position}\nLương: ${emp.salary}\n\n`;
    }
    alert(output);
  } else {
    alert(`Không tìm thấy nhân viên có tên '${nameSearch}'!`);
  }
}
