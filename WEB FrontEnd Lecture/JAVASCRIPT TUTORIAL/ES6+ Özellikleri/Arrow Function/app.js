// const merhaba = function(){
//     console.log("Merhaba");
// }

// merhaba();

//Arrow Function

// const merhaba = () => {
//     console.log("Merhaba");
// }
// merhaba();
//Tek parametre yazmak istersek parantez içine almak zorunda değiliz.
//Hiç bir parametre almazsa parantez koymak zorundayız. Çünkü Arrow Function olduğunu belli etmeliyiz.

//Fonksiyonda tek bir işlem yaptırdığımızda süslü parantezlere de gerek yok.
// const merhaba = firstName => {
//     console.log("Merhaba", firstName);
// }
// merhaba("Ramazan");

// const merhaba = (firstName, lastName) => console.log("Merhaba", firstName, lastName);
// merhaba("Ramazan","Uygun");

// const cube = function(x){
//     return x * x * x;
// }
// console.log(cube(5));

// const cube = x => {
    //     return x * x * x; 
    // }
    // console.log(cube(5));
    
//Tek bir işlem yaptığı için süslü parantezlere ve return a gerek yoktur.

const cube = x => x * x * x; 
console.log(cube(5));


