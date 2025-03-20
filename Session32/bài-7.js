let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');
let outside = document.getElementById('body');
let current = null;

function showImage(index, pic) {
    current = index;
    pic.classList.add('heightChange');
    [pic1, pic2, pic3].forEach(image => {
        if (image !== pic) image.style.display = 'none';
    });

    outside.classList.add('test');
}

pic1.onclick = () => showImage(1, pic1);
pic2.onclick = () => showImage(2, pic2);
pic3.onclick = () => showImage(3, pic3);

outside.onclick = function(event) {
    if (event.target.matches("img")) return;
    if (outside.classList.contains('test')) {
        if (current === 1) pic1.classList.remove('heightChange');
        else if (current === 2) pic2.classList.remove('heightChange');
        else if (current === 3) pic3.classList.remove('heightChange');

        pic1.style.display = 'block';
        pic2.style.display = 'block';
        pic3.style.display = 'block';

        outside.classList.remove('test');
    }
};
