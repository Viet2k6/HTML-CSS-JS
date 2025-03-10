let str;
let choice;
let loop = true;

let menu = `
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự
5. Kiểm tra chuỗi đối xứng
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình

Lựa chọn của bạn là gì?
`;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi:");
            console.log("Chuỗi đã nhập:", str);
            break;

        case 2:
            if (!str) {
                console.log("Chưa nhập chuỗi!");
            } else {
                console.log("Chuỗi hiện tại:", str);
            }
            break;

        case 3:
            if (!str) {
                console.log("Chưa nhập chuỗi!");
            } else {
                console.log(`Độ dài của chuỗi: ${str.length}`);
            }
            break;
        case 4:
            if (!str) {
                console.log("Chưa nhập chuỗi!");
            } else {
                let char = prompt("Nhập ký tự cần đếm:");
                let count = 0;
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === char) {
                        count++;
                    }
                }
                console.log(`Ký tự "${char}" xuất hiện "${count}" lần trong chuỗi`);
            }
            break;
        case 5:
            if (!str) {
                console.log("Chưa nhập chuỗi!");
            } else {
                let isSymmetric = true;
                for (let i = 0; i < str.length / 2; i++) {
                    if (str[i] !== str[str.length - 1 - i]) {
                        isSymmetric = false;
                        break;
                    }
                }
                if (isSymmetric) {
                    console.log("Chuỗi đối xứng!");
                } else {
                    console.log("Chuỗi không đối xứng!");
                }
            }
            break;
        case 6:
            if (!str) {
                console.log("Chưa nhập chuỗi!");
            } else {
                let newStr = "";
                for (let i = 0; i < str.length; i++) {
                    if (i === 0 || str[i - 1] === " ") {
                        newStr += str[i].toUpperCase();
                    } else {
                        newStr += str[i];
                    }
                }
                console.log("Chuỗi sau khi chuyển đổi:", newStr);
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
