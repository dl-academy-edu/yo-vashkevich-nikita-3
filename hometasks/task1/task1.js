//1. Создадим 8 переменных с разными типами данных

let userAge = 1; //1
let userCryptoWallet = 2332432423534342353465435n; //2332432423534342353465435
let userIndex = '123'; //string "123"
let isCarDrive = false || true; //true
let userPassword = null ; //null 
let color; //undefined
let skillTeacher = {}; //Пустой объект без свойств
let id = Symbol('id'); //Создаём символ id с именем "id"

//Проверим соответсвие типам данных с помощью оператора typeof
console.log('userAge: ', typeof userAge); //number
console.log('userCryptoWallet: ' + typeof userCryptoWallet); //bigint
console.log('userIndex: ' + typeof userIndex); //string
console.log('isCarDrive: ' + typeof isCarDrive); //boolean
console.log('userPassword: ' + typeof userPassword); //Возвращает значение 'object'
console.log('color: ' + typeof color); //undefined
console.log('object: ' + typeof object); //object
console.log('id: ' + typeof id); //symbol

//2. Приведем каждую из переменных к 3 типам: Number, String, Boolean
console.log('\n');

console.log(Number(userAge), String(userAge), Boolean(userAge)); //1 //'1' //true
console.log(Number(userCryptoWallet), String(userCryptoWallet), Boolean(userCryptoWallet)); //2.3324324235343424e+24 //'2332432423534342353465435' //true
console.log(Number(userIndex), String(userIndex), Boolean(userIndex)); //123 //'123' //true
console.log(Number(isCarDrive), String(isCarDrive), Boolean(isCarDrive)); //1 //'true' //true
console.log(Number(userPassword), String(userPassword), Boolean(userPassword)); //0 //'null' //false
console.log(Number(color), String(color), Boolean(color)); //NaN //'undefined' //false
console.log(Number(skillTeacher), String(skillTeacher), Boolean(skillTeacher)); //NaN //'[object Object]' //true
console.log(Number(id), String(id), Boolean(id)); //если приводить символ к числу выдает ошибку //Number(FirstSymbol) //true