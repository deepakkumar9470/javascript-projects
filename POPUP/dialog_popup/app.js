console.log('popup')


const popupModal = document.querySelector('#popmodal')

const backDrop = document.querySelector('.back_drop')


backDrop.addEventListener('click', function(){
    popupModal.style.display = none;
})