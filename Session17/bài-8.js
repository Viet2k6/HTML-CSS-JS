let d1 = prompt("Mời nhập ngày thứ nhất: ")
let d2 = prompt("Mời nhập ngày thứ hai: ")
const date1 = new Date(d1)
const date2 = new Date(d2)
const time = Math.abs(date2 - date1);
const date3 = time/86400000
alert(`Độ chênh lệch giữa 2 ngày là: ${date3}`)