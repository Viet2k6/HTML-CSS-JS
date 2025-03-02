let edge1 = +prompt("Mời nhập cạnh thứ nhất: ");
let edge2 = +prompt("Mời nhập cạnh thứ hai: ");
let edge3 = +prompt("Mời nhập cạnh thứ ba: ");

if (isNaN(edge1) || isNaN(edge2) || isNaN(edge3) || edge1 <= 0 || edge2 <= 0 || edge3 <= 0) {
  alert("Cạnh tam giác không hợp lệ.");
}
else if (edge1 + edge2 > edge3 && edge1 + edge3 > edge2 && edge2 + edge3 > edge1) {
  if (edge1 === edge2 && edge2 === edge3) {
    alert("Đây là tam giác đều");
  } else if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3) {
    alert("Đây là tam giác cân");
  } else if (
    edge1 * edge1 + edge2 * edge2 === edge3 * edge3 ||
    edge1 * edge1 + edge3 * edge3 === edge2 * edge2 ||
    edge2 * edge2 + edge3 * edge3 === edge1 * edge1
  ) {
    alert("Đây là tam giác vuông");
  } else {
    alert("Đây là tam giác thường");
  }
} else {
    alert("Ba cạnh không tạo được thành tam giác hợp lệ");
  }