// Yeni Element Oluşturma

/* <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> */

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"))

cardbody.appendChild(newLink);


console.log(newLink);

//Text Content

// cardbody.textContent = "asfaf";

// Text Node - Bir element gibi çocuk eklenebiliyor. İstediğimiz yere ekleme yapabilmek için kullanırız.

// const text = document.createTextNode("Naber");
// cardbody.appendChild(text);
// console.log(cardbody);