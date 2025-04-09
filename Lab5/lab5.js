/* Є одновимірний масив довжиною N = 45. 
Упорядкувати масив сетодом простого обміну таким чином, щоб елементи, 
що знаходяться на парних позиціях розташовувалися по зростанню, а на непарних позиціях - за спаданням.*/

const N = 45;
let arr = [];
for (let i = 0; i < N; i++) {
    let randomNumber = Math.floor(Math.random() * 51);
    arr.push(randomNumber);
}

console.log("Початковий масив:");
console.log(arr);

function bubbleSortSelective(array, indices, ascending = true) {
    let len = indices.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            let a = indices[j];
            let b = indices[j + 1];
            if ((ascending && array[a] > array[b]) || (!ascending && array[a] < array[b])) {
                [array[a], array[b]] = [array[b], array[a]];
            }
        }
    }
}

let evenIndices = [], oddIndices = [];
for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
        evenIndices.push(i);
    } else {
        oddIndices.push(i);
    }
}

bubbleSortSelective(arr, evenIndices, true);   // Парні — за зростанням
bubbleSortSelective(arr, oddIndices, false);   // Непарні — за спаданням

console.log("Оброблений масив:");
console.log(arr);
