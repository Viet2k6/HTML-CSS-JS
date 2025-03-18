let phones = [];
let cart = [];
let choice;
let menu = `
1. Hiển thị danh sách điện thoại theo hãng.
2. Thêm điện thoại mới vào cửa hàng.
3. Tìm kiếm điện thoại theo tên hoặc ID.
4. Mua điện thoại.
5. Thoát chương trình.

Lựa chọn của bạn: `;

while (choice !== 5) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      displayPhonesByCompany();
      break;
    case 2:
      addPhone();
      break;
    case 3:
      findPhone();
      break;
    case 4:
      buyPhone();
      break;
    case 5:
      alert(`Đã thoát chương trình!`);
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
  }
}

function displayPhonesByCompany() {
  if (phones.length === 0) {
    alert("Danh sách điện thoại trống.");
    return;
  }
  let company = prompt("Nhập hãng điện thoại muốn xem:");
  let filteredPhones = phones.filter(phone => phone.company === company);

  if (filteredPhones.length === 0) {
    alert("Không có điện thoại nào thuộc hãng này.");
  } else {
    console.log(`== Danh sách điện thoại của hãng ${company}: ==`);
    console.table(filteredPhones);
  }
}

function addPhone() {
  let id = Math.floor(Math.random() * 1000) + 1;
  let name = prompt("Nhập tên điện thoại:");
  let price = +prompt("Nhập giá điện thoại:");
  let quantity = +prompt("Nhập số lượng:");
  let company = prompt("Nhập hãng điện thoại:");

  phones.push({ id, name, price, quantity, company });
  alert(`Đã thêm điện thoại mới vào cửa hàng.`);
}

function findPhone() {
  let option = +prompt(`1. Tìm theo Tên điện thoại\n2. Tìm theo ID điện thoại`);
  let phone;
  if (option === 1) {
    let name = prompt(`Nhập tên điện thoại cần tìm:`);
    phone = phones.find(phone => phone.name === name);
  } else if (option === 2) {
    let id = +prompt(`Nhập ID điện thoại cần tìm:`);
    phone = phones.find(phone => phone.id === id);
  } else {
    alert(`Lựa chọn không hợp lệ!`);
    return;
  }

  if (phone) {
    console.table(phone);
    alert(`Đã tìm thấy điện thoại.`);
  } else {
    alert(`Không có điện thoại nào thỏa mãn.`);
  }
}

function buyPhone() {
  let id = +prompt(`Nhập ID điện thoại muốn mua:`);
  let phone = phones.find(phone => phone.id === id);

  if (!phone) {
    alert(`Không có điện thoại này trong cửa hàng.`);
    return;
  }

  let amount = +prompt(`Nhập số lượng muốn mua:`);
  if (phone.quantity < amount) {
    alert(`Số lượng điện thoại không đủ.`);
    return;
  }

  phone.quantity -= amount;

  let cartItem = cart.find(item => item.id === id);
  if (cartItem) {
    cartItem.quantity += amount;
  } else {
    cart.push({ id: phone.id, name: phone.name, price: phone.price, quantity: amount });
  }
  alert(`Mua thành công!`);
}
