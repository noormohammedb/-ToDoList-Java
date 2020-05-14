// // document.write("<h1>Hello World!</h1>")
// function btn(){
//     console.log("click");
//     console.log(document.URL);
//     document.URL("google.com");
//     console.log(document.URL);
    
// }

const paper = document.querySelector("#textBox");
var item = document.createElement("li");
var list = document.querySelector(".hide");
var li = document.createElement("li");
    li.innerText="hello world";
function btn(){  
    console.log(paper);
    let f_li = li.cloneNode(true);
    f_li.innerText = paper.value;
    list.appendChild(f_li);
    list.classList.remove("hide");
}