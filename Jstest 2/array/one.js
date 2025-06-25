let n =5;
let arr = [];
for(let  i = 0;i<n;i++){
    arr[i] = Number(prompt("Enter a number:"));
}
let istrue  = false;
let temp = null;
for(let  i = 0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i] === arr[j]){
            temp = arr[i];
            console.log("Duplicate found: " + arr[i]);
            istrue = true;
            break;
        }
    }
    if(istrue) break;


}
if(temp !== null){
    let count = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] === temp){
            count++;
        }
    }
    console.log(`Repeated element is: ${temp}`);
    console.log(`Repeated count is: ${count}`);
}
