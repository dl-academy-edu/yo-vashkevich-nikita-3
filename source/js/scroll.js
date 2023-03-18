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
		// console.log('scrollUp');
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

