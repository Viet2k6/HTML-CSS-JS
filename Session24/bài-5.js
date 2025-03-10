let arr = [];
let choice;
let loop = true;

let menu = `
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
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
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i][i];
                }
                console.log(`Tổng các phần tử trên đường chéo chính là: ${sum}`);
            }
            break;
        case 5:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i][arr.length - 1 - i];
                }
                console.log(`Tổng các phần tử trên đường chéo phụ là: ${sum}`);
            }
            break;  
            case 6:
                if (arr.length === 0) {
                    console.log("Mảng trống!");
                } else {
                    let option = prompt("Chọn tính trung bình cộng của (1) Hàng hay (2) Cột? (Nhập 1 hoặc 2)");
                    let sum = 0;
                    let average = 0; 
                    if (option === "1") { 
                        let row = +prompt("Nhập số thứ tự hàng cần tính:");
                        if (row >= 0 && row < arr.length) {
                            for (let i = 0; i < arr[row].length; i++) {
                                sum += arr[row][i];
                            }
                            average = sum / arr[row].length;
                            console.log(`Trung bình cộng các phần tử của hàng ${row} là: ${average}`);
                        } else {
                            console.log("Hàng không hợp lệ!");
                        }
                    } else if (option === "2") { 
                        let col = +prompt("Nhập số thứ tự cột cần tính:");
                        if (col >= 0 && col < arr[0].length) {
                            for (let i = 0; i < arr.length; i++) {
                                sum += arr[i][col];
                            }
                            average = sum / arr.length;
                            console.log(`Trung bình cộng các phần tử của cột ${col} là: ${average}`);
                        } else {
                            console.log("Cột không hợp lệ!");
                        }
                    } else {
                        console.log("Lựa chọn không hợp lệ!");
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


