let a = +prompt("Mời nhập số a:");
let b = +prompt("Mời nhập số b:");
let c = +prompt("Mời nhập số c:");

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Phương trình không hợp lệ!");
} else if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            alert("Phương trình có vô số nghiệm");
        } else {
            alert("Phương trình vô nghiệm");
        }
    } else {
        let x = -c / b;
        alert(`Phương trình bậc nhất có nghiệm: x = ${x}`);
    }
} else {
    let delta = b * b - 4 * a * c;
    let x = -b / (2 * a);
    if (delta < 0) {
        alert("Phương trình vô nghiệm");
    } else if (delta === 0) {
        alert(`Phương trình có nghiệm kép:\n x1 = x2 = ${x}`);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`Phương trình có 2 nghiệm phân biệt:\n x1 = ${x1} và x2 = ${x2}`);
    }
}



    