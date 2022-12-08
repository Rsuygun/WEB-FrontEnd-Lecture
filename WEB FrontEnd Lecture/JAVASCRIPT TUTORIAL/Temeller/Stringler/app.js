let value;

const firstName = "Ramazan";
const lastName = "Uygun";
const langs = "Java,Pyhton,C++";

value = firstName + lastName;

value = firstName + " " + lastName;

value = "Ramazan Serhat" + " ";

value += "Uygun"; //value = value + "Uygun" yapmış olduk işlemi kısaltmış olduk.

value = firstName.length; //Atanan string değişkenin kaç karakter olduğunu gösterir.

value = firstName.concat(" ",lastName," ","Rap"); //birden fazla stringe uc uca eklemek için kullanılır.

value = firstName.toLowerCase(); //Atanan stringdeki bütün karakterleri küçültür.

value = firstName.toUpperCase(); //Atanan stringdeki bütün karakterleri büyütür.

value = firstName[0]; //Seçilen indexteki karakteri yazdırır.
value = firstName[2];
value = firstName[firstName.length - 1]; //Bize en sondaki indexi verir. Bunu kaç indexli olduğunu bilmediğimiz string değerlerinde son indexi bulmak için kullanırız.





// Index Of

value = firstName.indexOf("R"); //Bize girilen string değerindeki harfin index değerini gösterir.
value = firstName.indexOf("n");
value = firstName.indexOf("l"); //İçerisinde istediğimiz değer olmadığı zaman "-1" değerini yazdırır.



//Char At

value = firstName.charAt(0); //Seçilen indexteki karakteri yazdırır.
value = firstName.charAt(firstName.length - 1);



//Split

value = langs.split(","); //Parçalamasını istediğimiz alandan itibaren girilen string değerini parçalar.


//Replace 

value = langs.replace("Pyhton","CSS"); //Atadığımız stringler istediğimizi değiştirmek için kullanırız.


//Includes


value = langs.includes("Java"); //Atadığımız string değerleri arasında arama yapar.
//Aradığımız string değeri varsa "true", yoksa "false" yazdırır.
value = langs.includes("Mahmut");






console.log(value);