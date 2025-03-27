function calculateFunction(n) {
    if (n <= 0) {
        return `n повинно бути більше нуля.`;
    } else {
        if (n % 1 !== 0) {
            return `n повинно бути цілим числом.`;
        } else {
            const result = (Math.log(3 * n) + 5) / (n * n);
            return `Результат обчислень: ${result}`;
        }
    }
}

console.log(calculateFunction(3));
console.log(calculateFunction(-2));
console.log(calculateFunction(0.2));