import "core-js/stable";
import "regenerator-runtime/runtime";
import { threeTask } from "./types";

/* 1.Составьте алгоритм, который считает, сколько времени вам нужно на
приготовление яиц.*/
function getCookingTime(eggsAmount: number): number | string {
    if (Number(eggsAmount) === 0) {
        return "Купи яйца!!!"
    }
    else {
        return Math.ceil(Number(eggsAmount) / 5) * 5;
    }
}
console.log(getCookingTime(23));

/* 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме
одного. Тебе нужно его найти.*/
function getNumber(array: number[]): number {
    let evenNum = 0;
    let oddNum = 0;
    for (let value of array) {
        if (value % 2 === 0) {
            evenNum++;
        }
        else {
            oddNum++
        }
    }
    if (evenNum === 1) {
        return array.find(element => element % 2 === 0);
    }
    return array.find(element => element % 2 === 1);
}
console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));
console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]))

/* 3. Принимая массив объектов и случайную строку. У объектов может
быть ключ: «title» с разными значениями. Создайте алгоритм, который
фильтрует массив, заданный как первый параметр, и возвращает
массив объектов, которые содержат в своих заголовках заданную строку
в качестве второго параметра (без учета регистра).*/
function findTitle(array: threeTask, str: string) {
    const temp = [];
    for (let value of array) {
        const key: any = Object.keys(value);
        if (String(value[key].toLowerCase()).includes(str))
            temp.push({ [key]: value[key] });
    }
    return temp;
}

const arr = [
    { title: 'Some title1' },
    { title: 'I like JS' },
    { user: 'This obj does not have key title js' },
    { title: 'Js - is the best!' }
];

const result = findTitle(arr, 'js');
result.forEach(function (element) {
    console.log(element);
});

/*5. Принимая число, ваша функция должна найти следующий
положительный палиндром большего размера.*/
function reverse(nums: number): string {
    var reverse = "";
    for (var i = String(nums).length - 1; i >= 0; i--) {
        reverse += String(nums)[i];
    }
    return reverse;
}
function Palindrome(num) {
    if (String(num).length < 2) {
        return num + 1
    }
    for (var i = num + 1; ; i++) {
        if (String(i) === reverse(i)) {
            return i
        }
    }
}
console.log(Palindrome(12))

/*6. Создать структуру данных Set, используя объект, создать методы add,
remove, has*/
let mySet = new Set("1, 3, 4, 5, 6")
mySet.add('2');
mySet.delete('6');
console.log(mySet.has('2'));
console.log(mySet.has('6'));

