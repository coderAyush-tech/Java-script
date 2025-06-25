
// let n = Number(prompt("enter the number of elements in the array:"));
// let arr = new Array(n);
// for(let i=0;i<arr.length;i++){
//     arr[i] = Number(prompt("enter the number:"));
// }
// let max = -99999999999;
// let min = 99999999999;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
//     if(arr[i]<min){
//         min = arr[i];
//     }
// }
// console.log("The largest number is: " + max);
// console.log("The smallest number is: " + min);


let n = Number(prompt("enter the number of elements in the array:"));
let arr = new Array(n);
for(let i=0;i<arr.length;i++){
    arr[i] = Number(prompt("enter the number:"));
}
let max = -99999999999;
let secondMax = 0;
let secondmin=0;
let min = 99999999999;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        secondMax = max;
        max = arr[i];
    }else if(arr[i]>secondMax && arr[i] < max){
        secondMax = arr[i];
    }
    if(arr[i]<min){
        secondmin = min;
        min = arr[i];
    }else if(arr[i]<secondmin &&arr[i]>min){
        secondmin = arr[i];
    }
}
console.log("The second largest number is: " + secondMax);
console.log("The largest number is: " + max);
console.log("The second smallest number is: " + secondmin);
console.log("The smallest number is: " + min);