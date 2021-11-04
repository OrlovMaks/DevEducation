//1 задание
let days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];
let d = new Date();
let n = d.getDay();
console.log(days[n]);

// 2 Задание
let a = 3, b = 5;

console.log(sumA(a, b))

function sumA(x, y) {
    return x + y;
}