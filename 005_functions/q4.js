function mean(size){
    let count =0;
    let sum = 0;
    for(let i=0;i<size;i++){
        let a = Number(prompt("Enter a number"));
        sum+=a;
        count++;
    }
    let mean = sum/count;
    console.log("Mean is : " + mean);
    
}
mean(5);