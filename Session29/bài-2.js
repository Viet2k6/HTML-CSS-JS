let stock = [];
let choice;
let menu = `
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5. Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.

Lựa chọn của bạn là gì?
`;
while (choice !== 7) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      addProduct();
      break;
    case 2:
      displayStock(stock);
      break;
    case 3:
      searchById();
      break;
    case 4:
      updateItem();
      break;
    case 5:
      removeItem();
      break;
    case 6:
      handleFilterPrice();
      break;
    case 7:
      alert("Đã thoát chương trình");
      break;
    default:
      console.log("Lựa chọn không hợp lệ.");
  }
}

function addProduct() {
  let id = Math.floor(Math.random() * 1000) + 1;
  let name = prompt("Nhập tên sản phẩm:");
  let price = +prompt("Nhập giá sản phẩm:");
  let category = prompt("Nhập loại sản phẩm:");
  let quantity = +prompt("Nhập số lượng sản phẩm");
  stock.push({ id, name, price, category, quantity });
  alert("Đã thêm sản phẩm mới!");
}

function displayStock(stock) {
  if (stock.length === 0) {
    console.log("Danh sách sản phẩm trống!");
    return;
  }
  for (let i = 0; i < stock.length; i++) {
    console.log("ID:", stock[i].id);
    console.log("Name:", stock[i].name);
    console.log("Price:", stock[i].price);
    console.log("Category:", stock[i].category);
    console.log("Quantity:", stock[i].quantity);
  }
}

function searchById() {
  let search = +prompt("Mời nhập ID sản phẩm");
  let found = null;
  for (let i = 0; i < stock.length; i++) {
    if (stock[i].id === search) {
      found = stock[i];
      break;
    }
  }
  if (found !== null) {
    console.log("ID:", found.id);
    console.log("Name:", found.name);
    console.log("Price:", found.price);
    console.log("Category:", found.category);
    console.log("Quantity:", found.quantity);
  } else {
    alert("Không tìm thấy sản phẩm này trong danh sách");
  }
}

function updateItem() {
  let search = +prompt("Mời nhập ID sản phẩm muốn cập nhật");
  let found = null;
  for (let i = 0; i < stock.length; i++) {
    if (stock[i].id === search) {
      found = stock[i];
      break;
    }
  }
  if (found !== null) {
    let name = prompt("Nhập tên sản phẩm", found.name);
    let price = +prompt("Nhập giá sản phẩm", found.price);
    let category = prompt("Nhập loại sản phẩm", found.category);
    let quantity = +prompt("Nhập số lượng sản phẩm", found.quantity);

    if (name !== "") {
      found.name = name;
    }
    if (!isNaN(price) && price > 0) {
      found.price = price;
    }
    if (category !== "") {
      found.category = category;
    }
    if (!isNaN(quantity) && quantity >= 0) {
      found.quantity = quantity;
    }

    alert("Thông tin sản phẩm đã được cập nhật");
  } else {
    alert("Không tìm thấy ID này trong danh sách");
  }
}

function removeItem() {
  let search = +prompt("Mời nhập ID sản phẩm muốn xóa");
  let index = -1;
  for (let i = 0; i < stock.length; i++) {
    if (stock[i].id === search) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    stock.splice(index, 1);
    alert("Đã xóa sản phẩm với ID: " + search);
  } else {
    alert("Không tìm thấy ID này trong danh sách");
  }
}

function filterPrice() {
  let start = +prompt("Mời nhập giá tối thiểu");
  let end = +prompt("Mời nhập giá tối đa");

  if (end <= start || isNaN(end) || isNaN(start)) {
    return "Khoảng giá không hợp lệ";
  }

  let filtered = [];
  for (let i = 0; i < stock.length; i++) {
    if (stock[i].price > start && stock[i].price < end) {
      filtered.push(stock[i]);
    }
  }

  if (filtered.length > 0) {
    return filtered;
  } else {
    return "Không có sản phẩm nào trong khoảng giá này";
  }
}

function handleFilterPrice() {
  let filteredArr = filterPrice();
  if (Array.isArray(filteredArr)) {
    console.log("Danh sách sản phẩm đã được lọc:");
    displayStock(filteredArr);
  } else {
    alert(filteredArr);
  }
}
