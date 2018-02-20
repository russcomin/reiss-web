let menu = document.getElementById('menu'),
	close = document.getElementById('close'),
	modal = document.getElementById('menu-modal');

	let closeModal = () => {
		modal.style.transition = "4s";
		modal.style.top = "-20000px";
	}

	let openModal = () => {
		modal.style.transition = ".7s";
		modal.style.top = "0px";
	}

	menu.addEventListener('click', openModal);
	close.addEventListener('click', closeModal);