//While Döngüleri

// let i = 0;

// while (i < 10) {
//     console.log(i);

//     i++; // "i += 1" ve "i = i + 1" ile aynı anlama gelir. Arttırmak için kullanılır.
    
// }


// let i = 10;

// while(i > 0){
//     console.log(i);

 //    i--; // "i -= 1" ve "i = i - 1" ile aynı anlama gelir. Azaltmak için kullanılır. 
//     i -= 2;
// }



// Break ve Continue

//Break koşulumuz doğru olsa bile işlemi durdurur.

// let i = 0;

// while(i < 10){
//     console.log(i);
//     if(i == 5){
//         break;
//     }
//     i++;
// }

//Continue döngü bloğunun gerisi çalıştırılmadan tekrar başa gitmesini sağlar.


// let i = 0;

// while(i < 10){  //Sonsoz Döngü
//     if(i == 3 || i == 5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }



//Do While Döngüleri
//En az bir defa çalışma garantisi vardır.

// let i = 0;

// do{
//     console.log(i);
//     i++;
// }while(i < 10);



//For Döngüleri


const langs = ["Pyhton","CSS","Java"];

// let index = 0;

// while(index < langs.length){
//     console.log(langs[index]);

//     index++;
// }


// for(let index = 0;index < langs.length;index++){
//     console.log(langs[index]);
// }

//ForEach Methodu

// langs.forEach(function(lang,index){
//     console.log(lang,index);
// });

// const users = [
//     {name: "Ramazan",age:23},
//     {name: "Nihat",age:58},
//     {name: "Zeynep",age:53}
// ];


//Map methodu

// const names = users.map(function(user){ 
//     return user.name;
// })
// const ages = users.map(function(user){
//     return user.age;
// })
// console.log(names);
// console.log(ages);


//For in döngüsü 


const user = {
    name: "Ramazan",
    age: 23
};

for(let key in user){
    console.log(key,user[key]);
}