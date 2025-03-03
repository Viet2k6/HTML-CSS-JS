let a = +prompt("Nhập số a:");
let b = +prompt("Nhập số b:");
let c = +prompt("Nhập số c:");
let delta = b * b - 4 * a * c;
let x = -b / (2 * a)
if (a === 0) {
    alert("Không phải phương trình bậc 2");
} else {
    if (delta < 0) {
        alert("Phương trình vô nghiệm");
    } else if (delta === 0) {
        alert(`Phương trình có nghiệm kép x1 = x2 = ${x}`);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}; x2 = ${x2}`);
    }
}

