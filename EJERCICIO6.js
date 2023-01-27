let names = ["r", "a", "t", "a"];
let i = 0;
let j = names.length -1
let c = 0;

c = names[i];
names[i] = names[j];
names[j] = c;
console.log(names);