let math = +prompt("Nhập điểm môn Toán: ");
let literature= +prompt("Nhập điểm môn Văn: ");
let eng= +prompt("Nhập điểm môn Anh");

let average =(math + literature + eng) / 3;

if (average >= 8) {
    alert("Học lực giỏi");
} else if (average >= 6.5 && average < 8) {
    alert("Học lực khá");
} else if (average >= 5 && average < 6.5) {
    alert("Học lực trung bình");
} else {
    alert("Học lực yếu");
}