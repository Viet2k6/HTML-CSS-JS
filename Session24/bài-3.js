let arr = [];
let choice;
let loop = true;

let menu = `
------ MENU ------
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát 

Lựa chọn của bạn là gì?`
;

while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let count = +prompt("Mời nhập vào số lượng phần tử muốn thêm: ");
            for (let i = 0; i < count; i++) {
                let input = prompt("Mời bạn nhập vào phần tử muốn thêm: ");
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
                let max = arr[0];
                let index = 0;
                for (let i = 1; i < arr.length; i++) {
                    if (+arr[i] > +max) { 
                        max = arr[i];
                        index = i;
                    }
                }
                console.log(`Phần tử lớn nhất trong mảng là ${max} tại vị trí ${index}`);
            }
            break;
        case 4:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let sum = 0;
                let count = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (+arr[i] > 0) {
                        sum += +arr[i];
                        count++;
                    }
                }
                if (count > 0) {
                    console.log(`Tổng các số dương trong mảng là ${sum}`);
                    console.log(`Trung bình cộng các số dương trong mảng là ${sum / count}`);
                } else {
                    console.log("Không có số dương trong mảng.");
                }
            }
            break;
        case 5:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
                console.log("Mảng sau khi đảo ngược:", arr);
            }
            break;
        case 6:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let check = true;
                for (let i = 0; i < arr.length / 2; i++) {
                    if (arr[i] !== arr[arr.length - 1 - i]) {
                        check = false;
                        break;
                    }
                }
                if (check) {
                    console.log("Mảng đối xứng");
                } else {
                    console.log("Mảng không đối xứng");
                }
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