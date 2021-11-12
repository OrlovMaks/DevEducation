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
function sumA(x, y) {
    return x + y;
}
console.log(sumA(3, 5))