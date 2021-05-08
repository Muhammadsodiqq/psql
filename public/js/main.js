alert("salom")

let elModalOpen = document.querySelector('.modal-open');
let elModal = document.querySelector('.modal')
let elModalClose = document.querySelector('.modal-close')
let elModalTitle = document.querySelector('.modal-title')


let keyUps = function(evt){
    if(evt.keyCode === 27){
        modalClose();
    }
}


let modalClose  = function(){
    elModalTitle.classList.remove('modal-animation')
    elModalTitle.classList.add('close-animation')
    setTimeout(function(){
        elModal.classList.remove('modal-show');
    }, 1000)
}

let ElModalWindow = function(evt){
    if(evt.target.matches('.modal')){
        modalClose()
    }
}

elModalOpen.addEventListener('click', function(){
    elModal.classList.add('modal-show')
    elModalTitle.classList.add('modal-animation')
    document.addEventListener('keyup', keyUps)
    elModal.addEventListener('click', ElModalWindow);
    elModalTitle.classList.remove('close-animation')
    
    elModalClose.addEventListener('click', modalClose);
})