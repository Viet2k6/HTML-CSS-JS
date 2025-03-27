const listDish = [
    {
        name: 'Bún bò huế',
        image: 'https://satrafoods.com.vn/uploads/Images/mon-ngon-moi-ngay/bun-bo-hue.jpg',
        countLike: 0,
    },
    {
        name: 'Phở bò Hà Nội',
        image: 'https://mia.vn/media/uploads/blog-du-lich/top-19-quan-pho-ha-noi-ngon-nuc-tieng-an-la-ghien-phan-1-06-1639125006.jpg',
        countLike: 0,
    },
    {
        name: 'Cơm tấm Sài Gòn',
        image: 'https://cafefcdn.com/203337114487263232/2022/12/7/photo-9-1670398141900764774990.jpg',
        countLike: 0,
    }
];

const listDishLocal = JSON.parse(localStorage.getItem('listDishLocal')) || [];
const dishContainerElement = document.querySelector('.dish-container'); 

function renderLishDish(listDish){
    const dishContainerHtmls = listDish.map((item, index) => {
        return `<div class="dish-item">
                <img class="dish-image" src="${item.image}" alt="">
                <div class="dish-infor">
                    <h2 class="dish-name">${item.name}</h2>
                    <div class="dish-like">${item.countLike} lượt thích</div>
                    <button class="btn-like-dish" onclick = "increaseLike(${index})">Thích +1</button>
                </div>
            </div>`
    })
    dishContainerElement.innerHTML = dishContainerHtmls.join('');
    localStorage.setItem('listDishLocal', JSON.stringify(listDishLocal));
}

if(listDishLocal.length === 0){
    renderLishDish(listDish);
}
else{
    renderLishDish(listDishLocal);
}

const countLikeElement = document.querySelector('.btn-like-dish');

function increaseLike(index){
    listDish[index].countLike += 1;
    listDishLocal.splice(0, listDishLocal.length, ...listDish);
    renderLishDish(listDishLocal);
}