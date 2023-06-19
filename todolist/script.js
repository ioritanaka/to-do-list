const firebaseConfig = {
    apiKey: "AIzaSyCNS2Jk0LNAPKfFRQJRFMcdSquScvudGp4",
    authDomain: "todo-web-b0f27.firebaseapp.com",
    projectId: "todo-web-b0f27",
    storageBucket: "todo-web-b0f27.appspot.com",
    messagingSenderId: "104271144945",
    appId: "1:104271144945:web:8bda61dafc4d8f89418650",
    measurementId: "G-Q4JVQM2NBV"
  };

//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);


const searchbox = document.getElementById("search-box");
const lista = document.getElementById("lista");
const contadoraux = localStorage.getItem("countaux");
var count;



if (contadoraux > 0){
        count = contadoraux;
        count++;
        }
        else
        count = 0;

window.onload = function atualizarLista(){
    var a = 0;
    const contador = localStorage.getItem("count");
    
    if (contador != 0 ){
        while (a <= contador){
            try{
            let newTask = document.createElement("li");
            newTask.setAttribute("id", a);
            const getTask = localStorage.getItem("task" + a);
            const taskObject = JSON.parse(getTask);
            const tarefa = taskObject.task;
            newTask.innerHTML = tarefa;
            lista.appendChild(newTask);
            let span = document.createElement("span");
            span.setAttribute("id", a);
            span.innerHTML = "\u00d7";
            newTask.appendChild(span);
            a ++;
            }
            catch(error){
                console.log(error.name)
                a++
            }
        }
    } else
    console.log("Nada no LocalStorage");

};


    
function addTask(){
    if(searchbox.value == ''){
        alert("Adicione uma Tarefa!");   
    }
    else{
        
        let newTask = document.createElement("li");
        newTask.setAttribute("id", count);
        newTask.innerHTML = searchbox.value;
        lista.appendChild(newTask);
        const tarefa = {
            id: count,
            task: searchbox.value,
            done: false,
        };
        localStorage.setItem("task" + count, JSON.stringify(tarefa));
        let span = document.createElement("span");
        span.setAttribute("id", count);
        span.innerHTML = "\u00d7";
        newTask.appendChild(span);
        
        localStorage.setItem("count", count);
        localStorage.setItem("countaux", count);
    }
    searchbox.value ="";
    count++;
    
}

lista.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        const ident = e.target.id;
        console.log(ident);
        
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        const ident = e.target.id;
        console.log("task" + ident);
        localStorage.removeItem("task" + ident);
    }    

}, false);

