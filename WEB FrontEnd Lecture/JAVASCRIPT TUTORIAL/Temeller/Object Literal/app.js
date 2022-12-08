let value;

const programmer = {
    name : "Ramazan Serhat Uygun",
    age : 23,
    email : "rsuygun@outlook.com",
    langs : ["C#","Html","CSS","Javascript"],

    address : {
        city : "Malatya",
        street : "Özlaper"
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }
}

value = programmer;

value = programmer.email; //Genel olarak bu kullanılır.
value = programmer["email"];

value = programmer.langs;

value = programmer.address.city;

programmer.work();

const programmers = [
    {name: "Ramazan Serhat", age:23},
    {name: "Akın",age : 22}
];


value = programmers[0].name;

console.log(value);