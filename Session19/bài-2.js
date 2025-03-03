let char = prompt("Nhập một ký tự:");

if (char.length === 1 && ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))) {
    alert("ký tự " + char + " là chữ cái");
} else {
    alert("không phải chữ cái");
}