let n = Number(prompt("enter the number:"));
let arr = new Array(n);
for(let i=0;i<arr.length;i++){
    arr[i]=  Number(prompt("enter the number:"));
}
let count = 0;
let temp = null;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
           
            temp = arr[i];

            count++;
            break; 
        }

    }
    if(temp !== null) {
        break; 
    }

}
if(temp !==null){
    count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == temp){
            count++;
        }
    }
    console.log(`repeated element is : ${temp}`);
console.log(`repeated count is : ${count}`);
}
