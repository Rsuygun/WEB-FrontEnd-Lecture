// console.log(this);
//"this" bulunduğumuz en genel objeyi belirtir.


//Alert

// alert("Merhaba");

//confirm

// console.log(cevap);


// if(confirm("Emin misiniz?")){
//     console.log("Silin Gitsin");
// }
// else{
//     console.log("Silmeyin");7
// }


//Prompt

// const cevap = prompt("2 + 2 = ?");

// if(cevap == "4"){
//     console.log("Doğru Cevap");
// }
// else{
//     console.log("Yanlış Cevap");
// }


let value;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

// if(confirm("Sayfa Yenilensin mi?")){
//     window.location.reload;
// }
// else{
//     console.log("Sayfa Yenilenmedi");
// }


value = window.outerHeight; //piksel uzunluğunu web sekmesinin her yerini alarak göstermek için kullanılır.
value = window.outerWidth; //piksel genişliğini web sekmesinin her yerini alarak göstermek için kullanılır.


value = window.innerHeight; //piksel uzunluğunu web sekmesinin sadece içini alarak göstermek için kullanılır.
value = window.innerWidth; //piksel genişliğini web sekmesinin sadece içini alarak göstermek için kullanılır.

value = window.scrollX; //x ekseninden ne kadar scroll edildiğini göstermek için kullanılır.
value = window.scrollY; //y ekseninden ne kadar scroll edildiğini göstermek için kullanılır.

console.log(value);
