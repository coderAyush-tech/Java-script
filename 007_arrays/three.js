let n = Number(prompt("enter the number:"));
let arr = new Array(n);
for(let i=0;i<arr.length;i++){
    arr[i]=  Number(prompt("enter the number:"));
}


let fi = (element => {
   
   if(element%10==0){
    return element;
   }
});
console.log(arr.filter(fi));