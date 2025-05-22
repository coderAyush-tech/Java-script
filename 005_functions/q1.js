let obj = {
    "rohan": "20",
    "mohan": "30",
    "sohan": "40",
    "suman": "50",
}

for (const obj1 in obj) {
  
        const element = obj[obj1];
        console.log(obj1 + " : " + element); 
    }
