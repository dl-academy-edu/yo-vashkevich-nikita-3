//№1
//Создать программу, которая запрашивает у пользователя число, в консоль выводит числа от 1 до до этого числа, но пропускает числа, которые кратны (делятся без остатка) 4-м.

//Так как нужно вывести числа от 1 сразу прибавим к i + 1
//Если число кратно 4 то continue прерывает текущую итерацию и начинает следующую
//Если число НЕ кратно 4 (а это все остальные случаи когда мы введем ЧИСЛО) - выводим на экран i

console.log('Задача 1');
//
let enterNumber = prompt('Введите число от 1', 0); 
let i = 0;
while (i < +enterNumber) {
	i++;
	if (i % 4 === 0) {
		continue;
	}
	console.log(i);
}
switch (true) {
	case +enterNumber === 0:
		console.log('ЗАДАЧА1: Ошибка! Введен 0');
		break
	case +enterNumber < 0:
		console.log('ЗАДАЧА1: Ошибка! Введено отрицательное число');
		break
	case +enterNumber > 0:
		console.log('ЗАДАЧА1: Ошибок нет');
		break
	default:
	console.log('ЗАДАЧА1: Ошибка! Введено не число!');
	break
}