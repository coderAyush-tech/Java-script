let arr = [];
for(let i = 0 ;i<5;i++){
    let obj = {
    name: prompt("Enter your name:"),
    age: Number(prompt("Enter your age:")),
}
    arr.push(obj);
}
for(let i=0;i<arr.length;i++){
    console.log(`Name: ${arr[i].name}, Age: ${arr[i].age}`);
}

