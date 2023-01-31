//1

//проверка возраста
function ageVerification(userAge) {
	userAge = Number(prompt('Укажи возраст'));
	if (userAge >= 18) {
		alert('Доступ разрешен') 
	} else {
		ageVerification();
	}
}
ageVerification();


//2
//не имеет вывод на экран, http-методы
//с одинаковыми аргументами всегда возвращает одинаковое значение
//не пишет и не читает глобальные переменные (переменные, которые видны везде)
//не изменяет состояние приложения (ничего не выводит на экран)


function add(termOne,termTwo) {
	return termOne + termTwo;
}
// console.log(add(5,5));



function subtract(minuend,subtracted) {
	return minuend - subtracted;
}
// console.log(subtract(7,5));


function divide(divisible,divider) {
	return divisible / divider;
}
// console.log(divide(5,2));


function multiply(multiplierOne,multiplierTwo) {
	return multiplierOne * multiplierTwo;
}
// console.log(multiply(4,5));






















//Function Decloration
//Можно вызвать до ее  обхъявления 
// function getSum(numberOne, numberTwo) {
// 	return numberOne + numberTwo;
// }


// Function Expression
// const getEqual = function(numberOne, numberTwo) {
// 	return numberOne === numberTwo;
// }

//arrow function 
// const getMinus = (numberOne, numberTwo) => {
// 	return numberOne - numberTwo;
// }


// let age = prompt('enter number', 0);
// console.log(typeof age);




//legacy code




// 0 1 2 3



// setInterval(() => {
	
// }, interval);

// setTimeout(() => {
	
// }, timeout);