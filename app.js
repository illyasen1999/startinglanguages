// Get modal
let modal = document.getElementById("simpleModal")
// Get open modal button
let modalBtn = document.getElementById ("modal-button")
// close button
let closeBtn = document.getElementById('closedBtn')
// open modal
modalBtn.addEventListener('click', openModal)
// close modal
closeBtn.addEventListener('click', closeModal)
// outside click
window.addEventListener('click', clickOutside)

function openModal(){
   modal.style.display = "block"
}

function closeModal(){
   modal.style.display = "none"
}
// close outside the window
function clickOutside(e){
   if(e.target == modal){
      modal.style.display = "none"
   }
}