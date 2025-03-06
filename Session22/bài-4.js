let arr = prompt("Mời nhập dãy số bất kỳ:");
if (arr.length === 0 || isNaN(arr)) {
  alert("Dãy không hợp lệ");
} else {
  let max = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) { 
      max = arr[i];
    }
  }
  alert(`${max} là số lớn nhất trong dãy`);
}
