// 1. Найти минимальный элемент массива
function minNum (minArray){
    let min = minArray[0];

for (let i = 1; i < minArray.length; i++) {
    if (min > minArray[i]) {
        min = minArray[i];
    }

}
return min;
}
console.log(minNum([5, 2, 40, 27, 17, 3]))

// 2. Найти максимальный элемент массива
function maxNum (maxArray){
    let max = maxArray[0];

for (let i = 1; i < maxArray.length; i++) {
    if (max < maxArray[i]) {
        max = maxArray[i];
    }

}
return max;
}
console.log(maxNum([5, 2, 40, 27, 17, 3]));

// 3. Найти индекс минимального элемента массива
function minimumIndex (array){
    let minN = array[0];
    let minIndex;
for (let i = 1; i < array.length; i++) {

    if (minN > array[i]) {
        minN = array[i];
        minIndex = i;
    }

}
return minIndex;
}
console.log(minimumIndex([5, 7, 40, 2, 17, 3]))

// 4. Найти индекс максимального элемента массива
function maximumIndex(array){
let maxN = array[0];
let maxIndex;

for (let i = 1; i < array.length; i++) {
    if (maxN < array[i]) {
        maxN = array[i];
        maxIndex = i;
    }

}
return maxIndex;
}
console.log(maximumIndex([5, 2, 40, 27, 17, 3]))

// 5. Посчитать сумму элементов массива с нечетными индексами
function oddArray(array) {
let oddSum = 0;
for (let i = 1; i < array.length; i = i + 2) {
    oddSum = oddSum + array[i];
}
return oddSum;
}
console.log(oddArray([3, 6, 24, 78, 36, 49, 7, 11, 1]))

// 6. Сделать реверс массива (массив в обратном направлении)[1, 2, 3, 4, 5];
function revArray(array){
    array.reverse();
    return (array);
}
console.log(revArray([1, 2, 3, 4, 5]))

// 7. Посчитать количество нечетных элементов массива
function oddElArray(array){
let counter = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        counter++;
    }
}
return counter;
}
console.log(oddArray([2, 3, 5, 7, 4, 6, 1]))