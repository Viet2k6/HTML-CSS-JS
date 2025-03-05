let even = 0;
let odd = 0;
for (let check = 0; check < 5; check++) {
    let num = +prompt("Mời nhập số:");
    
    if (num % 2 !== 0) {
        odd++;
    } else {
        even++;
    }
}
alert(`Có ${even} số chẵn và ${odd} số lẻ`);

