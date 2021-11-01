// 1. Если а – четное посчитать а*б, иначе а+б
let a = 3;
let b = 5;
if (a % 2 === 0) {
    console.log(a * b)
}
else {
    console.log(a + b)
}

// 2. Определить какой четверти принадлежит точка с координатами (х,у)
let x = 0;
let y = 0;
if (x > 0 && y > 0) {
    console.log('1 Четверть')
}
else if (x < 0 && y > 0) {
    console.log('2 Четверть')
}
else if (x < 0 && y < 0) {
    console.log('3 Четверть')
}
else if (x > 0 && y < 0) {
    console.log('4 Четверть')
}
else if (x == 0 && y == 0) {
    console.log('Центр координат')
}

// 3. Найти суммы только положительных из трех чисел
let array = [-2, 4, 8];
let result = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        result += array[i];
    }
}
console.log(result);

// 4. Посчитать выражение (макс(а*б*с, а+б+с))+3
let g = 1, h = 1, j = 1;
let res;
if (g * h * j > g + h + j) {
    res = g * h * j + 3;
    console.log(res)
}
else if (g * h * j < g + h + j) {
    res = g + h + j + 3;
    console.log(res)
}

/* 5. Написать программу определения оценки студента по его рейтингу, на основе
следующих правил*/
let rating = 57;
let c = rating;
if (c >= 0 && c <= 19) {
    console.log('Rating:' + 'F')
}
else if (c >= 20 && c <= 39) {
    console.log('Rating:' + 'E')
}
else if (c >= 40 && c <= 59) {
    console.log('Rating:' + 'D')
}
else if (c >= 60 && c <= 74) {
    console.log('Rating:' + 'C')
}
else if (c >= 75 && c <= 89) {
    console.log('Rating:' + 'B')
}
else if (c >= 90 && c <= 100) {
    console.log('Rating:' + 'A')
}