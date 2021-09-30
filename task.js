let numbers = [5, 8, 0, 1, 9, 11, 15, 16];
let newarray = [];
console.log("Original numbers list: ", numbers)
for (let i = 0; i < numbers.length; i++) {
    //j < i so it will takes the next step and compare between the two 
    for (let j = 0; j < i; j++) {
        //if numbers[j] bigger ten 
        if (numbers[i] < numbers[j]) {
            //we take the number[i] keep it in temp and save the smaller number first and after it the bigger number 
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}   

console.log("Numbers list After sorting: ", numbers)

//in short way (this best style)

// console.log("Numbers list After sorting: ",
//     numbers.sort(function (a, b) { return a - b }));

for (let i = 0; i < numbers.length; i++) {
    // we compare it with the next number and moved one step to compare each number with the next  
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers);

// in short way (this best style)

// console.log("Numbers list After Desc sorting: ", 
// numbers.sort(function (a, b) { return b-a }))



// i don't know how to deal with file and i have no time 
//to serch , i just know some things like this (sorry)
const fs = require('fs')
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    let cont = 0;
    for (let c = 0; c < data.length; c++) {
        if(data[c]!=',')
        {
            newarray[cont]=data[c]
            cont++;
        }
    }
    console.log(newarray);
})