let str;
let choice;
let loop = true;

let menu = `
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi ký tự
6. Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc. Ví dụ người dùng nhập “e”, chuỗi gốc “Hello” → Tìm thấy ký tự. Cho người dùng nhập vào ký tự thay thế “o” → Output: “Hollo”
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
                console.log("Chuỗi sau khi loại bỏ khoảng trắng ở đầu và cuối:", str.trim());
            }
            break;
        case 4:
            if (!str) {
                console.log("Chưa nhập chuỗi!");
            } else {
                console.log("Chuỗi sau khi đảo ngược:", str.split("").reverse().join(""));
            }
            break;
        case 5:
            if (!str) {
                console.log("Chưa nhập chuỗi!");
            } else {
                console.log("Số lượng từ trong chuỗi:", str.split(" ").length);
            }
            break;
        case 6:
            if (!str) {
                console.log("Chưa nhập chuỗi!");
            } else {
                let char = prompt("Nhập ký tự cần tìm:");
                if (!char || char.length !== 1) {
                    console.log("Vui lòng nhập một ký tự hợp lệ!");
                } else if (!str.includes(char)) {
                    console.log(`Ký tự "${char}" không tồn tại trong chuỗi.`);
                } else {
                    let newChar = prompt("Nhập ký tự thay thế:");
                    let newStr = str.split(char).join(newChar);
                    console.log("Chuỗi sau khi thay thế:", newStr);
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
