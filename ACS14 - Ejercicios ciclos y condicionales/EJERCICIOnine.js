// 9. Mostrar la suma de los índices donde el 
// índice sea menor al elemento
// nums=[0,2,1,4]
// //6

let nums = [0, 2, 1, 4];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    if (i < sum[i]) {
        sum += nums;
    }
}
console.log(sum);