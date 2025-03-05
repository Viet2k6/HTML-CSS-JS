console.log("Các số Armstrong có 3 chữ số:");
for (let i = 100; i < 1000; i++) {
    let str = String(i); 
    let sum = Math.pow(Number(str[0]), 3) + Math.pow(Number(str[1]), 3) + Math.pow(Number(str[2]), 3);
    if (sum === i) {
       console.log(i);
    }
}