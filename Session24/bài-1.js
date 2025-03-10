let arr =[];
let choice;
let loop = true;

let menu = `
------ MENU ------
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất
4. Tính tổng các phần tử
5. Tìm số lần xuất hiện của một phần tử
6. Sắp xếp mảng tăng dần
7. Thoát

Lựa chọn của bạn là gì?
`;

while (loop) {
    choice = +prompt(menu);
    switch (choice){
        case 1:
            let count = +prompt(`Mời nhập vào số lượng phần tử muốn thêm: `);
            for (let i = 0; i < count; i++) {
            let input = prompt(`Mời bạn nhập vào phần tử muốn thêm: `);
            arr.push(input);
            }
            console.log(arr);
            break;
        case 2:
            if (arr.length === 0) {
                console.log(`Mảng trống!`);
            } else {
            for (let i in arr) {
            console.log(`${i}. ${arr[i]}`);
            }
        }
            break;
        case 3:
            if (arr.length === 0) {
                console.log(`Mảng trống!`);
            } else {
                let min = arr[0], max = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] < min) min = arr[i];
                    if (arr[i] > max) max = arr[i];
                }
                console.log(`Số nhỏ nhất: ` + min);
                console.log(`Số lớn nhất: ` + max);
            }
            break;
        case 4:
            if (arr.length === 0) {
                console.log(`Mảng trống!`);
            } else {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += +arr[i];
            }
            console.log(`Tổng các phần tử trong mảng là: ` + sum);
        }
            break;
        case 5:
            if (arr.length === 0) {
                console.log(`Mảng trống!`);
            } else {
            let countAppear = 0;
            let number = +prompt(`Nhập vào số cần kiểm tra`);
            for (let i = 0; i < arr.length; i++) {
                if (number == arr[i]) {
                    countAppear++;
                }
            }
            console.log(`Phần tử` + number + ` xuất hiện ` + countAppear + ` lần trong mảng`);
        }
            break;
        case 6:
            if (arr.length === 0) {
                console.log(`Mảng trống!`);
            } else {
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (+arr[i] > +arr[j]) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            console.log(`Mảng sau khi sắp xếp: ` + arr);
        }
            break;
        case 7:
            console.log(`Kết thúc chương trình. Cảm ơn !!!!!`);
            loop = false;
            break;
        default:
        console.log(`Lựa chọn không hợp lệ!`);
    }
}