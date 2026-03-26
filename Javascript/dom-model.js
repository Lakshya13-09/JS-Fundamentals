// console.dir(document);
let h=document.getElementById("heading");
console.log(h);
let items = document.getElementsByClassName("text");
console.log(items[0].innerHTML);
console.log(items);

//query selector
let item = document.querySelector(".text");
let item2 = document.querySelectorAll(".text");
console.log(item);
console.log(item2);

let box= document.getElementById("box");
console.log(box.innerText);// it only prints the valuable information given to print.
console.log(box.innerHTML);// it return everything written isnisde the html
box.style.color="red";
box.style.backgroundColor="yellow";
box.style.fontSize = "24px";

let newP= document.createElement("p");
newP.innerText = "I am created by JS";
document.body.appendChild(newP);//. by this we have created html page by using java scriptg
