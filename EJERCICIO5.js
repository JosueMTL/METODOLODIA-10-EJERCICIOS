// 3. **Ejercicio 05**

//     Contar cuantos números impares tiene el siguiente array: `nums=[3, 5, 6, 7, 3, 5, 6, 7]`

//     **Nota:** Usar el operador mod, este operador devuelve el residuo de dividir dos números.

//     Ejemplos: `9 mod 2 = 1` `8 mod 2 = 0`

let nums = [10, 6, 2, 2, 22, 4];
let cont = 0;
let vari = nums.length;
const cond = 0;

for (let i = 0; i < vari; i++) {
    if (nums[i] % 2 == cond) {
        cont++
    }
}
console.log(cont)
