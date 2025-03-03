let result = "javascript" +5
// result = javascript5 
// vì "javascript" là 1 chuỗi nên dấu + ở đây sẽ đc hiểu là để nối chuỗi
let result2 = "javascript" - 1;
// result = Nan vì toán tử - chỉ áp dụng cho các chữ số mà "javascript" lại là 1 chuỗi nên kết quả sẽ không trả về 1 số
let result3 = "3" + 2;
// result = 32 
// vì "3" là 1 chuỗi nên dấu + ở đây sẽ đc hiểu là để nối chuỗi
let result4 = "5" - 4;
// result = 1 
// vì "5" là 1 chuỗi nhưng kết hợp toán tử - sẽ đc Js chuyển đổi thành số
let result5 =  isNaN("123");
// result = false vì 123 là chuỗi nhưng đc chuyển đổi thành số
let result6 = isNaN("hello")
// result = true vì "hello" là 1 chuỗi nhưng không thể chuyển thành số hợp lệ 
let result7 = Number.isNaN("123");
// result = false vì Number.isNaN() trả về true khi giá trị truyền vào thực sự là NaN
// "123" là chuỗi và không phải là NaN
let result8 = Number.isNaN(NaN);
// Number.isNaN(NaN) kiểm tra giá trị có phải NaN thực sự hay không
// NaN chính là NaN nên kết quả là true