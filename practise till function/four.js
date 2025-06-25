let cont = ((a, b) => {
    for(let i = a; i <= b; i++) {
        let count = 0;
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                count++;
            }
        }
        if(count == 2) {
            console.log(i + " is Prime");
        } else {
            console.log(i + " is Not Prime");
        }
    }
});
cont(1, 10);