let num = +prompt("Mời nhập số") 
if(isNaN(num) || num < 0){
    alert(`Số nhập vào không hợp lệ`)
}else{
let sum = 0
for(let i = 1; i<= num; i++){
sum = sum + Number(i) 
}
alert(`Tổng các số nguyên từ ${num} là ${sum}`)
}




