console.log("hello world")

const scrollButton = document.getElementById('scroll__button')

const intensive = document.querySelector('.intensive')

const toTopButton = document.querySelector('.to__top__button')

const promo = document.querySelector('.promo')

const btn = document.querySelector('.btn')

const modal = document.querySelector('.modal')

const closeModalButton = document.querySelector('.close')




function onClick(event, targetTeg) {
	console.log(targetTeg)

	event.preventDefault();
	targetTeg.scrollIntoView({
		behavior: 'smooth',
	})
}

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        toTopButton.style.display = 'block'
    } else {
        toTopButton.style.display = 'none'
    }
})

function openModal() {
    modal.style.display = 'block'
}

function closeModal(event) {
    console.log(event.target)
    if (event.target === modal || event.target === closeModalButton) {
modal.style.display = 'none'
    } 
    
}


scrollButton.addEventListener('click', (e) => onClick(e, intensive))

toTopButton.addEventListener('click', (e) => onClick(e, promo))

btn.addEventListener('click',openModal)

closeModalButton.addEventListener('click',closeModal)

modal.addEventListener('click', (e) => closeModal(e))