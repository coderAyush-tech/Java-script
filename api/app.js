const { createElement } = require("react");
let body = document.querySelector("body");
 let api = 'https://dummyjson.com/posts'
 async function getdata(){
    let res = await fetch(api);
    let data = await res.json();
    let posts = data.posts;
    console.log(posts);

    posts.forEach((posts)=>{
        let div = createElement("div").classList.add("box");
        body.append(div);
        div.innerHtml=`<h1>${posts.title}`
    })
    
}
getdata();