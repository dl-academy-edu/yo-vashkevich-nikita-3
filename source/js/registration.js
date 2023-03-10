// const buttonOpeningModalRegister = document.querySelector('.btn-open-register-js');
// console.log(buttonOpeningModalRegister);
const modalRegister = document.querySelector('.modal-register-js');
// console.log(modalRegister);
const buttonCloseModalRegister = document.querySelector('.btn-close-register-js');
// console.log(buttonCloseModalRegister);
const loaders = document.querySelectorAll('.loader-js');
// console.log(loaderRegister);
const registerForm = document.forms.Register;
// console.log(registerForm);
const linkToProfile = document.querySelector('.j-to-profile');

function register(e) {
	e.preventDefault();
	showLoader();
	let data = {};
	data.email = registerForm.mail.value;
	data.name = registerForm.name.value;
	data.surname = registerForm.surname.value;
	data.password = registerForm.password.value;
	data.passwordRepeat = registerForm.passwordRepeat.value;
	data.location = registerForm.location.value;
	data.age = +registerForm.age.value;
	// data.checkbox = registerForm.checkbox.value;

	sendRequest({
		method: 'POST',
		url: '/api/users',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
	.then(res => res.json())
	.then(res => {
		if (res.success) {
			message = 'Form has been sent successfully';
			notifyMessage.style.color='#03BC3C';
			setTimeout(hideLoader, 1000);
			setTimeout(showNotifyModal, 1000);
			// setTimeout(interactionModal(modalRegister), 5000);
		} else {
			throw res;
		}
	})
	.catch((err) => {
		// clearErrors(registerForm);
		message = 'The form was sent but the server transmits an error: “The form was sent but the server transmits an error”';
		notifyMessage.style.color='#EB3617';
		// errorFormHandler(err.errors, registerForm);
	})
	.finally(() => {
		setTimeout(hideLoader, 1000);
		setTimeout(showNotifyModal, 1000);
		setTimeout(hideNotifyModal, 3000);
	})
}

// buttonOpeningModalRegister.addEventListener('click', () => {
// 	interactionModal(modalRegister);
// })
buttonCloseModalRegister.addEventListener('click', () => {
	registerForm.mail.value = '';
	registerForm.name.value = '';
	registerForm.surname.value = '';
	registerForm.password.value = '';
	registerForm.passwordRepeat.value = '';
	registerForm.location.value = '';
	registerForm.age.value = '';
	// data.checkbox = registerForm.checkbox.value = '';
	clearErrors(registerForm);
})

registerForm.addEventListener('submit', register); 




//loader
function showLoader() {
	loaders[0].classList.remove('hidden');
}
function hideLoader() {
	loaders[0].classList.add('hidden');
}
//


//сообщения об отправке формы дял формы регистрации
const notifyModal = modalRegister.querySelector('.message-modal-js');
const buttonCloseNotifyModal = document.querySelector('.btn-close-notify-modal-js');
const notifyMessage = notifyModal.querySelector('.message');
let message = ''; //текст уведомления
// console.log(notifyMessage);

function showNotifyModal() {
	notifyModal.classList.remove('display-none-js');
	notifyMessage.insertAdjacentText('beforeend', message);
}
function hideNotifyModal() {
	notifyModal.classList.add('display-none-js');
	notifyMessage.innerHTML = "";
}

buttonCloseNotifyModal.addEventListener('click', () => {
	hideNotifyModal();
});




