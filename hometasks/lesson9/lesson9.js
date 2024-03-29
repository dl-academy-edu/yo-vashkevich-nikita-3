const SERVER_URL = 'http://academy.directlinedev.com';
const mainLoader = document.querySelector('.main-loader_js');

let loaderCount = 0; //счетчик активных лоадеров 
// функция отрисовки лоадера
const showLoader = () => {
	loaderCount++;
	mainLoader.classList.remove('hidden');
}
//функция скрывающая лоадер
const hideLoader = () => {
	loaderCount--;
	if(loaderCount <= 0) {
		mainLoader.classList.add('hidden');
		loaderCount = 0;
	}
}
const POSTS_LIMIT = 9;

(function() {
	const form = document.forms.filter;
	form.addEventListener('submit', e => {
		e.preventDefault();
		let data = {
			page: 0,
		};
		data.name = form.elements.name.value;
		// Теги как элемент верстки. [Node, node, node]
		data.tags = [...form.elements.tags]
		.filter(checkbox => checkbox.checked)
		.map(checkbox => checkbox.value);
		// Теги как их значения. [0, 2, 3]
		data.sortBy = ([...form.elements.sortBy]
		.find(radio => radio.checked) || {value: null}).value;
		getData(data);
		setSearchParams(data);
	});

	let xhr = new XMLHttpRequest();
	xhr.open('GET', SERVER_URL + '/api/tags');
	xhr.send();
	showLoader();
	xhr.onload = () => {
		const tags = JSON.parse(xhr.response).data;
		const tagsBox = document.querySelector('.select-of-box_js');
		tags.forEach(tag => {
			const tagHTML = createTag(tag);
			tagsBox.insertAdjacentHTML('beforeend', tagHTML);
		})
		const params = getParamsFromLocation();
		setDataToFilter(params);
		getData(params);
		hideLoader();
	};
})();

function getData(params) {
	const resultContainer = document.querySelector('.result_js');
	let xhr = new XMLHttpRequest();
	let searchParams = new URLSearchParams();
	searchParams.set('v', '1.0.0');

	if (params.tags && Array.isArray(params.tags) && params.tags.length) {
		searchParams.set('tags', JSON.stringify(params.tags));
	}

	let filter = {};

	if (params.name) {
		filter.title = params.name;
	}

	searchParams.set('filter', JSON.stringify(filter));

	searchParams.set('limit', POSTS_LIMIT);// было закоменчено

	if(+params.page) {
		searchParams.set('offset', (+params.page) * POSTS_LIMIT);
	}

	if(params.sortBy) {
		searchParams.set('sort', JSON.stringify([params.sortBy, 'DESC']));
	}

	xhr.open('GET', SERVER_URL + '/api/posts?' + searchParams.toString());
	// console.log(SERVER_URL + '/api/posts?' + searchParams.toString());
	xhr.send();
	showLoader();
	resultContainer.innerHTML = '';
	const linksContainer = document.querySelector('.pagination_js');
	linksContainer.innerHTML = '';
	xhr.onload = () => {
		const response = JSON.parse(xhr.response); // было const response = JSON.parse(xhr.response).data;
		let dataPosts = '';
		response.data.forEach(post => {       //было 	response.forEach(post => {
			dataPosts += cardCreate({
				title: post.title,
				text: post.text,
				src: post.photo.desktopPhotoUrl,
				tags: post.tags,
			});
		})
		resultContainer.innerHTML = dataPosts;

		const pageCount = Math.ceil(response.count / POSTS_LIMIT); //было 	const pageCount = Math.ceil(response.length / POSTS_LIMIT);
		for (let i = 0; i < pageCount; i++) {
			const link = linkElementCreate(i);
			linksContainer.insertAdjacentElement('beforeend', link);
			linksContainer.insertAdjacentHTML('beforeend', '<br>');
		}
		hideLoader();
	}
}

function getParamsFromLocation() {
	let searchParams = new URLSearchParams(location.search);
	return {
		name: searchParams.get('name') || '',
		tags: searchParams.getAll('tags'),
		sortBy: searchParams.get('sortBy'),
		page: +searchParams.get('page') || 0,
	};
}

function setDataToFilter(data) {
	const form = document.forms.filter;
	form.elements.name.value = data.name;
	form.elements.tags.forEach(checkbox => {
		checkbox.checked = data.tags.includes(checkbox.value);
	});
	form.elements.sortBy.forEach(radio => {
		radio.checked = data.sortBy === radio.value;
	});
}

//
function setSearchParams(data) {
	let searchParams = new URLSearchParams();
	searchParams.set('name', data.name);
	data.tags.forEach(item => {// tag - item
		searchParams.append('tags', item);// tag - item
	});
	//

	if(data.page) {
		searchParams.set('page', data.page);
	} else {
		searchParams.set('page', 0);
	}
	if(data.sortBy) {
		searchParams.set('sortBy', data.sortBy);
	}
	history.replaceState(null,document.title, '?' + searchParams.toString());
}

function linkElementCreate(page) {
	const link = document.createElement('a');
	link.href = '?page=' + page;
	link.innerText = 'Page number' + (page + 1);
	link.classList.add('link_js');

	let params = getParamsFromLocation();
	if (page === +params.page) {
		//класс цифры активной страницы 
		link.classList.add('active');
	}

	link.addEventListener('click', (e) => {
		e.preventDefault();
		const links = document.querySelectorAll('.link_js');
		let searchParams = new URLSearchParams(location.search);
		let params = getParamsFromLocation();
		links[params.page].classList.remove('active');
		searchParams.set('page', page);
		links[page].classList.add('active');
		history.replaceState(null, document.title, '?' + searchParams.toString());
		getData(getParamsFromLocation());
	});
	return link;
}

function cardCreate({title, text, src, tags}) {
	return `
	<div class="col-4 mb-3">
		<div class="card">
			<img src="${SERVER_URL}${src}" class="card-img-top" alt="${title}">
			<div class="card-body">
				<h5 class="card-title">${title}</h5>
				<p class="card-text"></p>${text}</p>
				${tags.map(tag => `<span style="color: ${tag.color}">${tag.name}</span>`).join('<br>')}
			</div>
		</div>
	</div>
	`
}

function createTag({id, name, color}) {
	return `
	<div class="form-group form-check">
		<input name="tags" type="checkbox" class="form-check-input" id="tags-${id}" value="${id}">
		<label style="color: ${color}" class="form-check-label" for="tags-${id}">${name}</label>
	</div>
	`
}