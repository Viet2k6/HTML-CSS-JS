let amount = +prompt("Nhập số tiền muốn gủiq")
let month = +prompt("Nhập số tháng muốn gửi")
let rate = month * (4.3/12)
let rateAmount = Math.round(amount* (rate/100))
rateAmount = rateAmount.toLocaleString()
alert(` Số tiền lãi sau ${month} tháng là: ${rateAmount} VNĐ`)