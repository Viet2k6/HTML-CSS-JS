let textInput = document.getElementById("textInput");
let charCount = document.getElementById("charCount");
let btn = document.getElementById("btn");
function countCharacters() {
  charCount.innerText = textInput.value.length + " ký tự";
}
btn.onclick = countCharacters; 