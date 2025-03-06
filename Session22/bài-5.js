let arr = [1, 4, 7, 8, 3];
let sumOdd = 0;
let sumEven = 0;
for (let num of arr) {
    document.write(num);
    document.write(`<br>`);
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sumEven += arr[i];
    } else {
        sumOdd += arr[i]; 
    }
}
alert(`tổng các số chẵn: ${sumEven}
tổng các số lẻ: ${sumOdd}`);