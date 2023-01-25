// A partir del array imprimir el índice de los elementos que sumados sean igual a la variable x.

// *Ejemplo:*

// `nums = [2, 3, 6, 5, 0]`

// `x=7`

// Salida en pantalla: índice 0 e índice 3

let x = prompt("INGRESE SU NUMERO");
let elements = [4, 6, 2, 5, 6,];

let i = 0, j = 1, sum;
let sais = elements.length;
let order = "A PARIR DEL ARREGLO IMPRIMIR LOS ELEMENTOS QUE SUMANDOS ENA IGAUALES A LA VARIABLE X"
console.log(order, elements);

for (i; i < sais; i++) {
    j = i + 1;
    if (i < sais) {
        for (j; j < sais; j++) {
            sum = (elements[i] + elements[j]);
            if (sum == x) {
                console.log("LOS INDICES SUMANDOS SON ", X, " son: ", i, j);
            }
        }

    } else {
        alert("NINGUNO DE STOS INDICES SUMADOS SON IGUALES A: ", x);
    }
}