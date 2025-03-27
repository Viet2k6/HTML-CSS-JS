document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.stars');
    const selectedRatingText = document.getElementById('selected-rating'); 
    const commentInput = document.getElementById('comment-input'); 
    const commentList = document.getElementById('comment-list'); 
    let selectedRating = 0; 

    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    function saveReviews() {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    function renderReviews() {
        commentList.innerHTML = ''; 
        reviews.forEach(review => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${'★'.repeat(review.rating)}</span>
                <b>${review.comment}</b>
            `;
            commentList.appendChild(li);
        });
    }

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-value')); 
            selectedRatingText.textContent = `Bạn đã đánh giá ${selectedRating} sao.`;

            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= selectedRating) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
        });
    });

    submitReview = function () {
        const comment = commentInput.value.trim();
        if (selectedRating === 0) {
            alert('Vui lòng chọn số sao để đánh giá');
            return;
        }
        if (comment === '') {
            alert('Vui lòng nhập nội dung bình luận');
            return;
        }

        reviews.push({ rating: selectedRating, comment });
        saveReviews(); 
        renderReviews(); 
   
        selectedRating = 0;
        selectedRatingText.textContent = 'Bạn chưa đánh giá';
        commentInput.value = '';
        stars.forEach(s => s.classList.remove('selected'));
    };

    renderReviews();
});