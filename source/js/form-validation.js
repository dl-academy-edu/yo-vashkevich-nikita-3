function setErrorChecked(inputs, errorMessage) {
	const error = errorCreator(errorMessage);
	inputs[0].parentElement.parentElement
	.insertAdjacentElement('afterend', error);
	function handler() {
		error.remove();
		for (let input of [...input]) {
			input.removeEventListener('input', handler);
			input.classList.remove('input-error');
		}
	}
	for(let input of [...inputs]) {
		input.classList.add('input-error');

		input.addEventListener('input', handler, {once: true});
	}
}

//ОШИБКИ
function setError(input, messageError) {
	if(input[0]) {
		setErrorChecked(input, messageError);
	} else {
		setErrorText(input, messageError);
	}
}

function setErrorText(input, errorMessage) {
	const error = errorCreator(errorMessage);
	input.classList.add('input-error');
	input.insertAdjacentElement('afterend', error);
	input.addEventListener('input', function() {
		error.remove();
		input.classList.remove('input-error');
	}, {once: true});
}

function errorCreator(message) {
	let messageError = document.createElement('div');
	// messageError.classList.add('invalid-feedback');
	messageError.classList.add('error-message');
	messageError.innerText = message;
	return messageError;
}
//
//УСПЕХ
function setSuccess(input, messageSuccess) {
	if(input[0]) {
		setSuccessText(input, messageSuccess);
	} else {
		setSuccessText(input, messageSuccess);
	}
}

function setSuccessText(input, messageSuccess) {
	const success = successCreator(messageSuccess);
	input.classList.add('input-success');
	input.insertAdjacentElement('afterend', success);
	input.addEventListener('input', () => {
		success.remove();
		input.classList.remove('input-success');
	}, {once: true});
}

function successCreator(message) {
	let messageSuccess = document.createElement('div');
	messageSuccess.classList.add('success-message');
	messageSuccess.innerText = message;
	return messageSuccess;
}
//
//УДАЛЕНИЕ ОШИБОК
function errorFormHandler(errors, form) {
	if(Object.keys(errors).length) {
		Object.keys(errors).forEach(key => {
			const messageError = errors[key];
			const input = form.element[key];
			setError(input, messageError);
		})
		return;
	}
}
function successFormHandler(successes, form) {
	if(Object.keys(successes).length) {
		Object.keys(successes).forEach(key => {
			const messageSuccess = success[key];
			const input = form.element[key];
			setSuccess(input, messageSuccess);
		})
		return;
	}
}

function clearErrors(element) {
	const messages = element.querySelectorAll('.error-message');
	const messageSuccesses = element.querySelectorAll('.success-message');
	const invalids = element.querySelectorAll('.input-error');
	const valids = element.querySelectorAll('.input-success');
	messages.forEach(message => message.remove());
	messageSuccesses.forEach(messageSuccess => messageSuccess.remove());
	invalids.forEach(invalid => invalid.classList.remove('input-error'));
	valids.forEach(valid => valid.classList.remove('input-success'));
}


//перебор инпутов
function getAll(form) {
	const inputs = form.querySelectorAll('input');
	const textareas = form.querySelectorAll('textarea');
	let result = {}; //обект под результат

	// for (let input of inputs) {
	// 	switch (input.type) {
	// 		case 'radio': {
	// 			if(input.checked) {
	// 				result[input.name] = input.value;//создаем ключ в резалт по инпут нейм и кладем значение нашего инпута  
	// 			}
	// 			break;
	// 		}
	// 		case 'checkbox': {
	// 			if(!result[input.name]) result[input.name] = [];
	// 			if(input.checked) result[input.name].push(input.value);
	// 			break;
	// 		}
	// 		case 'file': {
	// 			result[input.name] = input.files;
	// 			break;
	// 		}
	// 		default: {
	// 			result[input.name] = input.value;
	// 		}
	// 	}
	// }

	for (let input of inputs) {
		if (input.hasAttribute('required')) {
			result[input.name] = input.value;
		}
	}


	//проверка инпкутов на наличие атрибута required
	for(let textarea of textareas) {
		result[textarea.name] = textarea.value;
	}

	return result;
}


//функция проверка емейла регулярным выражением 
function isEmailCorrect(email) {
	return email.match(/^[0-9a-z-.]+@[0-9a-z-]{2,}.[a-z]{2,}$/i);
}

//функция проверка телефона регулярным выражением 
function isPhoneCorrect(phone) {
	return phone.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
}



//SIGN IN
(function() {
	const form = document.forms.signIn;

	if (!form) return;
	// console.log(signIn);

	form.addEventListener('submit', (e) => {
		e.preventDefault(); //ломаем стандартное повдеение событий 

		clearErrors(form);

		console.log(getAll(form));
		const userData = getAll(form);
		let errors = {}; //объект под ошибки
		let successes = {}; //объект под успешные уведомления

		//проверка условий
		if(userData.email === "") {
			errors.email = 'This field is required';
		} else if (!isEmailCorrect(userData.email)) {
			errors.email = 'Please enter a valid email address (your entry is not in the format "somebody@example.com")';
		};
		if (isEmailCorrect(userData.email)) successes.email = 'All right';

		//проверка пароля This field is required
		if(!userData.password.length) errors.password = 'This field is required';
		if(userData.password.length) successes.password= 'All right';

		if(Object.keys(errors).length) {
			console.log(errors);
			Object.keys(errors).forEach((key) => {
				//первый аргумент инпут, второй текст ошибки
				setError(form.elements[key], errors[key]);
				//создать ошибку

				//определить куда ее поставить
				//вставить в верстку
			})
			return;
		}
		//
		if(Object.keys(successes).length) {
			console.log(successes);
			Object.keys(successes).forEach((key) => {
				setSuccess(form.elements[key], successes[key]);
			})
			return;
		}
		const data = {
			email: userData.email,
			password: userData.password,
			// name: userData.name,
			// accepnt: userData.accepnt,
			// avatar: userData.avatar,
		};
		// console.log(data);

	})
})();

//REGISTRATION
(function() {
	const form = document.forms.Register;

	if (!form) return;
	// console.log(Register);

	form.addEventListener('submit', (e) => {
		e.preventDefault(); //ломаем стандартное повдеение событий 

		clearErrors(form);

		// console.log(getAll(form));
		const userData = getAll(form);
		console.log(userData);
		let errors = {}; //объект под ошибки
		let successes = {}; //объект под успешные уведомления

		//проверка условий
		// if(!userData.accepnt) errors.accepnt = 'GJ;fkqcnf выберите пункт';
		//email
		if(userData.mail === "") {
			errors.mail = 'This field is required';
		} else if (!isEmailCorrect(userData.mail)) {
			errors.mail = 'Please enter a valid ema il address (your entry is not in the format "somebody@example.com")';
		};
		if (isEmailCorrect(userData.mail)) successes.mail = 'All right';
		//name, surname
		if(userData.name === "") errors.name = 'This field is required';
		if(userData.name.length) successes.name= 'All right';
		if(!userData.surname.length) errors.surname = 'This field is required';
		if(userData.surname.length) successes.surname= 'All right';
		//проверка пароля
		if(!userData.password.length) errors.password = 'This field is required';
		if(userData.password.length) successes.password= 'All right';
		//повтор пароля
		if(!userData.passwordRepeat.length) errors.passwordRepeat = 'This field is required';
		if(userData.passwordRepeat === userData.password) successes.passwordRepeat= 'All right';
		if(userData.passwordRepeat !== userData.password && userData.passwordRepeat.length) errors.passwordRepeat= 'Password mismatch';
		//location, age
		if(!userData.location.length) errors.location = 'This field is required';
		if(userData.location.length) successes.location= 'All right';
		if(!userData.age.length) errors.age = 'This field is required';
		if(userData.age.length) successes.age= 'All right';

		if(Object.keys(errors).length) {
			console.log(errors);
			Object.keys(errors).forEach((key) => {
				//первый аргумент инпут, второй текст ошибки
				setError(form.elements[key], errors[key]);
				//создать ошибку

				//определить куда ее поставить
				//вставить в верстку
			})
			return;
		}

		//
		if(Object.keys(successes).length) {
			console.log(successes);
			Object.keys(successes).forEach((key) => {
				setSuccess(form.elements[key], successes[key]);
			})
			return;
		}




		const data = {
			email: userData.mail,
			name: userData.name,
			surname: userData.surname,
			password: userData.password,
			passwordRepeat: userData.passwordRepeat,
			location: userData.location,
			age: userData.age,
			// checkbox: userData.checkbox,
		};
		// console.log(data);

	})
})();


//SEND MESSAGE
(function() {
	const form = document.forms.formMessage;

	if (!form) return;
	// console.log(formMessage);

	form.addEventListener('submit', (e) => {
		e.preventDefault(); //ломаем стандартное повдеение событий 


		// console.log(getAll(form));
		const userData = getAll(form);
		console.log(userData);
		let errors = {}; //объект под ошибки
		let successes = {}; //объект под успешные уведомления

		//проверка условий
		// if(!userData.accepnt) errors.accepnt = 'GJ;fkqcnf выберите пункт';
		//name, subject
		if(userData.userName === "") errors.userName = 'This field is required';
		if(userData.userName.length) successes.userName= 'All right';
		if(!userData.subject.length) errors.subject = 'This field is required';
		if(userData.subject.length) successes.subject= 'All right';
		//email
		if(userData.userMail === "") {
			errors.userMail = 'This field is required';
		} else if (!isEmailCorrect(userData.userMail)) {
			errors.userMail = 'Please enter a valid ema il address (your entry is not in the format "somebody@example.com")';
		};
		if (isEmailCorrect(userData.userMail)) successes.userMail = 'All right';
		phone
		if(!userData.phone.length) {
			errors.phone = 'This field is required';
		} else if (!isPhoneCorrect(userData.phone)) {
			errors.phone = 'Incorrect phone number';
		};
		if (isPhoneCorrect(userData.phone)) successes.phone = 'All right';
		//message
		if(!userData.message.length) errors.message = 'Please enter your message';
		if(userData.message.length) successes.message= 'All right';

		if(Object.keys(errors).length) {
			console.log(errors);
			Object.keys(errors).forEach((key) => {
				//первый аргумент инпут, второй текст ошибки
				setError(form.elements[key], errors[key]);
				//создать ошибку

				//определить куда ее поставить
				//вставить в верстку
			})
			return;
		}

		//
		if(Object.keys(successes).length) {
			console.log(successes);
			Object.keys(successes).forEach((key) => {
				setSuccess(form.elements[key], successes[key]);
			})
			return;
		}




		const data = {
			userName: userData.userName,
			subject: userData.subject,
			email: userData.userMail,
			phone: userData.phone,
			message: userData.message,
			// checkbox: userData.checkbox,
		};
		// console.log(data);

	})
})();


//Change Password
(function() {
	const form = document.forms.changePassword;

	if (!form) return;
	// console.log(changePassword);

	form.addEventListener('submit', (e) => {
		e.preventDefault(); //ломаем стандартное повдеение событий 

		console.log(getAll(form));
		const userData = getAll(form);
		let errors = {}; //объект под ошибки
		let successes = {}; //объект под успешные уведомления

		//проверка условий
		if(userData.oldPassword === "") {
			errors.oldPassword = 'This field is required';
		} 
		if (userData.oldPassword.length) successes.oldPassword = 'All right';

		//проверка пароля This field is required
		if(!userData.newPassword.length) errors.newPassword = 'This field is required';
		if(!userData.newPasswordRepeat.length) errors.newPasswordRepeat = 'This field is required';
		//проверка идентичности паролей
		if(userData.newPassword !== userData.newPasswordRepeat) {
			errors.newPassword = 'Password mismatch';
			errors.newPasswordRepeat = 'Password mismatch';
		}
		if(userData.newPassword === userData.newPasswordRepeat) {
			successes.newPassword = 'All right';
			successes.newPasswordRepeat = 'All right';
		}

		if(Object.keys(errors).length) {
			console.log(errors);
			Object.keys(errors).forEach((key) => {
				//первый аргумент инпут, второй текст ошибки
				setError(form.elements[key], errors[key]);
				//создать ошибку

				//определить куда ее поставить
				//вставить в верстку
			})
			return;
		}
		if(Object.keys(successes).length) {
			console.log(successes);
			Object.keys(successes).forEach((key) => {
				setSuccess(form.elements[key], successes[key]);
			})
			return;
		}
		const data = {
			oldPassword: userData.oldPassword,
			newPassword: userData.newPassword,
			newPasswordRepeat: userData.newPasswordRepeat,
		};
		// console.log(data);

	})
})();

