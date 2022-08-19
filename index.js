const likeButtons = document.querySelectorAll('.like-icon');
const openModalBtn = document.querySelector('.ready-button');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-modal');


likeButtons.forEach((elem) => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('like-icon_active');
    })
})




openModalBtn.addEventListener('click', () => {
    popup.classList.add('popup_open');
    
} );

closeBtn.addEventListener('click', () => {
    popup.classList.remove('popup_open');
})