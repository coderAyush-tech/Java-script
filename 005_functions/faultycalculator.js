let a = Number( prompt("Enter a value of a"));
let b = Number (prompt("Enter a value of b"));
console.log("1 -----> Addition");
console.log("2 -----> Subtraction");
console.log("3 -----> Multiplication");
console.log("4 -----> Division");
console.log("5 -----> Modulus");

let choice = Number(prompt("1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Modulus"));


switch (choice) {
    case 1:
        if(Math.random()<0.1  ){
            console.log(a - b);
            }
        else{
            console.log(a + b);
        }
        break;
    case 2:
        if(Math.random()<0.9 ){
            console.log(a+b);
            }
        else{
            console.log(a-b);
        }
        break;
    case 3:
        if(Math.random()<0.1  ){
            console.log(a/b);
            }
        else{
            console.log(a*b);
        }
        break;
    
    case 4:
        if(Math.random()<0.1  ){
            console.log(a*b);
            }
        else{
            console.log(a/b);
        }
        break;

    case 5:
        if(Math.random()<0.1  ){
            console.log(a-b);
            }
        else{
            console.log(a%b);
        }
        break;

}
// let a = Number(prompt("Enter a value of a"));
// let b = Number(prompt("Enter a value of b"));

// console.log("1 -----> Addition");
// console.log("2 -----> Subtraction");
// console.log("3 -----> Multiplication");
// console.log("4 -----> Division");
// console.log("5 -----> Modulus");

// let choice = Number(prompt("Enter your choice (1-5):"));

// switch (choice) {
//     case 1:
//         console.log(Math.random() < 0.9 ? a - b : a + b); // 10% chance of incorrect subtraction
//         break;
//     case 2:
//         console.log(Math.random() < 0.1 ? a + b : a - b); // 10% chance of incorrect addition
//         break;
//     case 3:
//         console.log(Math.random() < 0.1 ? a + b : a * b); // 10% chance of incorrect addition
//         break;
//     case 4:
//         console.log(Math.random() < 0.1 ? a + b : a / b); // 10% chance of incorrect addition
//         break;
//     case 5:
//         console.log(Math.random() < 0.1 ? a + b : a % b); // 10% chance of incorrect addition
//         break;
//     default:
//         console.log("Invalid choice. Please enter a number between 1 and 5.");
// }