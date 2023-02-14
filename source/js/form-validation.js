//SIGN IN


	const form  = document.forms.signIn;
	// console.log(form);

	const email = form.elements.mail;
	// console.log(email);

	const emailError = document.querySelector('#mail + span.error');
	// console.log(emailError);

	const emailReg = /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i;

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		email.setAttribute('required', 'required');



		email.addEventListener('input', (e) => {
			let valueEmail = email.value; //переменная которая хранит введенные в интпут данные и меняется в записимости от них
			console.log('valueEmail :', '\''+valueEmail+'\'');

			// function validateEmail() {
			// 	console.log(emailReg.test(valueEmail));
			// 	return emailReg.test(valueEmail);
			// }
			// validateEmail(valueEmail);
			let validEmail = emailReg.test(valueEmail);
			console.log(validEmail);

			if (email.validity.valid) {
				// Если на момент валидации какое-то сообщение об ошибке уже отображается, или если поле валидно, удаляем сообщение
				emailError.textContent = ''; // Сбросить содержимое сообщения
				emailError.className = ''; // Сбросить визуальное состояние сообщения
				noError();
			} else {
				// Если поле не валидно, показываем правильную ошибку
				showError();
			}
		})

		showError();



		function showError() {
			if(email.validity.valueMissing) { // Если поле пустое,отображаем следующее сообщение об ошибке
			emailError.className = 'error active';
			emailError.textContent = 'This field is required';
			} else if(email.validity.typeMismatch) { // Если поле содержит не email-адрес, отображаем следующее сообщение об ошибке
			emailError.textContent = 'Please enter a valid email address (your entry is not in the format \"somebody@example.com\")';
			} 
			// Задаём соответствующую стилизацию
			// emailError.className = 'error active';
		}

		// function noError() {
		// 	emailError.className = 'no-error';
		// 	emailError.textContent = 'All right';
		// }

	})


function isEmailCorrect(email) {
	return email.match(/^[0-9a-z-.]+@[0-9a-z-]{2,}.[a-z]{2,}$/i);
}