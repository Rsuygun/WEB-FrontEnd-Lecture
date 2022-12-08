//Karşılaştıma Oparatörleri:
/*
  "==" İki tane değerin eşitliğini kontrol eder.
  "===" İki tane değerin eşitliğini ve tiplerinin eşitliğini kontrol eder.
  "!=" İki tane değerin eşit olmadığını olmadığını kontrol eder.
  "!==" İki tane değerin eşitsizliğini ve tiplerinin eşitsizliğini kontrol eder.
  ">" Sol taraftaki değer sağ tarafdaki değerden büyük mü diye kontrol eder.
  "<" Sol taraftaki değer sağ tarafdaki değerden küçük mü diye kontrol eder.
  ">=" Sol tarfatki değer sağ tarafdaki değerden büyük mü veya eşit mi diye kontrol eder.
  "<=" Sol tarfatki değer sağ tarafdaki değerden küçük mü veya eşit mi diye kontrol eder.
*/

console.log(2 == 2);   //True
console.log("js" == "Java"); //False
console.log(2 == "2"); //True

console.log(2 === "2"); //False

console.log(2 != 4); //True
console.log(2 != 2); //False

console.log(2 !== "4"); //True

console.log(4 > 2); //True
console.log(2 > 4); //False

console.log(2 < 4); //True
console.log(4 < 2); //False

console.log(4 >= 2); //True
console.log(2 >= 2); //True
console.log(2 >= 4); //False

console.log(2 <= 4); //True
console.log(2 <= 2); //True
console.log(4 <= 2); //False


//MANTIKSAL BAĞLAÇLAR

/*Not Operatörü:
    Bir değer true ise false'a, false ise true'a çevirir.
*/

console.log(!(2 == 3)); //True

/*And Operatörü:
    Bütün bağlananların içindeki değerlerden 1 tanesi bile false ise sonuç her zaman false çıkar.
    "&&" and operatörünün işaretidir.
*/

console.log((2 == 2) && ("Ramazan" == "Ramazan")); //True
console.log((4 == 2) && ("Ramazan" == "Ramazan")); //False

/*Or Operatörü:
    Bütün bağlananların içindeki değerlerden 1 tanesi bile true ise sonuç her zaman true çıkar.
    "||" or operatörünün işaretidir.
*/

console.log((4 == 2) || ("Ramazan" == "Ramazan")); //True
console.log((4 == 2) || ("Ramazan" == "Ali")); //False
 




/*
if bloğunda belirlenen koşul doğruysa bloğun içerisindeki işlemi yapıp devam eder.
Eğer yanlışsa if bloğunun içine uğramadan işleme devam eder.
if bloğu koşulu yanlışsa arkasından oluşturduğumuz "else" bloğu içerisindeki işlem yapılır.
Birden çok koşul yazmak istediğimizde "elseif" bloğunu kullanırız.
*/

const error = false;

if(error == true) {
    console.log("Hata Oluştu");
}
else {
    console.log("Hata Oluşmadı")
}



const user = "mmc";

if (user === "mmc"){
    console.log("Kullanıcı Bulundu");
}
else {
    console.log("Kullanıcı Bulunmadı");
}


const process = "1";

if (process === "1"){
    console.log("İşlem 1");
}
else if(process === "2"){
    console.log("İşlem 2");
}
else if(process === "3"){
    console.log("İşlem 3");
}
else if(process === "4"){
    console.log("İşlem 4");
}
else{
    console.log("Geçersiz İşlem");
}



const number = 100;

if(number === 100){
    console.log("Sayı 100'e eşit");
}
else {
    console.log("Sayı 100'e eşit değil");
}

//Ternary Operatör
/*
Bu operatör tek koşullu durumları daha kısa şekilde incelememizi sağlar.
"?" doğru ise yazdırılacak durumu belirler
":" yanlış ise yazdırılacak durumu belirler
*/

const sayi = 120;

console.log(sayi === 100 ? "Sayı 100" : "Sayı 100 Değil");

/*
Yapacağımız koşul işlemi sadece 1 işlem içeriyorsa "{}" parantezini kullanmamıza gerek yoktur.
*/

const sayi2 = 100;

if(sayi2 === 100)
    console.log("Sayı 100");
else 
    console.log("Sayı 100 Değil");
