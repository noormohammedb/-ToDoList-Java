// // document.write("<h1>Hello World!</h1>")
// function btn(){
//     console.log("click");
//     console.log(document.URL);
//     document.URL("google.com");
//     console.log(document.URL);
    
// }

const paper = document.querySelector("#textBox").val;
var item = document.createElement("li");
var list = document.querySelector(".list");
function btn(){
    console.log(paper);
    
    list.appendChild(item.innerHTML="paper");
    list.classList.remove("hide");
}