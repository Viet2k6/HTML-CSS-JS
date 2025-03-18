let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
];
let choice;
let cart = [];
let menu = `
==============MENU================
1. Hiển thị các sản phẩm theo danh mục.
2. Chọn sản phẩm để mua bằng cách nhập ID sản phẩm.
3. Sắp xếp các sản phẩm trong cửa hàng theo giá.
4. Tính số tiền thanh toán trong giỏ hàng.
5. Thoát.

Lựa chọn của bạn: `;

while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            displayDish();
            break;
        case 2:
            buyProduct();
            break;
        case 3:
            sortProducts();
            break;
        case 4:
            displayTotal();
            break;
        case 5:
            alert(`Đã thoát chương trình!`);
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
}

function displayDish() {
    let searchCategory = prompt(`Mời nhập danh mục muốn hiển thị:`).trim();
    let arr = products.filter(product => product.category.toLowerCase() === searchCategory.toLowerCase());

    if (arr.length === 0) {
        alert(`Không có món ăn nào trong danh mục này`);
    } else {
        console.log(`== Danh sách các món trong danh mục ${searchCategory}: ==`);
        arr.forEach(product => console.log(`ID: ${product.id} | Tên: ${product.name} | Giá: ${product.price.toLocaleString()} VND | Số lượng: ${product.quantity}`));
    }
}

function buyProduct() {
    let id = +prompt(`Mời nhập ID món muốn mua:`);
    let product = products.find(product => product.id === id);

    if (!product) {
        alert(`Không có món ăn này trong cửa hàng`);
        return;
    }

    let amount = +prompt(`Mời nhập số lượng muốn mua:`);

    if (product.quantity < amount) {
        alert(`Số lượng hàng không đủ`);
        return;
    }

    product.quantity -= amount;

    let cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += amount;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: amount });
    }

    alert(`Mua thành công!`);
}

function sortProducts() {
    let subChoice = prompt(`Chọn cách sắp xếp:\n a. Tăng dần\n b. Giảm dần`).trim().toLowerCase();
    if (subChoice === 'a') {
        products.sort((a, b) => a.price - b.price);
        alert(`Sắp xếp thành công theo giá tăng dần!`);
    } else if (subChoice === 'b') {
        products.sort((a, b) => b.price - a.price);
        alert(`Sắp xếp thành công theo giá giảm dần!`);
    } else {
        alert(`Lựa chọn không hợp lệ!`);
    }

    console.log(`== Danh sách sản phẩm sau khi sắp xếp: ==`);
    products.forEach(product => console.log(`ID: ${product.id} | Tên: ${product.name} | Giá: ${product.price.toLocaleString()} VND | Số lượng: ${product.quantity}`));
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function displayTotal() {
    let result = calculateTotal();
    alert(`Tổng tiền thanh toán: ${result.toLocaleString()} VND`);
}
