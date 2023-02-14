//2
//Написать программу, которая будет получать число и с помощью цикла while считать его факториал.

let usNumber = prompt('Введите число', 0);
let count = +usNumber - 1; //чтобы каждый раз умнодать число на себя же но - 1, от этого же и будет зависеть количество итераций
while (count > 0) {
	usNumber = usNumber * count;
	count--;
}
console.log(usNumber);

switch (true) {
	case +usNumber > 0:
		console.log('ЗАДАЧА 2: Ошибок нет');
		break
	case +usNumber < 0:
		console.log('ЗАДАЧА 2:Факториал отрицательного числа не существует');
		break
	case +usNumber === 0:
		console.log('ЗАДАЧА 2:Факториал нуля равен 1');
	break
	default:
	console.log('ЗАДАЧА2: Ошибка! Введено не число!');
	break
}

//Вариант выполнения функцией
// function factorial(number) {
// 	if (number < 2) {
// 		return 1;
// 		} else {
// 		return number * factorial(number - 1);
// 	}
// }
// console.log(factorial(5));