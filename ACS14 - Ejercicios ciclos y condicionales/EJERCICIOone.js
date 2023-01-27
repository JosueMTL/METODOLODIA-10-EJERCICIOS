let numeros = [3, 5, 8, 4];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 != 0) {
    suma += numeros[i];
  }
}
console.log(suma);
