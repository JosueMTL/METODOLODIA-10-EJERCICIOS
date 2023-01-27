// 7. Mostrar la suma de los elementos donde y el 
// índice sean iguales
// nums=[2,1,4,3]
// //4



let array = [2, 1, 4, 3];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (i === array[i]) {
        sum += array[i];
    }
}

console.log(sum); 