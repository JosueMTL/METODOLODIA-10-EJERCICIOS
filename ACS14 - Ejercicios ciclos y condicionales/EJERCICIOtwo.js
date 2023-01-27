// 2. Mostrar suma índices pares
// nums=[10,50,8,4]
// //18

let array = [45, 70, 1, 89];
let sum = 0;
for (let i = 0; i < array.length; i += 2) {
    sum += array[i];
}

console.log(sum);