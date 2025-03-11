function findEven(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        alert("Dữ liệu không hợp lệ");
        return;
    }
    let check = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            alert("Giá trị không hợp lệ");
            return; 
        }
        if (arr[i] % 2 === 0) {
            alert(arr[i]);
            check++;
        }
    }

    if (check === 0) {
       alert("Mảng không có số chẵn");
    }
}
let arr = [11, 4, 65, 6];
findEven(arr);
