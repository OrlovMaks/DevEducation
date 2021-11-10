// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function sumEven(res){
    for (let i = 0; i < 99; i = i + 2) {
    res = res + i;
}
return res
}
console.log(sumEven(0))

/* 2. Проверить простое ли число? (число называется простым, если оно делится только
само на себя и на 1)*/
function checkNum (num){
let flag = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = false;
        break;
    }
}
return flag;
}
console.log(checkNum(5))

/* 3. Найти корень натурального числа с точностью до целого (рассмотреть вариант
последовательного подбора и метод бинарного поиска)*/
function rootNum (num){
    let r;
for (let i = 1; i < num; i++) {
    if (i * i === num) {
        r = i;
        break;
    }

}
if (r === undefined) {
    return ('Целого корня нет!');
}
else return (r);
}
console.log(rootNum(9))

// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function factNum (f, fact){
for (let i = 1; i <= f; i++) {
fact = fact * i;
}
return fact;
}
console.log(factNum(3, 1))

// 5. Посчитать сумму цифр заданного числа
function sumNum(a){
    let sum = 0, tmp;
while (a > 0) {
    tmp = a % 10;
    sum = sum + tmp;
    a = (a - tmp) / 10;
}
return (sum);
}
console.log(sumNum(352))

/* 6. Вывести число, которое является зеркальным отображением последовательности
цифр заданного числа, например, задано число 123, вывести 321.*/ 
function reversNum (b){
let reverse = 0, temp, i = 1000;
while (b) {
    temp = b % 10;
    reverse += temp * i;
    i = i / 10;
    b = (b - temp) / 10;
}
return reverse
}
console.log(reversNum(1234))