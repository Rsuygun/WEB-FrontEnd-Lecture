const element = document.querySelector("#clear-todos");

//Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent); //Sadece yazı olan kısımları almak için kullanılır.
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);


//Style ve Element Özelliklerini Değiştirme


// element.className = "btn btn-primary";
// element.style.color = "black";
// element.style.marginLeft = "20px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank"; //Yeni sekmede açmak için kullanılır.

// element.textContent = "Silin";
// element.innerHTML = "<span style = 'color:green'>Silin</span>";


let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(4)");
element2 = document.querySelectorAll("li:nth-child(odd)"); //Tek sayılı olan "li" leri seçer.
element2 = document.querySelectorAll("li:nth-child(even)"); //Çift sayılı olan "li" leri seçer.

element2.forEach(function(el) {
    el.style.background = "#ccc";
    el.style.color = "red";
});
// const elements = document.querySelectorAll(".list-group,item");
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.backround = "#eee";
// });



console.log(element2);


// console.log(element);