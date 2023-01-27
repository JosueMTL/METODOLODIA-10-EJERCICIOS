// 6. Mostrar la suma elementos que no sean
// múltiplos de 7
// nums=[12,14,5,7]
// //19


let array = [12, 14, 5, 7];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 7 !== 0) {
        sum += array[i];
    }
}

console.log(sum); 