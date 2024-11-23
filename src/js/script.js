const scrollButton = document.getElementById('scroll__button'),
    intensive = document.querySelector('.intensive'),
    toTopButton = document.querySelector('.to__top__button'),
    promo = document.querySelector('.promo'),
    btn = document.querySelector('.btn'),
    modal = document.querySelector('.modal'),
    closeModalButton = document.querySelector('.close'),
    adBanner = document.querySelector('.ad-banner'),
    adBannerClose = adBanner.querySelector('.ad-banner__close')


function onClick(event, targetTeg) {

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

function closeAd() {
    adBanner.style.display = 'none'
}


scrollButton.addEventListener('click', (e) => onClick(e, intensive))

toTopButton.addEventListener('click', (e) => onClick(e, promo))

btn.addEventListener('click',openModal)

closeModalButton.addEventListener('click',closeModal)

modal.addEventListener('click', (e) => closeModal(e))

adBannerClose.addEventListener('click', closeAd)