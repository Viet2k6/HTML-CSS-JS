let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let input = prompt("Mời nhập số:");

if (input === "" || isNaN(input)) {  
    alert("Số không hợp lệ");
} else {
    let num = +input; 
    let countAppear = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === num) {
            countAppear++;
        }
    }
    if (countAppear === 0) {
        alert(`Số ${num} không xuất hiện trong mảng`);
    } else {
        alert(`Số ${num} xuất hiện ${countAppear} lần trong mảng`);
    }
}