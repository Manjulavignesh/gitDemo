let elements=document.querySelectorAll(".list-group-item");
elements[1].style.backgroundColor="green";
elements[2].style.visibility='hidden';
elements[2].style.color="green";
let odd=document.querySelectorAll("li:nth-child(odd)");
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}
