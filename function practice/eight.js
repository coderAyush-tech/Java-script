function pd(num,callback){
    return callback(num);
}
function square(num) {
    return num * num;
}
console.log(pd(5,square)); // 25