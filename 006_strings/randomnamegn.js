
let a ,b,c;
let sp=1;
let ep =100;
while(sp<=ep){
    let rand =Math.random();
if(rand>0.33){
    a = "Ayush";
}
else if(rand>0.66 && rand>=0.33){
    a = "Ankit";
}
else{
    a = "Azad";
}

if(rand>0.33){
    b = "ashika";
}
else if(rand>0.66 && rand>=0.33){
    b = "puja ";
}
else{
    b = "priya";
}

sp++;
console.log(a,b);
}
