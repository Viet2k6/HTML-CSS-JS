let books = [];
let cart = [];
let choice;
let menu = `
1. Hiển thị danh sách sách theo thể loại.
2. Thêm sách mới vào kho.
3. Tìm kiếm sách theo tên hoặc ID.
4. Mua sách.
5. Sắp xếp sách theo giá.
6. Tính tổng số lượng sách đã mua và tổng tiền trong giỏ hàng.
7. Hiển thị tổng số lượng sách trong kho.
8. Thoát chương trình.

Lựa chọn của bạn: `;

while (choice !== 8) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      displayBook();
      break;
    case 2:
      addBook();
      break;
    case 3:
      findBook();
      break;
    case 4:
      buyProduct();
      break;
    case 5:
      sortBooks();
      break;
    case 6:
      calculateTotal();
      break;
    case 7:
      displayBooksInStock();
      break;
    case 8:
      alert(`Đã thoát chương trình!`);
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
  }
}

function displayBook() {
  if (books.length === 0) {
    alert("Danh sách sách trống.");
    return;
  }
  let category = prompt("Nhập thể loại sách muốn xem:").trim();
  let filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
  if (filteredBooks.length === 0) {
    alert("Không có sách nào trong thể loại này.");
  } else {
    console.log(`== Danh sách sách trong thể loại ${category}: ==`);
    console.table(filteredBooks);
  }
}

function addBook() {
  let id = Math.floor(Math.random() * 1000) + 1;
  let name = prompt("Nhập tên sách:");
  let price = +prompt("Nhập giá sách:");
  let quantity = +prompt("Nhập số lượng sách:");
  let category = prompt("Nhập thể loại sách:");
  books.push({ id, name, price, quantity, category });
  alert(`Đã thêm sách mới vào kho.`);
}

function findBook() {
  let option = +prompt(`1. Tìm theo Tên sách\n2. Tìm theo ID sách`);
  let book;

  if (option === 1) {
    let name = prompt(`Nhập tên sách cần tìm:`).trim();
    book = books.find(book => book.name.toLowerCase() === name.toLowerCase());
  } else if (option === 2) {
    let id = +prompt(`Nhập ID sách cần tìm:`);
    book = books.find(book => book.id === id);
  } else {
    alert(`Lựa chọn không hợp lệ!`);
    return;
  }
  if (book) {
    console.table(book);
    alert(`Đã tìm thấy sách.`);
  } else {
    alert(`Không có sách nào thỏa mãn.`);
  }
}

function buyProduct() {
  let id = +prompt(`Nhập ID sách muốn mua:`);
  let book = books.find(book => book.id === id);

  if (!book) {
    alert(`Không có sách này trong kho.`);
    return;
  }
  let amount = +prompt(`Nhập số lượng muốn mua:`);
  if (book.quantity < amount) {
    alert(`Số lượng sách không đủ.`);
    return;
  }

  book.quantity -= amount;
  let cartItem = cart.find(item => item.id === id);
  if (cartItem) {
    cartItem.quantity += amount;
  } else {
    cart.push({ id: book.id, name: book.name, price: book.price, quantity: amount });
  }

  alert(`Mua thành công!`);
}

function sortBooks() {
  let option = prompt(`a. Giá tăng dần\nb. Giá giảm dần`).trim().toLowerCase();

  if (option === 'a') {
    books.sort((a, b) => a.price - b.price);
    alert(`Đã sắp xếp sách theo giá tăng dần.`);
  } else if (option === 'b') {
    books.sort((a, b) => b.price - a.price);
    alert(`Đã sắp xếp sách theo giá giảm dần.`);
  } else {
    alert("Lựa chọn không hợp lệ!");
  }
  console.log("== Danh sách sách sau khi sắp xếp: ==");
  console.table(books);
}


function calculateTotal() {
  if (cart.length === 0) {
    alert(`Giỏ hàng đang trống.`);
    return;
  }
  let totalQuantity = cart.reduce((sum, book) => sum + book.quantity, 0);
  let totalPrice = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);

  alert(`Tổng số sách trong giỏ hàng: ${totalQuantity}\nTổng tiền cần thanh toán: ${totalPrice.toLocaleString()} VND`);
}

function displayBooksInStock() {
  let totalBooks = books.reduce((sum, book) => sum + book.quantity, 0);
  alert(`Tổng số sách trong kho: ${totalBooks}`);
}
