let arr = [2, 4, 8, 1, 9];
function findMinValue(arr) {
  if (arr.length < 1) {
    alert(`Mảng chưa có phần tử`);
  } else {
    let min = arr[0]; 
    let count = 0
    for (let i = 1; i < arr.length; i++) {
    if(isNaN(arr[i])){
     return `Mảng không có phần tử hợp lệ`;
    }    
        if (arr[i] < min) {
            min = arr[i]; 
        }
    }
    if(count==arr.length){
        return `Mảng không có phần tử hợp lệ`;
    }else{
         return `Phần tử nhỏ nhất là ${min}`;
    }
}
}
let min = findMinValue(arr);
alert(min)
