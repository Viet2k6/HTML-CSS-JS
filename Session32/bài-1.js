let btn = document.getElementById("btn");
let div = document.getElementById("container");
btn.onclick = function () {
  let random = Math.round(Math.random() * 10);
  randomColor(random);
};
function randomColor(num) {
  switch (num) {
    case 0:
      div.style.backgroundColor = "red";
      break;
    case 1:
      div.style.backgroundColor = "blue";
      break;
    case 2:
      div.style.backgroundColor = "green";
      break;
    case 3:
      div.style.backgroundColor = "yellow";
      break;
    case 4:
        div.style.backgroundColor = 'black'
      break;
    case 5:
        div.style.backgroundColor = 'pink'
      break;
    case 6:
      div.style.backgroundColor = "orange";
      break;
    case 7:
      div.style.backgroundColor = "purple";
      break;
    case 8:
      div.style.backgroundColor = "gray";
      break;
    case 9:
      div.style.backgroundColor = "brown";
      break;
    case 10:
        div.style.backgroundColor = 'cyan'
      break;
  }
}