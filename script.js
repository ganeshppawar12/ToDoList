const input = document.getElementById('input');
const btn = document.getElementById('btn');
const listcontainer =document.getElementById('listcontainer')
btn.addEventListener('click',()=>{
    if(input.value === " "){
        alert("add something")
    }
   else if(input.value === ""){
        alert("add something")
    }
    else{
    let li = document.createElement('li');
    li.innerHTML = input.value;
    listcontainer.appendChild(li);
    let span = document.createElement('span')
    span.innerHTML = "\u00d7"
    li.appendChild(span);
    }
    input.value = ""
    database();
})

listcontainer.addEventListener('click' ,(e)=>{
    if(e.target.tagName === "SPAN"){
e.target.parentElement.remove();
database()
    }
})

function database(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function show(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
show();