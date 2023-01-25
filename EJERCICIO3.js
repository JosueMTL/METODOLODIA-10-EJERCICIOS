// 1. **Ejercicio 03**

//     El mismo ***Ejercicio 01***  pero considerar que las combinaciones no se repitan, es decir, las salida seria:

//     02 04 08

//     24 28

//     48

let nums = [4, 6, 7, 8]

let i = 0, j = 1;
let contar = nums.length

for (i; i < contar; i++) {
    console.log(".......");
    j = i + 1;
    if (i < contar) {
        for (j; j < contar; j++) {
            console.log(nums[i], nums[j]);
        }
    }
}
