//Menu Burger
(function() {
	const menuBurger = document.querySelector('.burger-wrapper'); 
	const btnBurgerOpen = document.querySelector('.burger__button-open');
	const btnBurgerClose = document.querySelector('.btn-close-burger-js');

	if (!menuBurger || !btnBurgerOpen || !btnBurgerClose) return;

	btnBurgerOpen.addEventListener('click', burgerOpen);
	btnBurgerClose.addEventListener('click', burgerClose);

	function burgerOpen() {
		menuBurger.classList.remove('burger-not-visible');
		noScroll();
	}

	function burgerClose() {
		menuBurger.classList.add('burger-not-visible');
		returnScroll();
	}
})();