let money = +prompt("Mời nhập số tiền:");
let month = +prompt("Mời nhập số tháng:");
let interest = +prompt("Mời nhập lãi suất (% tháng):");

if (isNaN(money) || isNaN(month) || isNaN(interest) || money <= 0 || month <= 0 || interest < 0) {
    alert("Dữ liệu không hợp lệ!");
} else {
    let initialMoney = money; 
    interest = interest / 100; 
    for (let i = 0; i < month; i++) {
        money += money * interest; 
    }
    let totalInterest = money - initialMoney; 
    alert("Lãi: " + totalInterest.toFixed(3));
    alert("Tổng tiền sau " + month + " tháng: " + money.toFixed(3));
}