// 1. Найти минимальный элемент массива
let minNum = [5, 2, 40, 27, 17, 3];
let min = minNum[0];

for (let i = 1; i < minNum.length; i++) {
    if (min > minNum[i]) {
        min = minNum[i];
    }

}
console.log(min);

// 2. Найти максимальный элемент массива
let maxNum = [5, 2, 40, 27, 17, 3];
let max = maxNum[0];

for (let i = 1; i < maxNum.length; i++) {
    if (max < maxNum[i]) {
        max = maxNum[i];
    }

}
console.log(max);

// 3. Найти индекс минимального элемента массива
let minInd = [5, 2, 40, 27, 17, 3];
let minN = minInd[0];
let minIndex;

for (let i = 1; i < minInd.length; i++) {
    if (minN > minInd[i]) {
        minN = minInd[i];
        minIndex = i;
    }

}
console.log(minIndex);

// 4. Найти индекс максимального элемента массива
let maxInd = [5, 2, 40, 27, 17, 3];
let maxN = maxInd[0];
let maxIndex;

for (let i = 1; i < maxInd.length; i++) {
    if (maxN < maxInd[i]) {
        maxN = maxInd[i];
        maxIndex = i;
    }

}
console.log(maxIndex);

// 5. Посчитать сумму элементов массива с нечетными индексами
let oddArray = [3, 6, 24, 78, 36, 49, 7, 11, 1];
let oddSum = 0;
for (let i = 1; i < oddArray.length; i = i + 2) {
    oddSum = oddSum + oddArray[i];
}
console.log(oddSum);

// 6. Сделать реверс массива (массив в обратном направлении)
let revArray = [1, 2, 3, 4, 5];
revArray.reverse();
console.log(revArray);

// 7. Посчитать количество нечетных элементов массива
let oddElArray = [2, 3, 5, 7, 4, 6, 1];
let counter = 0;
for (let i = 0; i < oddElArray.length; i++) {
    if (oddElArray[i] % 2 != 0) {
        counter++;
    }
}
console.log(counter);