function findMax() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let num = +prompt("Mời nhập số: ");
        if (isNaN(num)) {
            alert("Dữ liệu không hợp lệ");
            i--; 
        } else {
            arr.push(num);
        }
    }
    let max = arr[0]; 
    let maxIndex = 0;

    arr.forEach((element, index) => {
        if (element > max) {
            max = element;
            maxIndex = index;
        }
    });
    return [`Max: ${max}`, `Position: ${maxIndex}`]; 
}
let filteredArr = findMax();
console.log(filteredArr);