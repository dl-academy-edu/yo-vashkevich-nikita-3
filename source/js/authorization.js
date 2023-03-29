

//authorization
function rerenderLink() {
	const loginButtons = document.querySelectorAll('.btn-open-sign-js');
	// const loginButton = loginButtons[0];
	// console.log(loginButton);
	const registerButtons = document.querySelectorAll('.btn-open-register-js');
	// const registerButton = registerButtons[0];
	// console.log(registerButton);
	const toProfileLink = document.querySelector('.j-to-profile');
	const isLogin = localStorage.getItem('token');
	// console.log(isLogin);
	if(isLogin) {
		loginButtons[0].classList.add('hidden');
		loginButtons[1].classList.add('hidden');
		registerButtons[0].classList.add('hidden');
		registerButtons[1].classList.add('hidden');
		toProfileLink.classList.remove('hidden');
	} else {
		loginButtons[0].classList.remove('hidden');
		loginButtons[1].classList.remove('hidden');
		registerButtons[0].classList.remove('hidden');
		registerButtons[1].classList.remove('hidden');
		toProfileLink.classList.add('hidden');
	}

}

(function initLogin() {
	const buttonOpenLogin = document.querySelector('.btn-open-sign-js');
	const modalLogin = document.querySelector('.modal-sign-in-js');
	const buttonCloseLogin = document.querySelector('.btn-close-sign-js');
	const loginForm = document.forms.signIn;
	const linkToProfile = document.querySelector('.j-to-profile');

	function login(e) {
		e.preventDefault();
		showLoader();
		let data = {};
		data.email = loginForm.email.value;
		data.password = loginForm.password.value;

		sendRequest({
			method: 'POST',
			url: '/api/users/login',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then(res => {
			if(res.success) {
				// console.log('Вы успешно вошли!');
				console.log(res);
				localStorage.setItem('token', res.data.token);
				localStorage.setItem('userId', res.data.userId);
				rerenderLink();
				//
				message = 'Form has been sent successfully';
				notifyMess.style.color='#03BC3C';
				setTimeout(hideLoader, 1000);
				setTimeout(showNotifyLogin, 1000);
				//
				setTimeout(() => {
					location.pathname = '/profile.html'
				}, 2000);
			} else {
				throw res
			}
		})
		.catch(err => {
			if(err._message) {
				alert(err._message);
			}
			message = 'The form was sent but the server transmits an error: “The form was sent but the server transmits an error”';
			notifyMess.style.color='#EB3617';
			errorFormHandler(err.errors, loginForm);

		})
		.finally(() => {
			setTimeout(hideLoader, 1000);
			setTimeout(showNotifyLogin, 1000);
			setTimeout(hideNotifyLogin, 2000);
		})
		
	}

	loginForm.addEventListener('submit', login);

	buttonCloseLogin.addEventListener('click', () => {
		loginForm.email.value = '';
		loginForm.password.value = '';
		clearErrors(loginForm);
	})
})();



//сообщения об отправке формы дял формы логина
const modalLogin = document.querySelector('.modal-sign-in-js');
const notifyLogin = modalLogin.querySelector('.message-modal-js');
// console.log(notifyLogin);
const btnCloseNotifyLogin = modalLogin.querySelector('.btn-close-notify-modal-js');
const notifyMess = modalLogin.querySelector('.message');

function showNotifyLogin() {
	notifyLogin.classList.remove('display-none-js');
	notifyMess.insertAdjacentText('beforeend', message);
}
function hideNotifyLogin() {
	notifyLogin.classList.add('display-none-js');
	notifyMess.innerHTML = "";
}

btnCloseNotifyLogin.addEventListener('click', () => {
	hideNotifyLogin();
});









///////////////
