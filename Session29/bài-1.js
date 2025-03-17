let contacts = [];
let choice;
let menu = `
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact (name, email, phone) theo id.
5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
6. Thoát.

Lựa chọn của bạn là gì?
`;
while (choice !== 6) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      addContact();
      break;
    case 2:
      displayContacts();
      break;
    case 3:
      searchByPhone();
      break;
    case 4:
      updateContact();
      break;
    case 5:
      removeContact();
      break;
    case 6:
      alert("Đã thoát chương trình!");
      break;
    default:
      alert("Lựa chọn sai. Vui lòng nhập lại!");
  }
}

function addContact() {
  let id = Math.floor(Math.random() * 1000) + 1;
  let name = prompt("Nhập tên liên hệ:") || "";
  let email = prompt("Nhập email liên hệ:") || "";
  let phone = prompt("Nhập số điện thoại liên hệ:") || "";
  contacts.push({ id: id, name: name, email: email, phone: phone });
  alert("Đã thêm liên hệ mới!");
}

function displayContacts() {
  if (contacts.length === 0) {
    alert("Danh sách danh bạ trống!");
    return;
  }
  for (let i = 0; i < contacts.length; i++) {
    console.log("ID:", contacts[i].id);
    console.log("Name:", contacts[i].name);
    console.log("Email:", contacts[i].email);
    console.log("Phone:", contacts[i].phone);
  }
}

function searchByPhone() {
  let search = prompt("Mời nhập số điện thoại muốn tra:");
  let found = null;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].phone === search) {
      found = contacts[i];
      break;
    }
  }
  if (found !== null) {
    alert(
      "ID: " + found.id + "\n" +
      "Name: " + found.name + "\n" +
      "Email: " + found.email + "\n" +
      "Phone: " + found.phone
    );
  } else {
    alert("Không tìm thấy số điện thoại này trong danh sách!");
  }
}

function updateContact() {
  let search = +prompt("Mời nhập ID contact muốn cập nhật:");
  let contact = null;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].id === search) {
      contact = contacts[i];
      break;
    }
  }
  if (contact !== null) {
    let name = prompt("Nhập tên liên hệ:", contact.name);
    let email = prompt("Nhập email liên hệ:", contact.email);
    let phone = prompt("Nhập số điện thoại liên hệ:", contact.phone);

    if (name !== null && name !== "") {
      contact.name = name;
    }
    if (email !== null && email !== "") {
      contact.email = email;
    }
    if (phone !== null && phone !== "") {
      contact.phone = phone;
    }

    alert("Thông tin liên hệ đã được cập nhật!");
  } else {
    alert("Không tìm thấy ID này trong danh sách!");
  }
}

function removeContact() {
  let search = +prompt("Mời nhập ID contact muốn xóa:");
  let index = -1;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].id === search) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    contacts.splice(index, 1);
    alert("Đã xóa contact với ID: " + search);
  } else {
    alert("Không tìm thấy ID này trong danh sách!");
  }
}
