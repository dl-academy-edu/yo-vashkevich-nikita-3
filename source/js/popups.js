//MODAL WINDOWS
//Sign In
//Сделал открытие по кнопке с таким же классом в бургере
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
	}
	//функция закрытия модального окна
	function signInClose() {
		modalSignIn.classList.add('display-none-js');
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
	}
	//функция закрытия модального окна
	function modalRegisterClose() {
		modalRegister.classList.add('display-none-js');
	}
	//функция закрытия модального окна по кнопке esc
	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape") {
			modalRegisterClose(); 
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
	}

	function modalMessageClose() {
		modalSendMessage.classList.add('display-none-js');
	}
	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape") {
			modalMessageClose(); 
		}
	});

})();