let num = Number(prompt("Enter the number:"));
let sum = 0;
let rem = 0;

while (num !== 0) {
    rem = num % 10; // Extract last digit
    if (rem % 2 === 0) { // Check if even
        sum += rem;
    }
    num = Math.floor(num / 10); // Remove last digit correctly
}

console.log("Sum of even digits:", sum);