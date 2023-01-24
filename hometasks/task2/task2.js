//№1
//Создать программу, которая запрашивает у пользователя число, в консоль выводит числа от 1 до до этого числа, но пропускает числа, которые кратны (делятся без остатка) 4-м.

//Предполагаю 2 варианта решения
// Вариант рещения 1 - в случае если мы введем число - получим резултат согласно ТЗ, в случае если введем НЕ число, а символ или буквы - получим сообщение об ошибке, в этом варианте проверка происходит сразу

console.log('Задача 1');
let userNumber = prompt('Введите число от 1', 0); 
let i = 0;
if (userNumber > 0) { 
	while (i < userNumber) {
		i++;
		if (i % 4 === 0) {
			continue;
		} else if (i % 4 !== 0) {
			console.log(i);
		}
	}
} else {
	alert('Ошибка! Некорректные данные!');
	console.log('Ошибка! Некорректные данные!');
}

//Так как нужно вывести числа от 1 сразу прибавим к i + 1
//Если число кратно 4 то continue прерывает текущую итерацию и начинает следующую
//Если число НЕ кратно 4 (а это все остальные случаи когда мы введем ЧИСЛО) - выводим на экран i
//Если введем бузквы или символы как раз и сработает else и скажет что у нас ошибка


//Вариант решения второй, так как 4 задача - это и есть проверка 1-3 задач на правильность введенных данных, оставлю здесь решение без условий

console.log('\nЗадача 1 вариант 2');
let enterNumber = prompt('Введите число от 1', 0); 
let iter = 0;
	while (iter < enterNumber) {
		iter++;
		if (iter % 4 === 0) {
			continue;
		} else if (iter % 4 !== 0) {
			console.log(iter);
		}
	}


//2
//Написать программу, которая будет получать число и с помощью цикла while считать его факториал.

console.log('\nЗадача 2');
let usNumber = prompt('Введите число', 0);
let count = usNumber - 1; //чтобы каждый раз умнодать число на себя же но - 1, от этого же и будет зависеть количество итераций
while (count > 0) {
	usNumber = usNumber * count;
	count--;
}
console.log(usNumber);



// 3 
//Написать программу, которая будет получать число и его степень, с помощью цикла for возвести число в степень.

console.log('\nЗадача 3');
let number = prompt('Введите число', 1);
let degree = prompt('Введите степень', 1);
let result = 1;
for (let i = 0; i < degree; i++) { //счетчик итераций равен 1, цикл работает пока счетчик итераций меньше чем степень в которую нужно возвести число, каждую итерацию прибавляем к счетчику + 1
	// console.log(result = result * number); //так можем отследить что происходит но закомментировав следующую строку
	result = result * number;
}
console.log(`${number} в ${degree} степени = ${result}`);

//4
//Написать проверку, для программ 1-3, чтобы если пользователь вводил неверные данные, например слово вместо числа, то должно вывестись сообщение об ошибке.
console.log('\nПроверка задач');

//проверка 1 задачи
if (userNumber > 0) {
	console.log('ЗАДАЧА1: Ошибок нет :)')
} else if (userNumber == 0) {
	console.log('ЗАДАЧА1: Ошибка! Введен 0');
} else if (userNumber < 0) {
	console.log('ЗАДАЧА1: Ошибка! Введено число меньше 0');
} else {
	console.log('ЗАДАЧА1: Ошибка! Введены неверные данные!');
}
//проверка задачи 1_2
if (enterNumber > 0) {
	console.log('ЗАДАЧА 1_2: Ошибок нет :)')
} else {
	console.log('ЗАДАЧА1_2: Ошибка! Введены неверные данные!');
}

//проверка 2 задачи
if (usNumber > 0) {
	console.log('ЗАДАЧА 2: Ошибок нет :)')
} else {
	console.log('ЗАДАЧА2: Ошибка! Введены неверные данные!');
}

//проверка 3 задачи
if (number > 0 || number == 0 || number < 0) {
	console.log('ЗАДАЧА 3: Ошибок нет :)')
} else {
	console.log('ЗАДАЧА3: Ошибка! Введены неверные данные!');
}





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
console.log(userAnswer);
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


