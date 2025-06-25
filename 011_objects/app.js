// let obj ={
// name: "John",
// age: 30,
// city: "New York",
// output: function() {
//     console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
//   }

// }
// obj.name = "Jane"; // Update the name property
// console.log(typeof obj); // object
// console.log(obj.name);
// obj.output(); // Call the output method



let person = {
    name: "ishika",
    phone: "1234567890",
    address:{
        city: "New York",
        state: "NY",
        zip: "10001"
    }
    
}
console.log(person);
// //object create krke aana hai
// for(let key in person){
//     console.log(key, person[key]);
// }
for(let key of Object.keys(person)){
    console.log(key, person[key]);
}
Object.freeze(); // Freeze the object to prevent modifications
console.log(Object.isFrozen(person)); // Check if the object is frozen