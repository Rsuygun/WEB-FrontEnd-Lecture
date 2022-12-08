// "scope" kavramı bize bir değişkenin nerelerde var olabileceğini söyler.
//"scope" teriminin türkçesi "kapsam" dır.
/* 3 farklı scope bulunur.
1. Global scope
2. Function scope
3. Block scope
*/ 

/*1. Global scope
Herhangi bir fonksiyon,if,while içinde olmayan kısımdır.
*/

/*
function a(){
    Burası function scope olarak geçer.
}
*/

/*
if(){
    Burası block scope olarak geçer. 
    Bunun yanı sıra while da block scope olarak geçer.
}
*/




// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// function func(){
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;

//     console.log(value1,value2,value3);
// }
// func();

// if(true){
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;
//     console.log(value1,value2,value3);
// }

// console.log(value1,value2,value3);

//Bu şekilde yaptığımızda "var" değişkenleri block dışında da çalıştığı için başka yerde tanımlanan "var" değişkenini bozdu.

// "var" değişkenleri block dışında da var olabilirler fakat "let" ve "const" değişkenleri block dışında var olamazlar.

// console.log(value1,value2,value3);

