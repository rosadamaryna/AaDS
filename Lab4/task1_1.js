function calculateFunction(a, b, x) {
    let y;
    if (x >= 0 && x < 5) {
        y = Math.sin(x);
    } else if (x == 5) {
        y =  Math.pow((3 * Math.E), a * x) + 1;
    } else if (x > 5 && x < 11) {
        let c = b * x - 10;
        if (c !== 0) 
            y = Math.pow(c, -1)
        else {
            throw new Error(`Помилка: ділення на нуль`);
        }
    } else {
        throw new Error(`Помилка: x виходить за межі допустимих значень`);
    }
    return `Значення функції f(x)=${y}`;
}

//console.log(calculateFunction(7, 4, -2));
console.log(calculateFunction(7, 4, 3));
console.log(calculateFunction(7, 4, 5));
console.log(calculateFunction(7, 4, 2.5));
console.log(calculateFunction(7, 4, 9));
console.log(calculateFunction(7, 4, 11));






