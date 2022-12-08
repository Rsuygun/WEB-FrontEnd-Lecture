//Window Object

//console.log(this.document); //Bunun sayesinde HTML sayfamızı görebiliyoruz.
// "console.log(document);" Aynı sonucu verir.
let value;

value = document;
value = document.all;
value = document.all.length;
value = document.all[0];
value = document.all[document.all.length - 1];

// const elements = document.all; //HTML Collection
// for(let i = 0; i < elements.length;i++){
//     console.log([i]);
// }
// elements.forEach(function(element) {
//     console.log(element);   
// });

//HTML Collection elementlerinde sadece "for" döngüsünü kullanabiliriz.

// const collections = Array.from(document.all);

// collections.forEach(function(collection){
//     console.log(collection);
// });

//HTML Collection üzerinde gezinmek istersek önce arraye çevirmemiz gerekir.

value = document.all["Body'nin olduğu index"];
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;

value = document.URL;


value = document.characterSet;
console.log(value);
