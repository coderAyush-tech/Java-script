let n = Number (prompt("enter the number:"));
let arr = new Array(n);
for(let i=0;i<arr.length;i++){
    arr[i]=  Number (prompt("enter the number:"));
}
 
let fact = ((e)=>{
    let facto=1;
    for(let i=1;i<=e;i++){
        facto*=i;
    }
    return facto
})
// let factorials = arr.map(fact);

console.log(arr.reduce((acc,curr)=>{
                return fact;
}));
// let arr = [1, 2, 3];
// console.log(arr.reduce((acc, curr) => acc * curr));
