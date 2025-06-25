let div=document.createElement("div");
div.innerHTML="I have been inserted <b> by Ankit <b>"
div.setAttribute("class","created");
document.querySelector(".Container").append(div);
document.querySelector(".Container").before(div);

let div2  = document.createElement("div");
div2.innerHTML="I have been inserted <b> by Ankit <b>";
div2.setAttribute("class","created");
document.querySelector(".Container").append(div2);

let div3  = document.createElement("div");
div3.innerHTML="I have been inserted <b> by ayush <b>";
div3.setAttribute("class","created");
document.querySelector(".Container").append(div3);