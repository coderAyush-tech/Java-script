let obj = {
    "rohan": "20",
    "mohan": "30",
    "sohan": "40",
    "suman": "50",
}
let keys = Object.keys(obj);
for(let i=0;i<keys.length;i++){
    console.log(keys[i] + " : " + obj[keys[i]]);
}