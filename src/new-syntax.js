// Ключевые слова let и const - видны внутри блока кода{}, а var внутри всей функции
let name = 'Jenny';
name = 'Jane';

const pi = 3.14;

const names = ['John', 'Georg'];
names.push('Alex');
// names = [] - ошибка

const person = {
    name: 'Anna',
    age: 45
};
person.name = 'Sam';
// person = 'Agata' - ошибка;

// Стрелочные функции
function square(x){
    return x*x;
}

const sq = (x) => x*x;
console.log(sq(3));

const arr = ['1', '3', '2', '4'];
const result = arr
    .map((item) => parseInt(item))
    .filter((item) => item%2)
    .reduce((max, item) => Math.max(max, item), 0);
console.log(result);

// Если несколько строк
const sqTwo = (x) => {
    x += 2;
    return x*x;
};

// Параметры по умолчанию
function example(count=10, start=0){
    console.log(`count till ${count} and start from ${start}`);
}
example();

// Rest parameter - когда неизвестно сколько у нас будет аргументов
function max(){
    // псевдо-массив
    var numbers = Array.prototype.slice.call(arguments);
}

// сколько бы чисел мы не передали - они все сгруппируются в массив numbers
function maxNewSyntax(...numbers){
    console.log(numbers);
}
maxNewSyntax(2, 4, 89);
maxNewSyntax(1);
maxNewSyntax(); // пустой массив

// Rest parameter - должен идти последним в функции и должен быть только один
function maxNewSyntaxFunny(a, b, ...numbers){
    console.log(numbers);
}
maxNewSyntaxFunny(1, 2,3); // в массив попадёт только 3

// Spread operator - превращает массив в список аргументов для функции
const array = [1, 2, 3, 0];
const maxNumber = Math.max(...array);
console.log(maxNumber);

const array1 = [14, 24, 3, 0];
const array2 = [1, 200, 3, 0];
const maxNumberFromArrays = Math.max(...array1, 56, ...array2);
console.log(maxNumberFromArrays);

// можем скопировать массив или массивы
const shallowCopy = [...array1, ...array2];
console.log(shallowCopy)
