(function() {
	//получаем ссылки на наши элементы
	const btnScroll = document.querySelector('.btn-scroll-js'); //кнопка-стрелка для скролла

	//проверка наличия элементов в вёрстке
	if (!btnScroll) return;

	//вешаем слушатель события которое связано с кнопкой скролла
	window.addEventListener('scroll', (e) => {
		// console.log(window.scrollY);
		
		//если высота больше 1500px то выполняем функцию которая показывает кнопку, если меньше то скрываем кнопку
		if(window.scrollY >= 1500) {
			visuallyBtn();
		} else {
			notVisuallyBtn();
		}

		btnScroll.addEventListener('click', scrollUp);
	})

	//функция отображающая кнопку
	function visuallyBtn() {
		btnScroll.classList.remove('display-none-js');
	}
	//функция скрывающая кнопку
	function notVisuallyBtn() {
		btnScroll.classList.add('display-none-js');
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


	//удаляем слушатели событий
	function closeModal() {
		btnScroll.removeEventListener('click', scrollUp);
	}
})();





//Menu Burger
(function() {
	const menuBurger = document.querySelector('.burger-wrapper'); //модальное окно Register
	const btnBurgerOpen = document.querySelector('.burger__button-open'); //кнопка открытия бургера
	const btnBurgerClose = document.querySelector('.btn-close-burger-js'); //кнопка-крестик закрытия бургера

	if (!menuBurger || !btnBurgerOpen || !btnBurgerClose) return;

	btnBurgerOpen.addEventListener('click', burgerOpen);
	btnBurgerClose.addEventListener('click', burgerClose);
		//функция открытия модального окна
	function burgerOpen() {
		menuBurger.classList.remove('burger-not-visible');
	}
	//функция закрытия модального окна
	function burgerClose() {
		menuBurger.classList.add('burger-not-visible');
	}
})();
























	// signInBtnClose.addEventListener('keydown', signInEsc);



	//валиация через атрибут реквайред 

	//novalidate

	




