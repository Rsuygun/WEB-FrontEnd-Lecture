var degisken = "Değer"

function sayiUret(ustLimit){
  console.log(degisken)
  return Math.ceil(Math.random() * ustLimit)

}

console.log(degisken)

sayiUret()

var sayi1 = sayiUret(60)
var sayi2 = sayiUret(60)
var sayi3 = sayiUret(60)
var sayi4 = sayiUret(60)
var sayi5 = sayiUret(60)
var sayi6 = sayiUret(60)

//Math.random() 0 ile 1 arasında sayı üretmeye yarar.
//Math.ceil() ise üretilen sayıyı büyük sayıya yuvarlar.
//return anahtar kelimedir ve fonksiyonu çalıştırmak için kullanılır.
//Atanacak değişken globalde tanımlanmalıdır. Fonksiyon içinde değişken tanımlaması yapılamaz.



console.log("Kolon : " + sayi1 + " " + sayi2 + " " + sayi3 + " " + sayi4 + " " + sayi5 + " " + sayi6)
