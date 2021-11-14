const link = document.querySelector('.navigation-link--favourites'),
	  popup = document.querySelector('.popup'),
	  modalBtn = document.querySelector('.button-nav'),
	  modal = document.querySelector('.modal-container'),
	  closeBtn = document.querySelector('.modal-close-button');

link.addEventListener('click', function(e) {
	e.preventDefault();
	popup.classList.toggle('popup-open');
});

modalBtn.addEventListener('click', function(e) {
	e.preventDefault()
	modal.classList.add('modal-container-open');
});

closeBtn.addEventListener('click', function() {
	modal.classList.remove('modal-container-open');
});