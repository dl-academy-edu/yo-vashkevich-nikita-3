(function() {
	//получаем ссылки на наши элементы
	const btnScroll = document.querySelector('.btn-scroll-js'); //кнопка-стрелка для скролла
	const modalSignIn = document.querySelector('.modal-sign-in-js'); //модальное окно
	const btnOpenSignIn = document.querySelector('.btn-open-sign-js'); //ссылка в навигации Sign in
	const btnCloseSignIn = document.querySelector('.btn-close-js'); //кнопка-крестик

	//проверка наличия элементов в вёрстке
	if (!btnScroll || !modalSignIn || !btnOpenSignIn || !btnCloseSignIn) return;

	//вешаем слушатель события которое связано с кнопкой скролла
	window.addEventListener('scroll', (e) => {
		//создаем переменную которая хранит значение расстояния от верха страницы
		const screenTop = window.scrollY;
		console.log(screenTop);
		
		//если высота больше 1500px то выполняем функцию которая показывает кнопку, если меньше то скрываем кнопку
		if(screenTop >= 1500) {
			visuallyBtn();
		} else {
			notVisuallyBtn();
		}

		btnScroll.addEventListener('click', scrollUp);
		window.addEventListener('keydown', signInEsc);
	})

	//функция отображающая кнопку
	function visuallyBtn() {
		btnScroll.classList.remove('none-js');
	}
	//функция скрывающая кнопку
	function notVisuallyBtn() {
		btnScroll.classList.add('none-js');
	}

	//функция скролла 
	function scrollUp() {
		console.log('scrollUp');
		closeModal()
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	btnOpenSignIn.addEventListener('click', signInOpen);
	btnCloseSignIn.addEventListener('click', signInClose);
	document.addEventListener('keydown', signInClose);
		//функция открытия модального окна
	function signInOpen() {
		modalSignIn.classList.remove('none-js');
	}
	//функция закрытия модального окна
	function signInClose() {
		modalSignIn.classList.add('none-js');
	}
	//функция закрытия модального окна по кнопке esc
	function signInEsc() {
		if('keyCode' === 27) {
			signInClose();
		}
	}




	//удаляем слушатели событий
	function closeModal() {
		btnScroll.removeEventListener('click', scrollUp);
	}
})();








	// signInBtnClose.addEventListener('keydown', signInEsc);






