let a = parseFloat(prompt("Nhập số a"));
let b = parseFloat(prompt("Nhập số b"));
let c = parseFloat(prompt("Nhập số c"));
let delta = b * b - 4 * a * c;
if (delta > 0) {  
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Nghiệm thứ nhất: " + x1);
    alert("Nghiệm thứ hai: " + x2);
} else if (delta === 0) {  
    let x = -b / (2 * a);  
    alert("Nghiệm kép: " + x);
} else {  
    alert("Phương trình không có nghiệm thực");  
}