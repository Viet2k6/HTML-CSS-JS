let num = Number(prompt("Mời nhập số"));
if (isNaN(num) || num < 0) {
    alert("Số nhập vào không hợp lệ");
} else {
    for (let i = 1; i <= num; i++) {
        if (i % 5 == 0) {
            alert(`Số ${i} chia hết cho 5 trong khoảng từ 1 đến ${num}`);
            continue;
        }
    }
}
