let value = document.getElementById("myInput").value;
console.log(value);

let btn = document.getElementById('btn');
let ol = document.getElementById('ol');

btn.onclick = function () {
    let value = document.getElementById("myInput").value; 
    if (value.length === 0) {
        alert("Tên môn học không được để trống!");
    } else {
        ol.innerHTML += `<li>${value}</li>`; 
        document.getElementById("myInput").value = ""; 
    }
};