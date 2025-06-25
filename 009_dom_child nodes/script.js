console.log("hello wolrd");

// console.log(window.document.body);
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[0]);
// let cont = document.body.childNodes[0];
// console.log(cont.nextSibling);
// console.log(document.body.firstChild);
console.log(document.body.children[0].children.length);
let cont1 = document.body.children[0].children[0];
cont1.style.color = "red";
cont1.style.backgroundColor = "yellow";
cont1.style.fontSize = "20px";
cont1.style.border = "2px solid black";
cont1.textContent = "Hello World";
