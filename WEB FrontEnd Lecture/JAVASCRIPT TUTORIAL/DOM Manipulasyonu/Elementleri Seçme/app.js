//Elementi ID'e Göre Seçme

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

//Element Class'a Göre Seçme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

//Element Tag'e Göre Seçme

element = document.getElementsByTagName("div");

//"Query Selector - CSS Selector" ile tek methodta diğer üçünün işlemini yapabiliyoruz.
// "Query Selector" bize sadece Tek bir elementi döner.

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");

element = document.querySelector("li"); //Sayfada bulunan ilk "li" getirir.
element = document.querySelector("div"); //Sayfada bulunan ilk "div" getirir.

// "Query Selector All" ile tüm elementleri seçebiliriz.

element = document.querySelectorAll(".list-group-item"); //NodeList döner

element.forEach(function(el){
    console.log(el);
});
//forEach yardımıyla bütün seçili elementleri seçebiliriz.
// console.log(element);