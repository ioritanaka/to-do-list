const searchbox = document.getElementById("search-box");
const lista = document.getElementById("lista");

function addTask(){
    if(searchbox.value == ''){
        alert("Adicione uma Tarefa!");   
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = searchbox.value;
        lista.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    searchbox.value ="";
}

lista.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

