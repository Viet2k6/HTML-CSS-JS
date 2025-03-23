let products = [
    { id: 1, name: "Điện thoại Samsung Galaxy A54", price: 7490000, image: "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg" },
    { id: 2, name: "Laptop Dell Inspiron 15", price: 15990000, image: "https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053" },
    { id: 3, name: "Tai nghe AirPods Pro", price: 4990000, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836" },
];

let cart = [];
let container = document.querySelector(".product-list");
let cartContainer = document.querySelector(".cart-items");
let cartStatus = document.querySelector(".cart-status");
let totalPrice = document.querySelector(".cart-total");
let buyBtn = document.querySelector(".checkout-btn");

function displayProducts() {
    container.innerHTML = "";
    products.forEach(function (product) {
        let productHTML = `
            <div class="item">
                <img src="${product.image}" alt="">
                <h3>${product.name}</h3>
                <span class="price">${product.price.toLocaleString()} đ</span>
                <button class="add" data-id="${product.id}">Thêm vào giỏ hàng</button>
            </div>`;
        container.innerHTML += productHTML;
    });

    document.querySelectorAll(".add").forEach(function (button) {
        button.addEventListener("click", function () {
            let productId = Number(this.getAttribute("data-id"));
            addToCart(productId);
        });
    });
}

function addToCart(productId) {
    let product = products.find(item => item.id === productId);
    let cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    cartContainer.innerHTML = "";
    
    if (cart.length > 0) {
        cartStatus.style.display = "none";
        cartContainer.style.display = "block";
    } else {
        cartStatus.style.display = "block";
        cartContainer.style.display = "none";
    }

    cart.forEach(function (item, index) {
        let cartItemHTML = `
            <div class="cart-item">
                <span class="itemName">${item.name}</span>
                <br>
                <span class="itemPrice">${item.price.toLocaleString()} đ x <span class="quantity">${item.quantity}</span></span>
                <div class="interact">
                    <button class="de" data-index="${index}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="in" data-index="${index}">+</button>
                    <button class="del" data-index="${index}">X</button>
                </div>
                <hr>
            </div>`;
        cartContainer.innerHTML += cartItemHTML;
    });

    updateTotal();
}

function updateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPrice.innerText = `Tổng: ${total.toLocaleString()} đ`;
}

buyBtn.addEventListener("click", function () {
    if (cart.length < 1) {
        alert("Giỏ hàng của bạn đang trống");
    } else {
        alert(`Cảm ơn bạn đã mua hàng! Tổng giá trị đơn hàng: ${totalPrice.innerText}`);
        cart = [];
        updateCart();
    }
});

displayProducts();
