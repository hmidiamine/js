const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click',() =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})
closeModalButtons.forEach(button => {
    button.addEventListener('click',() =>{
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if (container == null) return
    modal.classlist.add('active')
    overlay.classlist.add('active')
}
function closeModal(modal){
    if (modal == null) return
    modal.classlist.remove('active')
    overlay.classlist.remove('active')
} 

