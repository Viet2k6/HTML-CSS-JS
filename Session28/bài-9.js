let choice;
let books = [];
let menu = `
------ MENU ------
1. Thêm sách mới.
2. Hiển thị danh sách sách.
3. Tìm kiếm sách theo tiêu đề.
4. Cập nhật trạng thái mượn/trả sách theo ID.
5. Xóa sách theo ID.
6. Sắp xếp sách theo giá tăng dần.
7. Thoát chương trình.

Lựa chọn của bạn là gì?
`;
while (choice !== 7) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      addBooks();
      break;
    case 2:
      displayBooks();
      break;
    case 3:
      findBook();
      break;
    case 4:
      statusUpdate();
      break;
    case 5:
      removeBook();
      break;
    case 6:
      sortByPrice();
      break;
    case 7:
      alert("Thoát chương trình.");
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
  }
}

function addBooks() {
  let n = +prompt("Mời nhập số lượng sách muốn thêm:");
  if (n <= 0 || isNaN(n)) {
    alert("Số lượng sách không hợp lệ.");
    return;
  }
  for (let i = 0; i < n; i++) {
    let id = +prompt("Mời nhập ID sách:");
    if (isNaN(id) || checkIdExists(id)) {
      alert("ID sách không hợp lệ hoặc đã tồn tại.");
      i--;
      continue;
    }
    let title = prompt("Mời nhập tên sách:");
    let author = prompt("Mời nhập tên tác giả:");
    let price = parseFloat(prompt("Mời nhập giá sách:"));
    let isAvailable = prompt("Mời nhập trạng thái mượn sách (true/false):").toLowerCase() === "true";

    books.push({ id: id, title: title, author: author, price: price, isAvailable: isAvailable });
  }
}

function checkIdExists(id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      return true;
    }
  }
  return false;
}

function displayBooks() {
  if (books.length === 0) {
    alert("Danh sách sách trống!");
    return;
  }
  let output = "";
  for (let i = 0; i < books.length; i++) {
    output += "ID: " + books[i].id + "\n";
    output += "Tên: " + books[i].title + "\n";
    output += "Tác giả: " + books[i].author + "\n";
    output += "Giá: " + books[i].price + "\n";
    output += "Trạng thái: " + (books[i].isAvailable ? "Có sẵn" : "Đã mượn") + "\n\n";
  }
  alert(output);
}

function findBook() {
  let name = prompt("Mời nhập tên sách muốn tìm:").toLowerCase();
  let output = "";
  let found = false;

  for (let i = 0; i < books.length; i++) {
    if (books[i].title.toLowerCase().includes(name)) {
      output += "ID: " + books[i].id + "\n";
      output += "Tên: " + books[i].title + "\n";
      output += "Tác giả: " + books[i].author + "\n";
      output += "Giá: " + books[i].price + "\n";
      output += "Trạng thái: " + (books[i].isAvailable ? "Có sẵn" : "Đã mượn") + "\n\n";
      found = true;
    }
  }
  if (found) {
    alert(output);
  } else {
    alert("Không tìm thấy sách có tiêu đề '" + name + "'.");
  }
}

function statusUpdate() {
  let id = +prompt("Mời nhập ID sách muốn cập nhật trạng thái:");
  let found = false;

  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      books[i].isAvailable = !books[i].isAvailable;
      alert(
        "Trạng thái sách đã được cập nhật!\n" +
          "ID: " + books[i].id + "\n" +
          "Trạng thái: " + (books[i].isAvailable ? "Có sẵn" : "Đã mượn")
      );
      found = true;
      break;
    }
  }
  if (!found) {
    alert("Không tìm thấy sách có ID " + id);
  }
}

function removeBook() {
  let id = +prompt("Mời nhập ID sách muốn xóa:");
  let index = -1;

  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    books.splice(index, 1);
    alert("Đã xóa sách có ID " + id + " khỏi danh sách!");
  } else {
    alert("Không tìm thấy sách có ID " + id);
  }
}

function sortByPrice() {
  for (let i = 0; i < books.length - 1; i++) {
    for (let j = i + 1; j < books.length; j++) {
      if (books[i].price > books[j].price) {
        let temp = books[i];
        books[i] = books[j];
        books[j] = temp;
      }
    }
  }
  displayBooks();
}
