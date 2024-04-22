const burger = document.querySelector('.burger');
const modal = document.querySelector('.modal-background');
const links = document.querySelectorAll('.modal-links a');
const closeModal = document.querySelector('.close-modal');

burger.addEventListener('click', () => {
    modal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        modal.classList.remove('active');
    });
});