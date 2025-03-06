let arr = prompt("Mời nhập dãy số bất kỳ:");

if (isNaN(arr) || arr === "") {  
    alert("Dãy không hợp lệ");  
} else {  
    let arr2 = arr.split("").reverse().join("");  
    alert(`Dãy số sau khi đảo ngược là: ${arr2}`);  
}