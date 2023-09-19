let form=document.getElementById("forms");
let headlist=document.getElementById('items');
form.addEventListener("submit",onsignup);
headlist.addEventListener("click",remove);
function onsignup(e){
    e.preventDefault();
    let button1=document.createElement("button");
let text2=document.createTextNode("Edit");
button1.className="btnbtn btn-gray btn-sm float-right mr-1";
button1.appendChild(text2);
    let button=document.createElement("button");
let text1=document.createTextNode("X");
button.className="btn btn-danger btn-sm float-right delete mr-2";
button.appendChild(text1);
let newlist=document.createElement("li");
let text=document.createTextNode(document.getElementById("text").value);
newlist.appendChild(text);
newlist.className="list-group-item";
newlist.appendChild(button);
newlist.appendChild(button1);
headlist.appendChild(newlist);
}
function remove(e){
    if(e.target.classList.contains('delete')){
if(confirm("Are you sure you want to delete itm?"))
{
    var li = e.target.parentElement;
      headlist.removeChild(li);
}
    }
}
