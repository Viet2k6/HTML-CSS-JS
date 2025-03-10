let arr =[];
let choice;
let loop = true;

let menu = `
------ MENU ------
1. Nhập mảng
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát 

Lựa chọn của bạn là gì?
`;

while (loop) {
    choice = +prompt(menu);
    switch (choice){
        case 1:
            let count = +prompt("Mời nhập vào số lượng phần tử muốn thêm");
            for (let i = 0; i < count; i++) {
            let input = prompt("Mời bạn nhập vào phần tử muốn thêm");
            arr.push(input);
            }
            console.log(arr);
            break;
        case 2:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
            for (let i in arr) {
            console.log(`${i}. ${arr[i]}`);
            }
        }
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let even = [], odd = [];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 === 0) {
                        even.push(arr[i]);
                    } else {
                        odd.push(arr[i]);
                    }
                }
                console.log("Các số chẵn: " + even);
                console.log("Các số lẻ: " + odd);
            }
            break;
        case 4:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += +arr[i];
            }
            let average = sum / arr.length;
            console.log("Trung bình cộng của mảng là: " + average);
        }
            break;
        case 5:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let index = +prompt("Mời bạn nhập vào vị trí muốn xóa");
                if (index < 0 || index >= arr.length) {
                    console.log("Vị trí không hợp lệ!");
                } else {
                    arr.splice(index, 1);
                    console.log(arr);
                }
            }
            break;
        case 6:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
            let max = arr[0], maxSecond = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxSecond = max;
                    max = arr[i];
                } else if (arr[i] > maxSecond && arr[i] < max) {
                    maxSecond = arr[i];
                }
            }
            console.log("Phần tử lớn thứ hai trong mảng là: " + maxSecond);
        }
            break;
        case 7:
            console.log("Kết thúc chương trình. Cảm ơn !!!!!");
            loop = false;
            break;
         default:
        console.log("Lựa chọn không hợp lệ!");
        }
}