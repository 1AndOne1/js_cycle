//Number 1//
let x = 1;
while (x <= 100) {
    console.log(x)
    x++
};
//Number 2//
let x = 100;
while (x >= 1) {
    console.log(x)
    x--
};
//Number 3//
for (let x = 1; x <= 100; x++) {
    if (x % 2 == 0) {
        console.log(x)
    }
}
//Number 4//
let array = [];
for (let z = 0; z < 10; z++) {
    array.push("x");
    console.log(array);
}
//Number 5//
let array = [];
for (let x = 1; x < 11; x++) {
    array.push(x);
    console.log(array);
}
//Number 6//
let array = [1, 7, 11, -3, 4, 2, 5, 8, 0, -4];
for (let x = 0; x < array.length; x++) {
    if (array[x] > 0 && array[x] < 10) {
        console.log(array[x]);
    }
}
//Number 7//
let array = [1, 7, 11, -3, 4, 2, 5, 8, 0, -4];
for (let x = 0; x < array.length; x++){
if (array[x] !== 5 )continue;

else {
alert('5 is defined')

}
}
//Number 7.1//
let array = [1, 7, 11, -3, 4, 2, 8, 0, -4];
let a = 0;
for (let x = 0; x < array.length; x++){
if (array[x] == 5) {
    a++
}
}
if (a >= 1) {
    console.log('5 is defined')
}
else {
    console.log('5 is not defined');
}
//Number 8//
let array = [1, 7, 11, -3, 4, 2, 5, 8, 0, -4];
let summa = 0;
for (let x = 0; x < array.length; x++) {
    summa += array[x];
    console.log(summa)

}

//Number 9//
let array = [1, 7, 11, -3, 4, 2, 5, 8, 0, -4];
let summa = 0;
for (let x = 0; x < array.length; x++) {
    summa += array[x] ** 2;
    console.log(summa)
}
//Number 10//
let array = [1, 7, 11, -3, 4, 2, 5, 8, 0, -4];
let summa = 0;
for (let x = 0; x < array.length; x++) {
    summa += array[x];
}
let srednee = summa / array.length
console.log(srednee)