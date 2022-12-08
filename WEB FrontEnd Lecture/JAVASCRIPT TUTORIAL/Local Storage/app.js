//Local Storage - tarayıcıyı kapattığımızda bellekteki verileri silmeyen tutan bir yapıdır.

//SetItem

// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);

//Get Item

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

//Clear Local Storage

// localStorage.clear();



// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);

// console.log(localStorage.getItem("sport"));

// if(localStorage.getItem("sport") === null){
//     console.log("Sorguladığınız Veri Bulunmuyor");
// }
// else{
//     console.log("Sorguladığınız Veri Bulunuyor");
// }

//Local Storage'a sadece string değerler girebiliyoruz!!!

//Local Storage - Array Yazma 

const todos = ["Todo 1", "Todo 2", "Todo 3"];

// localStorage.setItem("todos",todos);

// console.log(typeof localStorage.getItem("todos"));

//"localStorage.setItem("todos", JSON.stringify(todos));" fonksiyonu bizim string bir ifadeyi arraya çevirmemizi sağlar.

// localStorage.setItem("todos", JSON.stringify(todos));

//"const value = JSON.parse(localStorage.getItem("todos"));" fonksiyonu ile de string değeri arraya çevirebiliriz.

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoInput.value;

    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));



    
    e.preventDefault();
}
