function findPos(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        alert("Dữ liệu không hợp lệ");
        return;
    }
    let arr2 = []; 
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            alert("Giá trị không hợp lệ");
            return;
        }
        if (arr[i] > 0) {
            arr2.push(arr[i]);
        }
    }
    if (arr2.length > 0) {
        alert("Các số nguyên dương: " + arr2.join(", "));
    } else {
        alert("Không có số nguyên dương trong mảng");
    }
}
let arr = [11, -4, 65, -6];
findPos(arr);