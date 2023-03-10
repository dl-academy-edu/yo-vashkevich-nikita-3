// console.log(window);
const filterForm = document.forms.filterForm;

//проверяем наличие поикового запроса в нашем URL
if (location.search) { 
	//сощздадим обхект для будущих параметров 
	const params = {};

	//создадим массив строк параметров ["fvfv=sfvvf"], [sfvfv=sfvv]
	const arrayStringParams = location.search.substring(1).split('&');

	//Перебор массива который создали выше 
	for  (let stringParam of arrayStringParams) {
		const param = stringParam.split('='); //создаем массив параметров с ключем и значением
		const nameParam = param[0]; //Получаем имя параметра
		const valueParam = param[1]; //Получаем значение парамантра ( значение)
		//Выполняем проверку на то что если мя параметра уже существует в оъекте парметром тогда добавляй масив в значение параметра, инче создаай свойство внутри объекта праметров, создай в нем масив положи в него значение параметра {phoneId: Array(2), howShow: Array(1)}
		if (nameParam in params) {
			params[nameParam].push(valueParam);
		} else {
			params[nameParam] = [valueParam];
		}
	}

	const updateInput = (gInputs, typeParam) => {
		for (let input of gInputs) {
			const param = params[typeParam];
			for (let partParam of param) {
				if (partParam === input.value) {
					input.checked = true;
				}
			}
		}
	}

	updateInput(filterForm.modelPhone, 'phoneId');
	updateInput(filterForm.howShow, 'howShow');
}


filterForm.addEventListener('submit', (e) => {
	e.preventDefault();
	
	let arrayCheckedInput = []; //массив выбранных пунктов для филтрации

	const addCheckedInput = (nameGroupInput, typeParam) => {
		for (let input of nameGroupInput) {
			if (input.checked) {
				arrayCheckedInput.push(`${typeParam}=${input.value}`);
			}
		}
	}

	addCheckedInput(e.target.modelPhone, 'phoneId');
	addCheckedInput(e.target.howShow, 'howShow');

	// console.log(arrayCheckedInput);

	let stringCheckedInput = '';

	for([index, activeInput] of arrayCheckedInput.entries()) {

		stringCheckedInput += activeInput;

		if (index != arrayCheckedInput.length - 1) {
			stringCheckedInput += '&';
		}
	}

	const baseUrl = `${location.origin}${location.pathname}`;
	const newUrl = baseUrl + `?${stringCheckedInput}`;
	location = newUrl;
})