let arr = [];
for(let i=0;i<2;i++){
let obj = {
    name: prompt("Enter name:"),
    age: Number(prompt("Enter age:")),
    city: prompt("Enter city:"),


    
}
arr.push(obj);



}

// for(let e in obj){
//     let a = (obj[e]); // This will not work as expected because 'for...of' is not suitable for objects
//     console.log(e, a);
// }

//for off se

// for(let f of Object.keys(obj)) {
//     let a = obj[f]; // This will work correctly
//     console.log(f, a);
// }

// arr = [...Object.values(obj)];
// console.log(arr);
arr.forEach((e) => {
    console.log(`Name: ${e.name}, Age: ${e.age}, City: ${e.city}`);
});