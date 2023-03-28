(function() {
	// const BASE_SERVER_PATH = 'http://academy.directlinedev.com';
	const BASE_SERVER_PATH = 'https://academy.directlinedev.com';

	const profileImg = document.querySelector('.j-profile-img');
	const profileName = document.querySelector('.j-profile-name');
	const profileSurname = document.querySelector('.j-profile-surname');
	const profileEmail = document.querySelector('.j-profile-email');
	const profileLocation = document.querySelector('.j-profile-location');
	const profileAge = document.querySelector('.j-profile-age');
	const buttonOpeningModal = document.querySelector('.btn-change-data-js');

	//const buttonOpeningModal
	const modalEditing = document.querySelector('.j-modal-editing');
	const modalLoader = document.querySelector('.loader-js');

	const editingForm = modalEditing.querySelector('.form');

	let profile = null;

	getProfile();//получаем данные с бэка 

	modalEditing.addEventListener('submit', changeData);
	buttonOpeningModal.addEventListener('click', () => {
		editingForm.mail.value = profile.email;
		editingForm.name.value = profile.name;
		editingForm.surname.value = profile.surname;
		editingForm.location.value = profile.location
		editingForm.age.value = profile.age;
	})

	//loader
	function showLoader() {
		modalLoader.classList.remove('hidden');
	}
	function hideLoader() {
		modalLoader.classList.add('hidden');
	}
	//

	function getProfile() {
		showLoader();
		sendRequest({
			method: 'GET',
			url: `/api/users/${localStorage.getItem('userId')}`,
		})
		.then(res => res.json())
		.then(res => {
			if (res.success) {
				profile = res.data;
				//отрисовка профиля 
				renderProfile();
				location.pathname = '/profile.html';
			} else {
				location = '/';
			}
		})
		.finally(() => {
			hideLoader();
		})
	}

	function renderProfile() {
		profileImg.src = `${BASE_SERVER_PATH + profile.photoUrl}`;
		//
		// profileImg.style.backgroundImage=`url(${BASE_SERVER_PATH + profile.photoUrl})`; //если див 
		profileName.innerText = profile.name;
		profileSurname.innerText = profile.surname;
		profileEmail.innerText = profile.email;
		profileLocation.innerText = profile.location;
		profileAge.innerText = profile.age;
	}

	function changeData(e) {
		e.preventDefault();
		showLoader();

		const data = new FormData(editingForm);
		sendRequest({
			method: 'PUT',
			url: '/api/users',
			body: data,
			headers: {
				'x-access-token': localStorage.getItem('token'),
			}
		})
		.then(res => {
			if (res.status === 401 || res.status === 403) {
				localStorage.removeItem('token');
				localStorage.removeItem('userId');
				location.pathname = '/';
				return;
			}
			return res.json();
		})
		.then(res => {
			if(res.success) {
				profile = res.data;
				renderProfile();
				location.pathname = '/profile.html';
			} else {
				throw res;
			}
		})
		.catch(err => {
			if(err._message) {
				alert(err._message);
			}
			clearErrors(editingForm);
			// errorFormHandler(err.errors, editingForm);
		})
		.finally(() => {
			hideLoader();
		})
	}
})();