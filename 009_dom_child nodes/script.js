console.log("hello world");
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
let cont = document.body.childNodes[1];
console.log(cont.firstChild);
console.log(cont.lastChild);
console.log(cont.firstElementChild);
console.log(cont.lastElementChild);
cont.firstElementChild.style.color="red";
console.log(cont.lastChild.parentNode)
console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.nodes)
console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild[3].previousElementSibling)