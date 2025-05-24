let n = Number (prompt("enter the number:"));
let arr = new Array(n);
for(let i=0;i<arr.length;i++){
    arr[i]=  Number (prompt("enter the number:"));
}
let arr2= new Array(n);
let temp=1;
for(let i=0;i<arr.length;i++){
   temp = arr[i];
    temp*=temp;
 console.log(temp);
    arr2[i]= temp;
}

console.log(arr2);