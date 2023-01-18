//1. Создадим 8 переменных с разными типами данных

let num = 1; //1
let bigint = 2332432423534342353465435n; //2332432423534342353465435
let str = '123'; //string "123"
let carIsDrive = false || true; //true
let n = null ; //null 
let u; //undefined
let object = {}; //Пустой объект без свойств
let symbol = Symbol('FirstSymbol'); //Создаём символ symbol с именем "FirstSymbol"

//Проверим соответсвие типам данных с помощью оператора typeof
console.log('num: ', typeof num); //number
console.log('bigint: ' + typeof bigint); //bigint
console.log('str: ' + typeof str); //string
console.log('carIsDrive: ' + typeof carIsDrive); //boolean
console.log('n: ' + typeof n); //Возвращает значение 'object'
console.log('u: ' + typeof u); //undefined
console.log('object: ' + typeof object); //object
console.log('symbol: ' + typeof symbol); //symbol

//2. Приведем каждую из переменных к 3 типам: Number, String, Boolean
console.log('\n');

console.log(String(num), Boolean(num)); //'1' //true
console.log(Number(bigint), String(bigint), Boolean(bigint)); //2.3324324235343424e+24 //'2332432423534342353465435' //true
console.log(Number(str), Boolean(str)); //123 //true
console.log(Number(carIsDrive), String(carIsDrive), Boolean(carIsDrive)); //1 //'true' //true
console.log(Number(n), String(n), Boolean(n)); //0 //'null' //false
console.log(Number(u), String(u), Boolean(u)); //NaN //'undefined' //false
console.log(Number(object), String(object), Boolean(object)); //NaN //'[object Object]' //true
console.log(String(symbol), Boolean(symbol)); //если приводить символ к числу выдает ошибку //Symbol(FirstSymbol) //true