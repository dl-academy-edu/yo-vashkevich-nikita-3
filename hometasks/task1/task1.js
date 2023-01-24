//1. Создадим 8 переменных с разными типами данных

let age = 1; //1
let biggy = 2332432423534342353465435n; //2332432423534342353465435
let index = '123'; //string "123"
let carIsDrive = false || true; //true
let password = null ; //null 
let empty; //undefined
let object = {}; //Пустой объект без свойств
let id = Symbol('id'); //Создаём символ id с именем "id"

//Проверим соответсвие типам данных с помощью оператора typeof
console.log('age: ', typeof age); //number
console.log('biggy: ' + typeof biggy); //bigint
console.log('index: ' + typeof index); //string
console.log('carIsDrive: ' + typeof carIsDrive); //boolean
console.log('password: ' + typeof password); //Возвращает значение 'object'
console.log('empty: ' + typeof empty); //undefined
console.log('object: ' + typeof object); //object
console.log('id: ' + typeof id); //symbol

//2. Приведем каждую из переменных к 3 типам: Number, String, Boolean
console.log('\n');

console.log(Number(age), String(age), Boolean(age)); //1 //'1' //true
console.log(Number(biggy), String(biggy), Boolean(biggy)); //2.3324324235343424e+24 //'2332432423534342353465435' //true
console.log(Number(index), String(index), Boolean(index)); //123 //'123' //true
console.log(Number(carIsDrive), String(carIsDrive), Boolean(carIsDrive)); //1 //'true' //true
console.log(Number(password), String(password), Boolean(password)); //0 //'null' //false
console.log(Number(empty), String(empty), Boolean(empty)); //NaN //'undefined' //false
console.log(Number(object), String(object), Boolean(object)); //NaN //'[object Object]' //true
console.log(String(id), Boolean(id)); //если приводить символ к числу выдает ошибку //Symbol(FirstSymbol) //true