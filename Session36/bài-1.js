let formElement = document.querySelector('#add-name');
let nameInputElement = document.querySelector('#name-input');
nameInputElement.value = localStorage.getItem('name') || '';
let btnSaveNameElement = document.querySelector('#btn-save-name');
let sayNameElement = document.querySelector('#say-name');
let btnRenameElement = document.querySelector('#btn-rename');
let name = document.querySelector('#say-name h1');

sayName();

btnSaveNameElement.addEventListener('click', function(event){
    event.preventDefault();
    sayName(nameInputElement.value);
})

function sayName(){
    if(nameInputElement.value === ''){
        formElement.style.display = 'flex';
        sayNameElement.style.display = 'none';
        return;
    }
        sayNameElement.style.display = 'flex';
        formElement.style.display = 'none';
        name.textContent = `👋 Chào bạn, ${nameInputElement.value}`
        localStorage.setItem('name', nameInputElement.value);
}

btnRenameElement.addEventListener('click', function(){
    nameInputElement.value = '';
    localStorage.setItem('name', nameInputElement.value);
    sayName();
})