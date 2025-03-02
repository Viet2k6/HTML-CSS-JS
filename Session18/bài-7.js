let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
let operator = prompt("Mời nhập phép tính (+,-,*,/)");
let result=0;
switch (operator){
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    if(num2===0){
        alert(`Một số không chia được hết cho 0`)
    }else{
        result = a / b;
    }
    break;
  default:
    alert(`Phép tính không hợp lệ`)
}
if( result !== 0){
    alert(`Kết quả phép tính: ${a} ${operator} ${b} = ${result}`)
}