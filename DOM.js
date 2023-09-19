let li=document.querySelector(".title");
console.log(li.parentElement);
console.log(li.lastElementChild);
console.log(li.lastChild);
console.log(li.firstElementChild);
console.log(li.firstChild);
console.log(li.nextSibling);
console.log(li.nextElementSibling);
console.log(li.previousSibling);
console.log(li.previousElementSibling);
console.log(li.childNodes);
let h1=document.createElement('h1');
h1.setAttribute("id","text");
let text=document.createTextNode("Hello");
h1.appendChild(text);
console.log(h1);
let container=document.querySelector("header .container");
let h2=document.querySelector("header h1");
container.insertBefore(text,h2);





