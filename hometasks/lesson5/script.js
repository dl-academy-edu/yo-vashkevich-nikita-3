(function() {
		//получаем ссылку на наше контекстное меню
	const contextMenu = document.querySelector('.contextmenu_js');
	const contextMenuBtn = document.querySelector('.contextmenu__button_js');


	//проверка наличия контекстного меню и кнопки в верстке
	if(!contextMenu || !contextMenuBtn) return;

	//вешаем слушатель события которе связано с контекстынм менгю
	window.addEventListener('contextmenu', (e) => {
		e.preventDefault();// ломаем стандартное поведение браузера 


		console.log(e);
		contextMenu.style.top = `${e.clientY}px`;
		contextMenu.style.left = `${e.clientX}px`;

		contextMenu.classList.remove('contextmenu_hidden');

		window.addEventListener('scroll', scrollHandler);
		window.addEventListener('click', clickHandler);
		window.addEventListener('keydown', escHandler);

		contextMenuBtn.addEventListener('click', contextBtnHandler);
	})

	function contextBtnHandler() {
		// closeMenu();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	function scrollHandler(e) {
		console.log('scrollHandler');
		closeMenu();
	}

	function clickHandler(e) {
		console.log('clickHandler');
		if(!contextMenu.contains(e.target)) 
		closeMenu();
	}

	function escHandler(e) {
		console.log('escHandler');
		if(e.keyCode === 27) {
			closeMenu();
		}
	}


	function closeMenu() {
		window.removeEventListener('scroll', scrollHandler);
		window.removeEventListener('click', clickHandler);
		window.removeEventListener('keydown', escHandler);
		contextMenu.classList.add('contextmenu_hidden');
		contextMenuBtn.removeEventListener('click', contextBtnHandler);
	}
})();