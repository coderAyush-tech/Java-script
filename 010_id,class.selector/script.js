let cont =  document.getElementsByClassName("box");
console.log(cont);
cont[2].style.color = "red";
cont[2].style.backgroundColor = "yellow";

document.getElementById("five").style.color = "blue";
document.getElementById("five").style.backgroundColor = "green";


console.log("script js initialized");
console.log(document.body.children[3]);
let box = document.body.children[3];
box.style.color = "red";

document.querySelector(".box").style.color = "blue";
document.querySelector("#five").style.color = "green";
document.querySelectorAll(".box").forEach((e)=>{
  e.style.color = "purple";
});

