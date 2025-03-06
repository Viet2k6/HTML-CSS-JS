let arrInt = [3, 9, 7, 4, 1, 8, 6, 2, 5, 7];
for (let i = 0; i < arrInt.length - 1; i++) {  
    for (let j = i + 1; j < arrInt.length; j++) {  
        if (arrInt[i] > arrInt[j]) {  
            let temp = arrInt[i];  
            arrInt[i] = arrInt[j];  
            arrInt[j] = temp;  
        }  
    }  
}
let result = "Mảng sau khi sắp xếp: ";
for (let i = 0; i < arrInt.length; i++) {
    result += arrInt[i] + " ";
}
console.log(result);