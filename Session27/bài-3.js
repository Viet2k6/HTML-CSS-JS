function circleArea() {
    let r = +prompt("Mời nhập bán kính:");
    if (isNaN(r) || r <= 0) {
        alert("Số không hợp lệ.");
        return;
    }
    let area = Math.PI * r ** 2;
    alert(`Diện tích hình tròn là: ${area}`);
}

function circlePerimeter() {
    let r = +prompt("Mời nhập bán kính:");
    if (isNaN(r) || r <= 0) {
        alert("Số không hợp lệ.");
        return;
    }
    let perimeter = 2 * Math.PI * r;
    alert(`Chu vi hình tròn là: ${perimeter}`);
}

function rectangleArea() {
    let length = +prompt("Mời nhập chiều dài:");
    let width = +prompt("Mời nhập chiều rộng:");
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert("Số không hợp lệ.");
        return;
    }
    let area = length * width;
    alert(`Diện tích hình chữ nhật là: ${area}`);
}

function rectanglePerimeter() {
    let length = +prompt("Mời nhập chiều dài:");
    let width = +prompt("Mời nhập chiều rộng:");
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert("Số không hợp lệ.");
        return;
    }
    let perimeter = 2 * (length + width);
    alert(`Chu vi hình chữ nhật là: ${perimeter}`);
}

let menu = `
1. Tính diện tích hình tròn.
2. Tính chu vi hình tròn.
3. Tính diện tích hình chữ nhật.
4. Tính chu vi hình chữ nhật.
5. Thoát.

Lựa chọn của bạn là gì?
`;

let choice;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            circleArea();
            break;
        case 2:
            circlePerimeter();
            break;
        case 3:
            rectangleArea();
            break;
        case 4:
            rectanglePerimeter();
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
}