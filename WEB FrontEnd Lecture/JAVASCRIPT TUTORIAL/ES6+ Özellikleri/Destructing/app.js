
// let number1, number2;

// arr = [100, 200, 300, 400];

// number1 = arr[0];
// number2 = arr[1];

//Destructing

// [number1, number2] = arr;

//Bu şekilde 1 satırda da istediğimizi yazdırabiliyoruz.
// const [number1, number2] = arr;
// console.log(number1, number2);

//Obje

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };

//Köşeli parantez arraylerde süslü parantez ise objelerde kullanılır.
// const {a:number1, c:number2, e:number3} = numbers;
//Değişkenleri başka bir değişken şeklinde tanımlamak istersek "a:number1, c:number2, e:number3" örnekteki gibi kullanabiliriz.
// console.log(number1, number2, number3);

//Function Destructing

// const getLangs = () => ["Pyhton", "Java", "C++"];

// const [lang1, lang2, lang3] = getLangs();

// console.log(lang1, lang2, lang3);

//Obje

const person = {
    name:"Ramazan Serhat",
    year:1993,
    salary:3000,
    showInfos : () => console.log("Bilgiler Gösteriliyor...")
}

const {name:isim, year:yil, salary:maas, showInfos:bilgileriGoster} = person;

console.log(isim, yil, maas);
bilgileriGoster();







