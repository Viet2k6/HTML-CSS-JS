let menu = {};
let choice;
let menuText = `
1. Thêm món ăn vào danh mục.
2. Xóa món ăn theo tên khỏi danh mục.
3. Cập nhật thông tin món ăn theo tên.
4. Hiển thị toàn bộ menu.
5. Tìm kiếm món ăn theo tên.
6. Thoát.

Lựa chọn của bạn là gì?
 `;

while (choice !== 6) {
  choice = +prompt(menuText);
  switch (choice) {
    case 1:
      addDish();
      break;
    case 2:
      removeDish();
      break;
    case 3:
      updateDish();
      break;
    case 4:
      displayMenu();
      break;
    case 5:
      searchDish();
      break;
    case 6:
      alert("Đã thoát chương trình!");
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
  }
}

function addDish() {
  let category = prompt("Nhập danh mục món ăn:");
  let dish = getDishInfo();
  if (!menu[category]) {
    menu[category] = [];
  }
  menu[category].push(dish);
  alert("Đã thêm món ăn!");
}

function removeDish() {
  let name = prompt("Nhập tên món ăn cần xóa:");
  let found = false;

  for (let category in menu) {
    let index = menu[category].findIndex(dish => dish.name === name);
    if (index !== -1) {
      menu[category].splice(index, 1);
      alert(`Đã xóa món ăn: ${name}`);
      found = true;
      break;
    }
  }

  if (!found) {
    alert("Không tìm thấy món ăn!");
  }
}

function updateDish() {
  let name = prompt("Nhập tên món ăn cần cập nhật:");
  let found = false;

  for (let category in menu) {
    let dish = menu[category].find(dish => dish.name === name);
    if (dish) {
      Object.assign(dish, getDishInfo(dish));
      alert("Đã cập nhật món ăn!");
      found = true;
      break;
    }
  }

  if (!found) {
    alert("Không tìm thấy món ăn!");
  }
}

function displayMenu() {
  if (Object.keys(menu).length === 0) {
    console.log("Menu hiện đang trống!");
    return;
  }

  for (let category in menu) {
    console.log(`Danh mục: ${category}`);
    menu[category].forEach(dish => displayDish(dish));
  }
}

function searchDish() {
  let name = prompt("Nhập tên món ăn cần tìm:");
  let found = false;

  for (let category in menu) {
    let dish = menu[category].find(dish => dish.name === name);
    if (dish) {
      displayDish(dish, category);
      found = true;
      break;
    }
  }

  if (!found) {
    alert("Không tìm thấy món ăn!");
  }
}

function getDishInfo(existingDish = {}) {
  return {
    name: prompt("Nhập tên món ăn:", existingDish.name || ""),
    price: +prompt("Nhập giá món ăn:", existingDish.price || ""),
    description: prompt("Nhập mô tả món ăn:", existingDish.description || "")
  };
}

function displayDish(dish, category = "") {
  console.log(`Tên: ${dish.name}`);
  console.log(`Giá: ${dish.price}`);
  console.log(`Mô tả: ${dish.description}`);
  if (category) console.log(`Danh mục: ${category}`);
}
