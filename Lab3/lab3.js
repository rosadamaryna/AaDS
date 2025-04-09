/*Напишіть алгоритм, який знаходить найбільший спільний дільник  двох чисел.*/

function gcd(a, b) {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

// Приклад використання
console.log(gcd(56, 98));
