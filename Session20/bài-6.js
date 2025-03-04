let num = +prompt(`Nhập số cần kiểm tra`)
if (isNaN(num)){
    alert(`Số nhập vào không hợp lệ`)
}else{
    let check = true
    for(let i = 2; i < num ; i++){
        if(num%i==0){
            check = false
        }
    }
    if(check){
        alert(`${num} là số nguyên tố`)
    }else{
        alert(`${num} không phải là số nguyên tố`)
    }
}