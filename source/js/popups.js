//MODAL WINDOWS
// function interactionModal(modal) {
// 	modal.classList.toggle('display-none-js');
// }
//Sign In
(function() {
	const modalSignIn = document.querySelector('.modal-sign-in-js'); //модальное окно Sign In
	const buttonsCollection = [...document.querySelectorAll('.btn-open-sign-js')]; //коллекция с кнопками у которых еть такой класс
	const btnOpenSignIn = buttonsCollection[0]; //кнопка-ссылка открытия модального окна на странице
	const btnOpenSignInTwo = buttonsCollection[1]; //кнопка-ссылка открытия модального окна в бургере
	const btnCloseSignIn = document.querySelector('.btn-close-sign-js'); //кнопка-крестик закрытия модального окна Sign in

	if (!modalSignIn || !btnOpenSignIn || !btnOpenSignInTwo || !btnCloseSignIn) return;

	btnOpenSignIn.addEventListener('click', signInOpen);
	btnOpenSignInTwo.addEventListener('click', signInOpen);
	btnCloseSignIn.addEventListener('click', signInClose);
	

	function signInOpen() {
		modalSignIn.classList.remove('display-none-js');
		noScroll();
	}
	//функция закрытия модального окна
	function signInClose() {
		modalSignIn.classList.add('display-none-js');
		returnScroll();
	}


	//ESC
	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape") {
			signInClose(); 
		}
	});
	
})();


//Register
(function() {
	const modalRegister = document.querySelector('.modal-register-js');
	const btnCollection = [...document.querySelectorAll('.btn-open-register-js')];
	const btnOpenRegister = btnCollection[0];
	const btnOpenRegisterTwo = btnCollection[1];
	const btnCloseRegister = document.querySelector('.btn-close-register-js');

	if (!modalRegister || !btnOpenRegister || !btnOpenRegisterTwo || !btnCloseRegister) return;

	btnOpenRegister.addEventListener('click', modalRegisterOpen);
	btnOpenRegisterTwo.addEventListener('click', modalRegisterOpen);
	btnCloseRegister.addEventListener('click', modalRegisterClose);
		//функция открытия модального окна
	function modalRegisterOpen() {
		modalRegister.classList.remove('display-none-js');
		noScroll();
	}
	//функция закрытия модального окна
	function modalRegisterClose() {
		modalRegister.classList.add('display-none-js');
		returnScroll();
		clearErrors(registerForm);
	}
	//функция закрытия модального окна по кнопке esc
	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape") {
			modalRegisterClose(); 
			clearErrors(registerForm);
		}
	});
})();

//Send Message
(function() {
	const modalSendMessage = document.querySelector('.modal-message-js'); 
	const btnOpenSendMessage = document.querySelector('.btn-open-message-js'); 
	const btnCloseSendMessage = document.querySelector('.btn-close-message-js');

	if (!modalSendMessage || !btnOpenSendMessage || !btnCloseSendMessage) return;

	btnOpenSendMessage.addEventListener('click', modalMessageOpen);
	btnCloseSendMessage.addEventListener('click', modalMessageClose);

	function modalMessageOpen() {
		modalSendMessage.classList.remove('display-none-js');
		noScroll();
	}

	function modalMessageClose() {
		modalSendMessage.classList.add('display-none-js');
		returnScroll();
	}
	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape") {
			modalMessageClose(); 
		}
	});

})();



//POPUPS IN PROFILE
//Change password
(function() {
	const modalChangePassword = document.querySelector('.modal-change-password-js'); 
	const btnOpen = document.querySelector('.btn-change-password-js'); 
	const btnClose = document.querySelector('.btn-close-js');

	if (!modalChangePassword || !btnOpen || !btnClose) return;

	btnOpen.addEventListener('click', modalOpen);
	btnClose.addEventListener('click', modalClose);

	function modalOpen() {
		modalChangePassword.classList.remove('display-none-js');
		noScroll();
	}

	function modalClose() {
		modalChangePassword.classList.add('display-none-js');
		returnScroll();
	}
	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape") {
			modalClose(); 
			returnScroll();
		}
	});

})();


//Change other data
(function() {
	const modalChangeData = document.querySelector('.modal-edit-data-js'); 
	const btnOpen = document.querySelector('.btn-change-data-js'); 
	const btnClose = document.querySelector('.btn-close-data-js');

	if (!modalChangeData || !btnOpen || !btnClose) return;

	btnOpen.addEventListener('click', modalOpen);
	btnClose.addEventListener('click', modalClose);

	function modalOpen() {
		modalChangeData.classList.remove('display-none-js');
		noScroll();
	}

	function modalClose() {
		modalChangeData.classList.add('display-none-js');
		returnScroll();
	}
	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape") {
			modalClose(); 
			returnScroll();
		}
	});

})();




const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
const body = document.body;

//функция запрещающая скролить при открытом модальном окне
function noScroll() {
	body.style.height = '100vh';
	body.style.overflowY = 'hidden';
	window.addEventListener('scroll', () => {
		document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
	});
}

//функция разрещающая скролить при закрытии модального окна
function returnScroll() {
	body.style.position = '';
	body.style.top = '';
	body.style.height = '';
	body.style.overflowY = '';
	window.scrollTo(0, parseInt(scrollY || '0') * -1);
}