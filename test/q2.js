let a = prompt("Enter the letters:");
let vowels = "aeiouAEIOU"; 

for (let i = 0; i < a.length; i++) {
    if (vowels.includes(a[i])) {
        console.log(a[i]); 
    }
}