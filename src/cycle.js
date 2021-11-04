// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
let res = 0;
for (let i = 0; i < 99; i = i + 2) {
    res = res + i;
}
console.log(res);

/* 2. Проверить простое ли число? (число называется простым, если оно делится только
само на себя и на 1)*/
let num = 5;
let flag = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = false;
        break;
    }
}

console.log(flag);

/* 3. Найти корень натурального числа с точностью до целого (рассмотреть вариант
последовательного подбора и метод бинарного поиска)*/
let n = 9, r;
for (let i = 1; i < n; i++) {
    if (i * i === n) {
        r = i;
        break;
    }

}
if (r === undefined) {
    console.log('Целого корня нет!');
}
else console.log(r);

// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;
let f = 3, fact = 1;
for (let i = 1; i <= f; i++) {
    fact = fact * i;
}
console.log(fact);

// 5. Посчитать сумму цифр заданного числа
let a = 352, sum = 0, tmp;
while (a > 0) {
    tmp = a % 10;
    sum = sum + tmp;
    a = (a - tmp) / 10;
}
console.log(sum);

/* 6. Вывести число, которое является зеркальным отображением последовательности
цифр заданного числа, например, задано число 123, вывести 321.*/
let b = 1234, reverse = 0, temp, i = 1000;
while (b) {
    temp = b % 10;
    reverse += temp * i;
    i = i / 10;
    b = (b - temp) / 10;
}

console.log(reverse);