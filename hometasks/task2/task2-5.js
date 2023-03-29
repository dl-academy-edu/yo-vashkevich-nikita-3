//5
//Написать игру “Угадай число”
//Для чёткого отслеживания происходящего добавил и alert и console.log

//Math.random - получаем число от 0 до 1 не включая 1
//Затем умножаем на 10 и приплюсовываем 1 чтобы с помощью метода Math.floor - округлении вниз, получить целое число
//таким образом получаем целое число от 1 до 10 - включая 10

console.log('\nИгра \“Угадай число\”');

let rand = Math.floor(1 + Math.random() * 10);
console.log(rand);
let userAnswer = prompt('Угадай число от 1 до 10', 1);
userAnswer = +userAnswer;
if (userAnswer === rand) {
	console.log('Верно!!! Вы победили!!!');
	alert('Верно!!! Вы победили!!!');
} else {
	while (userAnswer != rand) {
		alert('Ответ неверный!!!');
		userAnswer = prompt('Попробуй еще раз!', 1);
	}
	console.log('Верно!!! Вы победили!!!');
	alert('Верно!!! Вы победили!!!');
}

//цикл работает пока ответ пользователя не совпадает с сгенерированным числом, как только пользователь введет правильный ответ - цикл прервется