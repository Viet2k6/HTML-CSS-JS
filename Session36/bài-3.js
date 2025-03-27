let savedColor = JSON.parse(localStorage.getItem("savedColor"));
let body = document.getElementsByTagName("body")[0];

document.querySelectorAll(".btn").forEach((btn) => {
  btn.onclick = function () {
    let color = this.getAttribute("id");
    changeColor(color);
    localStorage.setItem("savedColor", JSON.stringify(color));
  };
});

if (savedColor) {
  changeColor(savedColor);
}

function changeColor(color) {
  body.style.backgroundColor = color;
}
