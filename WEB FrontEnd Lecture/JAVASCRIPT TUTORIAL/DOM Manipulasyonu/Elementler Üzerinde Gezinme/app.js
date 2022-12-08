let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;

//Child Nodes - Text dahil her şeyi alır. 

value = todoList.childNodes;
value = todoList.childNodes[0];


//Children - Sadece elementleri alır.

value = todoList.children;
value = todoList.children[0];
value = todoList.children[2].textContent = "Değişti";


value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Değişti";



value = todoList;
value = todoList.firstElementChild; //İlk çocuğunu almak için kullanılır.
value = todoList.lastElementChild; //Son çocuğunu almak için kullanılır.
value = todoList.childElementCount; // "value = todoList.children.length;" aynı anlama gelir.


value = cardrow;
value = cardrow.parentElement; //Ebeveyn (üstündeki) elementi bulmak için kullanılır.
value = cardrow.parentElement.parentElement;



//Element Kardeşlerini (Ebeveynleri ortak olan) Bulma 

value = todo;
value = todo.previousElementSibling; //Bir önceki kardeşe git demektir.
value = todo.nextElementSibling; //Bir sonraki kardeşe git demektir.
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling;




console.log(value);