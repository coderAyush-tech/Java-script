let n  = Number(prompt("enter the number:"));
let arr = new Array(n);
for(let i=0;i<n;i++){
    arr[i] = Number(prompt("enter the number:"));
}
for(const value of arr){
    console.log(value);
}


