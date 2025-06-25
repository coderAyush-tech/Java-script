let a = Number(prompt("Enter a number to check if it is prime: "));
 let b = Number(prompt("Enter a number to check if it is prime: "));

for( a;a<=b;a++){
    let count =0;
    let temp = a;
for( i=1;i<=temp;i++){
    if(temp%i===0){
        count++;

    }

}


if(count===2){
    console.log("The number is prime"+temp);
}else{
    console.log("The number is not prime");
}
}