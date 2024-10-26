console.log("hello world")

const scrollButton = document.getElementById('scroll__button')

const intensive = document.querySelector('.intensive')

const toTopButton = document.querySelector('.to__top__button')

const promo = document.querySelector('.promo')


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



scrollButton.addEventListener('click', (e) => onClick(e, intensive))

toTopButton.addEventListener('click', (e) => onClick(e, promo))