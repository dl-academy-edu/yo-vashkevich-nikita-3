// const button = document.querySelector('button');

// const fetchDL = () => {
// 	return new Promise((resolve, reject) => {
// 		console.log('Start');

// 		setTimeout(() => {
// 			reject('Error');
// 		}, 3000)

// 		button.addEventListener('click', () => {
// 			resolve({
// 				name: 'Vladimir Putin',
// 				age: 70,
// 			});
// 		})
// 	})
// }

// fetchDL()
// .then((response) => {
// 	console.log('Промис отработал удачно');
// 	console.log(response);
// })
// .catch((err) => {
// 	console.log('Промис завершился ошибкой');
// 	console.log('error');
// })



const button = document.querySelector('button');

function json(jsonString) {
	return new Promise((resolve, reject) => {
		if(typeof jsonString === "string" ) {
			resolve(JSON.parse(jsonString));
		} else {
			reject('В функцию json() была передана не строка');
		}
	})
}

const fetchDL = () => {
	return new Promise((resolve, reject) => {
		console.log('Start');

		setTimeout(() => {
			reject('Error');
		}, 3000)

		button.addEventListener('click', () => {
			resolve({
				status: 200,
				jsonData: JSON.stringify({
					name: 'Vladimir Putin',
					age: 70,
				}),
			});
		})
	})
}

fetchDL()
.then((response) => {
	console.log('Первый промис отработал удачно');
	if(response.status === 200) {
		return json(response.jsonData);
	}
})
.then((response) => {
	console.log('Второй промис отработал удачно');
	console.log(response);
})
.catch((err) => {
	console.log('Промис завершился ошибкой');
	console.log('error');
})











