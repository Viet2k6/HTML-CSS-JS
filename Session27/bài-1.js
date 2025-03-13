function sum() {
    let num1 = +prompt("Nhập số thứ nhất:");
    let num2 = +prompt("Nhập số thứ hai:");
    if (isNaN(num1) || isNaN(num2)) {
        alert("Số không hợp lệ.");
        return;
    }
    let sum = num1 + num2;
    alert(`Tổng 2 số là: ${num1} + ${num2} = ${sum}`);
}

function minus() {
    let num1 = +prompt("Nhập số thứ nhất:");
    let num2 = +prompt("Nhập số thứ hai:");
    if (isNaN(num1) || isNaN(num2)) {
        alert("Số không hợp lệ.");
        return;
    }
    let total = num1 - num2;
    alert(`Hiệu 2 số là: ${num1} - ${num2} = ${total}`);
}

function multiply() {
    let num1 = +prompt("Nhập số thứ nhất:");
    let num2 = +prompt("Nhập số thứ hai:");
    if (isNaN(num1) || isNaN(num2)) {
        alert("Số không hợp lệ.");
        return;
    }
    let total = num1 * num2;
    alert(`Tích 2 số là: ${num1} × ${num2} = ${total}`);
}

function divide() {
    let num1 = +prompt("Nhập số thứ nhất:");
    let num2 = +prompt("Nhập số thứ hai:");
    if (isNaN(num1) || isNaN(num2)) {
        alert("Số không hợp lệ.");
        return;
    }
    if (num2 === 0) {
        alert("Không thể chia cho 0.");
        return;
    }
    let total = num1 / num2;
    alert(`Thương 2 số là: ${num1} ÷ ${num2} = ${total}`);
}

let menu =`
1.Cộng hai số.
2.Trừ hai số.
3.Nhân hai số.
4.Chia hai số.
5.Thoát.

Lựa chọn của bạn là gì?
`;

let choice = 0;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            sum();
            break;
        case 2:
            minus();
            break;
        case 3:
            multiply();
            break;
        case 4:
            divide();
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
    }
}