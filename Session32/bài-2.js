let btn = document.getElementById('btn')
let para = document.getElementById('count')
let count = 0
btn.onclick = function (){
    count ++
    para.textContent = `Số lần bấm: ${count}`
}