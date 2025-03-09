let arr=[]
let count = 0
for(let i=0;i<10;i++){
    let input = +prompt(`Mời nhập vào phần tử:`)
    arr.push(input)
    if(arr[i] >= 10){
        console.log(arr[i])
        count++
    }
}
if(count===0){
    console.log(`Không có phần tử nào lớn hơn hoặc bằng 10`)
}