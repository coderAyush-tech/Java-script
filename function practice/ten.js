
let palidrone = ()=>{
    let a = Number(prompt("Enter a number:"));
    let temp = a;
    let rev =0;
    while(a!=0){
        let rem = a%10;
        rev = rev*10+rem;
        a = parseInt(a / 10);
     }
     if(rev ==temp){
         console.log(`${temp} is a palindrome`);
     }else{
            console.log(`${temp} is not a palindrome`);
     }
}
palidrone();