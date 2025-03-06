let numbers =[2,5,7,4,1,8,6]
while(1){
    let found = false
    let guess = +prompt(`Mời nhập số: `)
    for(let i = 0; i < numbers.length;i++){
        if(guess === numbers[i]){
            found = true
        }   
    }
    if(found){
        alert(`Bingo`)
    }else{
        alert(`Chúc bạn may mắn lần sau`)
    }
}