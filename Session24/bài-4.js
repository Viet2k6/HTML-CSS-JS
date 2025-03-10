let arr = [];
let choice;
let loop = true;

let menu = `
------ MENU ------
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược thứ tự các hàng trong mảng
7. Thoát

Lựa chọn của bạn là gì?
`;

while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let rows = +prompt("Nhập số hàng:");
            let cols = +prompt("Nhập số cột:");
            arr = [];
            for (let i = 0; i < rows; i++) {
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    arr[i][j] = +prompt(`Nhập phần tử tại vị trí [${i}][${j}]:`);
                }
            }
            console.log("Mảng 2 chiều đã nhập:");
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i].join(" "));
            }
            break;
        case 2:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                console.log("Mảng 2 chiều:");
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i].join(" "));
                }
            }
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        sum += arr[i][j];
                    }
                }
                console.log(`Tổng các phần tử trong mảng là: ${sum}`);
            }
            break;
        case 4:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let max = arr[0][0];
                let index = [0, 0];
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        if (arr[i][j] > max) {
                            max = arr[i][j];
                            index = [i, j];
                        }
                    }
                }
                console.log(`Phần tử lớn nhất trong mảng là ${max} tại vị trí [${index[0]}][${index[1]}]`);
            }
            break;
        case 5:
                if (arr.length === 0) {
                    console.log("Mảng trống!");
                } else {
                    let row = +prompt("Nhập hàng cần tính trung bình cộng:");
                    if (row < 0 || row >= arr.length) {
                        console.log("Hàng không hợp lệ!");
                    } else {
                        let sumRow = 0;
                        for (let i = 0; i < arr[row].length; i++) {
                            sumRow += arr[row][i];
                        }
                        let average = sumRow / arr[row].length; 
                        console.log(`Trung bình cộng các phần tử của hàng ${row} là: ${average}`);
                    }
                }
                break;
        case 6:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                arr.reverse(); 
                console.log("Mảng sau khi đảo ngược thứ tự hàng:");
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i].join(" "));
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
