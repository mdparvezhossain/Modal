const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open_modal');
const closeModal = document.querySelector('.close');
const cancelModal = document.querySelector('.cancel');
// const submitlModal = document.querySelector('.submit');

openModal.addEventListener('click', () => {
    modal.classList.add('open')
});


function removeModal() {
    modal.classList.remove('open')
}
closeModal.addEventListener('click', removeModal);
cancelModal.addEventListener('click', removeModal);

window.addEventListener('keyup',(e) => {
    if(e.key === 'Escape') {
        removeModal();
    }
});

window.addEventListener('click',(e) => {
    console.log(e.target);
    if(e.target === modal) {
        removeModal();
    }
});



// submitlModal.addEventListener('click', () => {
//     modal.classList.add('open')
// });