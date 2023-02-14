

(function() { //анонимная самовызывающаяся функция 
	//работа с формой входа

	const form = document.forms.signIn; //найдена форма

	if(!form) return;

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		// const secondForm = document.forms[0];
		const userEmail = form.elements.email;
		console.log(userEmail);
		const userPassword = form.elements.password;

		const data = {
			email: userEmail.value,
			password: userPassword.value,
		};

		console.log(data);
	})

})();

function getAll(form) {
	const inputs = form.querySelectorAll('input');
	const textareas = form.querySelectorAll('textarea');
	let result = {}; //обект под результат

	for (let input of inputs) {
		switch (input.type) {
			case 'radio': {
				if(input.checked) {
					result[input.name] = input.value;//создаем ключ в резалт по инпут нейм и кладем значение нашего инпута  
				}
				break;
			}
			case 'checkbox': {
				if(!result[input.name]) result[input.name] = [];
				if(input.checked) result[input.name].push(input.value);
				break;
			}
			case 'file': {
				result[input.name] = input.files;
				break;
			}
			default: {
				result[input.name] = input.value;
			}
		}
	}


	//вместо of in для объектов 
	for(let textarea of textareas) {
		result[textarea.name] = textarea.value;
	}

	return result;
}

function isEmailCorrect(email) {
	return email.match(/^[0-9a-z-.]+@[0-9a-z-]{2,}.[a-z]{2,}$/i);
}

function setError(input, messageError) {
	if(input[0]) {
		//функция при интерабельными лементами

	} else {
		setErrorText(input, messageError);
	}
	//aeyrwbz ghb hf,jnt c j,sxysvb [ktvtynfvb]
}

function setErrorText(input, messageError) {
	//создать элемент ошщиьки 
	const error = errorCreator(messageError);
	input.classList.add('is-invalid');
	input.insertAdjacentElement('afterend', error);
	input.addEventListener('input', () => {
		error.remove();
		input.classList.remove('is-invalid');
	}, {once: true});
}

function errorCreator(message) {
	let messageError = document.createElement('div');
	messageError.classList.add('invalid-feedback');
	messageError.innerText = message;
	return messageError;
}




//работа с формой регистрации
(function() {
	const form = document.forms.signUp;

	form.addEventListener('submit', (e) => {
		e.preventDefault(); //ломаем стандартное повдеение событий 


		// console.log(getAll(form));
		const userData = getAll(form);
		let errors = {}; //объект под ошибки

		//проверка условий
		if(!userData.accepnt) errors.accepnt = 'GJ;fkqcnf выберите пункт';
		if(!isEmailCorrect(userData.email)) errors.email = 'Пожалуйста введите корректный емейл';
		//проверка пароля 
		if(!userData.password.length < 6) errors.password = 'Пароль слишком короткий';


		if(Object.keys(errors).length) {
			Object.keys(errors).forEach((key) => {
				//первый аргумент инпут, второй текст ошибки
				setError(form.elements[key], errors[key]);
				//создать ошибку

				//определить куда ее поставить
				//вставить в верстку
			})
			return;
		}




		const data = {
			email: userData.email,
			password: userData.password,
			name: userData.name,
			accepnt: userData.accepnt,
			avatar: userData.avatar,
		};
		console.log(data);
	})
})();




//хес реквайред