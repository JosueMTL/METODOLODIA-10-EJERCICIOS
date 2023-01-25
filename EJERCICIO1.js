// 1. **Ejercicio 01**

//     Usando una variable contador y bucle que recorra el array, determinar el tamaño del siguiente array. 

//     `nums = [6, 6, 0, 1, 8, 4, 2, 9]`



let nums = [6, 6, 0, 1, 8, 4, 2, 9];
let conts = 0;

do {
    console.log(conts + 1, "(", nums[conts], ")", conts);
    conts++;
}
while (conts < nums.length);

console.log("EL TAMAÑO DEL ARREGLO ES " + conts + "unidades");
