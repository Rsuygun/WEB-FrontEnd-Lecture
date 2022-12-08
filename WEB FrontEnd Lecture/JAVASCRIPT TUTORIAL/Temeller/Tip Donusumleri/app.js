let value;

// Veri Tiplerini String'e Çevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4]);

//Her şeyi Stringe çevirebileceğimizi görmüş olduk. 

value = (10),toString();
value = (3.14),toString();
//Bu komutları kullanarakta stringe çevirme işlemini gerçekleştirmiş oluyoruz.



//Veri Tiplerini Sayıya Çevirme 

value = Number("123");
value = Number(null); //Sayıya çevirdiğimizde "0" değerini alırız.
value = Number(undefined); //Sayıya çevirdiğimde "NaN" değerini alırız. Çünkü bu bir sayı değildir.
value = Number("Hello World"); //Sayıya çevirdiğimizde "NaN" değerini alırız. Çünkü bi sayı değeri girilmedi.
value = Number(function(){console.log()}); //Sayıya çevirdiğimizde yine "NaN" değerini alırız.
value = Number([1,2,3,4]); //Sayıya çevirdiğimizde yine "NaN" değerini alırız.
// Sadece içinde sayı olan stringler ve null'lar sayıya dönüşütürülebişiyor.

value = Number("3,14");
value = parseFloat("3,14"); //Ondalıklı sayılar için kullanılır.
value = parseInt("3"); //Tam sayılar için kullanılır.




const a = "Hello" + 34;
console.log(a);
console.log(typeof a);

const b = Number("34") + 53;
console.log(b);
console.log(typeof b);


console.log(value);
console.log(typeof value);