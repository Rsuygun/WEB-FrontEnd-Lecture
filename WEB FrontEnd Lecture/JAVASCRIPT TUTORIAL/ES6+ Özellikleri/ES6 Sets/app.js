//Sets(Kümeler)

const mySet = new Set();

//Birden fazla aynı değeri girdiğimiz zamanda sadece bir kere aynı değeri yazdırır.
mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Ramazan");
mySet.add(true);
mySet.add([1, 2, 3]);
mySet.add({a:1, b:2});
//İki şekilde de set oluşturabiliyoruz.
const mySet2 = new Set([100, 3.14, "Ramazan", true, [1, 2, 3], {a:1, b:2}]);

// console.log(mySet);
// console.log(mySet2);

//Size
// console.log(mySet.size);
// console.log(mySet2.size);

//Delete Metodu - Silmek istediğimiz değer varsa siler yoksa hata vermeden ve silme işlemi gerçekleştirmeden işleme devam eder.

// mySet.delete("Ramazan");

// console.log(mySet);
// console.log(mySet.size);


//Has Metodu - Bu metod sayesinde kümeye verdiğimiz değerin olup olmadığını sorgulayabiliyoruz.

// console.log(mySet.has("Ramazan"));
// console.log(mySet.has(3.14));
// console.log(mySet.has(2000));
// console.log(mySet.has([1, 2, 3])); //Burada false sonucunu almamızın sebebi referans veri tipi olduğu için.

//For Each

// mySet.forEach(function(value){
//     console.log(value);
// })

//For Of

// for(let value of mySet){
//     console.log(value);
// }

//Setlerden aray oluşturma

const array = Array.from(mySet);

console.log(array);






