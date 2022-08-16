const likeButtons = document.querySelectorAll('.like-icon');


likeButtons.forEach((elem) => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('like-icon_active');
    })
})