// 4. Mostrar la suma de los índices donde el 
// elemento es 0
// nums=[1,1,0,0]
// //5

let nums = [1, 1, 0, 0];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
        sum += i;
    }
}

console.log(sum);