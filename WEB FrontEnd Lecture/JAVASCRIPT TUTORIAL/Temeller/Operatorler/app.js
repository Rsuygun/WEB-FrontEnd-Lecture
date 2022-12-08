let value;

const value1 = 10;

const value2 = 4;

//Aritmetik Oparatörler

// value = value1 + value2;
// value = value1 - value2;
// value = value1 * value2;
// value = value1 / value2;
// value = value1 % value2;


value = Math.PI;
value = Math.E;
value = Math.round(3.6); //Sayıları yuvarlamak için "Math.round" kullanılır.
value = Math.round(3.5);
value = Math.round(3.4);


value = Math.ceil(3.2); //Bütün ondalıklı sayıları bir büyüğü olan integer değerine yuvarlar.
value = Math.ceil(3.7);


value = Math.floor(3.7); //Bütün ondalıklı sayıları bir küçüğü olan integer değerine yuvarlar.
value = Math.floor(3.2);


value = Math.sqrt(16); //Karekök alma methodu
value = Math.sqrt(31);


value = Math.abs(-10); //Mutlak değer fonksiyonu için kullanılır


value = Math.pow(8,3); //Üs alma methodu Örnek olarak 8 in 3 üncü kuvvetini almak istediğimizde "(8,3)" yazarız.
value = Math.pow(7,9);


value = Math.max(1,42,3546,32,-1245); //Bu method ile girdiğimiz integer değişkenleri arasında en büyüğünü seçeriz.


value = Math.min(14325,-1234,346,5647); //Bu method ile girdiğimiz integer değişkenleri arasında en küçüğünü seçeriz.


value = Math.random(); //Rastgele sayı üretme methodu 0 ile 1 arasında random ondalık sayı üretir.
value = Math.random() * 20; // 0 ile 20 arasında random ondalık sayı üretir.
value = Math.random() * 20 + 1; //1 ile 20 arasında random ondalık sayı üretir.


value = Math.floor(Math.random() * 20 + 1); //Bu şekilde 1 ile 20 arasında oluşan random ondalıklı sayıları aşağıya yuvarlayarak integer değerlere çevirmiş olduk.


console.log(value);