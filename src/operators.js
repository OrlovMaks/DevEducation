// 1. Если а – четное посчитать а*б, иначе а+б
function calk(a,b) {
if (a % 2 != 0) {
    return (a + b);
}
else {
    return (a * b);
}}
console.log(calk(3,5))

// 2. Определить какой четверти принадлежит точка с координатами (х,у)
function coordinat(x,y){
if (x > 0 && y > 0) {
    return('1 Четверть')
}
else if (x < 0 && y > 0) {
    return('2 Четверть')
}
else if (x < 0 && y < 0) {
    return('3 Четверть')
}
else if (x > 0 && y < 0) {
    return('4 Четверть')
}
else if (x == 0 && y > 0) {
    return('Ось Y')
}
else if (x > 0 && y == 0) {
    return('Ось X')
}
else if (x == 0 && y == 0) {
    return('Центр координат')
}}
console.log(coordinat(0,4))

// 3. Найти суммы только положительных из трех чисел
function sumPos(array){
let result = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        result += array[i];
    }
}
return result;
}
let array = [-2, 4, 8];
console.log(sumPos(array))

// 4. Посчитать выражение (макс(а*б*с, а+б+с))+3
function maxCount (g, h, j){
    if (g * h * j > g + h + j) {
    return (g * h * j + 3)
}
else if (g * h * j < g + h + j) {
    return (g + h + j + 3)
}}
console.log(maxCount(3, 2, 5))

/* 5. Написать программу определения оценки студента по его рейтингу, на основе
следующих правил*/
function rating(c){
if (c >= 0 && c <= 19) {
    return ('Rating:' + 'F')
}
else if (c >= 20 && c <= 39) {
    return('Rating:' + 'E')
}
else if (c >= 40 && c <= 59) {
    return('Rating:' + 'D')
}
else if (c >= 60 && c <= 74) {
    return('Rating:' + 'C')
}
else if (c >= 75 && c <= 89) {
    return('Rating:' + 'B')
}
else if (c >= 90 && c <= 100) {
    return('Rating:' + 'A')
}}
console.log(rating(77))