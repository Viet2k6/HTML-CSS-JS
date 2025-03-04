let a = +prompt(`Nhập số a`)
let b = +prompt(`Nhập số b`)
let result = a
if (isNaN(a) || isNaN(b)){
    alert(`Số nhập vào không hợp lệ`)
}else{
    for(let i = 1 ; i < b; i++ ){
        result *= a
    }
    alert(`${result}`)
}