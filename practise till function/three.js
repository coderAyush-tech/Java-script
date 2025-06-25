let books=[];
for(let i =0 ;i<2;i++){
let obj ={
    title: prompt("enter the title"),
    author: prompt("enter author name"),
    year:   Number(prompt("enter the year")),

}
 books.push(obj);
} 

// for(let num in obj){
//     console.log(num,":",obj[num] );
    
// }

for (let i = 0; i < books.length; i++) {
    for (let key in books[i]) {
        console.log(key, ":", books[i][key]);
    }
    console.log("-----");
}