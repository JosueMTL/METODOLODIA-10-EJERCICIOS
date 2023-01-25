// 2. **Ejercicio 02**

//     > Tip: Usar un ciclo (for o while) dentro de otro ciclo
//     >

let nums = [5, 7, 8, 3,]
let i = 0, j = 0;
let cicl = nums.length;

for (i; i < cicl; i++) {
    if (i < cicl) {
        for (j; j < cicl; j++) {
            console.log(nums[i], nums[j]);
        }
        console.log(".........");
        j = 0;
    }
}