//Fonksiyon Tanımlama

// function merhaba(name = "Bilgi Yok",age = "Bilgi Yok"){

     // if(typeof name === "undefined") 
     //     name = "Bilgi Yok";

     // if(typeof age === "undefined")
     //     age = "Bilgi Yok";
    
//     console.log(`İsim: ${name} \n Yaş: ${age}`);
// }
// merhaba("Ramazan",23); //Fonsksiyon Çağrısı(Function Call) olarak geçer.

// merhaba("Ayşe",30);

// merhaba();

// merhaba("Kadir");


// function square(x){
//     return x*x;

//     console.log("Naber"); //Hiç bir zaman çalıştırılmaz.
// }
// function cube(x){
//     return x*x*x;
// }

// let a = cube(square(12));

// console.log(a);

// "return" bir diğer anlamı ise fonksiyonu sonlandırmadır.
// "return" altına bir fonksiyon yazıldığı zaman o fonksiyon çalışmaz.



// function merhaba(){
//     return "Merhaba";
// }

// console.log(merhaba());


//Function Expression

// const merhaba = function(name){
//     console.log("Merhaba " + name);
// }

// merhaba("Ramazan");


//Immediately Invoked Function Expression (IIFE) 
//Tanımlandığı yerde çalışan fonksiyon


// (function(name){
//     console.log("Merhaba " + name);
// })("Ramazan");


const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete:function(id){
        console.log(`Id: ${id} Silindi`);
    }
}

console.log(database.host);
database.add();
database.get();
database.update(20);
database.delete(20);

