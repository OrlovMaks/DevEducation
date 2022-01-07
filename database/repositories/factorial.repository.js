function factorialCycle(num) {
    let factorial = 1;
    for (i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

function factorialRecursion(num) {
    return num != 1 ? num * factorialRecursion(num - 1) : 1;
}

module.exports = { factorialCycle, factorialRecursion };