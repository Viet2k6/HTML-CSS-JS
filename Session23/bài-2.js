let arr = [];
let max = 0;
let indexMax = 0;
let i;
for (i = 0; i < 10; i++) {
    arr[i] = +prompt(`Mời nhập số: `);
    if (isNaN(arr[i])) {
        alert(`Đây không phải là số`);
        i--;
        continue;
    }
    if (max < arr[i]) {
        max = arr[i];
        indexMax = i;
    }
}
if (arr.length === 0) {
    alert(`Không có số lớn nhất`);
} else {
    alert(`Số lớn nhất là: ${max} 
    Vị trí: ${indexMax}`);
}


