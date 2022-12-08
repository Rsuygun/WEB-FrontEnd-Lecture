let value;

const numbers = [24,56,78,423,3465,7,12];

// const numbers2 = new Array(1,2,3,4,5,6,7,8);

const langs = ["Pyhton","Java","C++","Javascirpt"];

const a = ["Merhaba",22,null,undefined,3.14];
//Uzunluk
value = numbers.length;
//Indeksleme
value = numbers[0];
value = numbers[5];
value = numbers[numbers.length -1];


//Herhangi bir inndeksteki değeri değiştirme 
numbers[2]; 1000;

value = numbers;

//Index Of

value = numbers.indexOf(1000);

//Arrayin sonuna değer ekleme "Push"

numbers.push(2000);

//Arrayin başına değer ekleme "Unshift"

numbers.unshift(213);

value = numbers;

//Arrayin sonundan değer çıkarma "pop"

numbers.pop()

value = numbers;

//Arrayin başından değer çıkarma "shift"

numbers.shift();

value = numbers;

//Arraydaki belli bir indeks aralığını çıkarma "spilce"

numbers.splice(0,3);

value = numbers;

//Arrayi tam tersine çevirme "Reverse"

numbers.reverse();

value = numbers;

//Arraydaki değerleri sıralama "sort"
//"Sort" sıralama yaparken sadece ilk haneye bakarak küçükten büyüğe sıralama yapar.

value = numbers.sort();


//Küçükten büyüğe sıralamak için fonksiyon oluşturmamız gerekir.
value = numbers.sort(function(x,y){
    return x - y; 
});

//Büykten küçüğe sıralama
value = numbers.sort(function(x,y){
    return y - x;
});

console.log(value);