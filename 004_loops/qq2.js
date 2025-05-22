let obj = {
    name : prompt("Enter your name"),
    age : prompt("Enter your age"),
    city : prompt("Enter your city"),
    phone: prompt("Enter your phone"),
   
}
for (const key in obj) {
    const element = obj[key];
    console.log(key + " : " + element);
}
