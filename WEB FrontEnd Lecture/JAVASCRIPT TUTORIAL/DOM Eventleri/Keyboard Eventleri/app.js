//Klavye Eventleri 



//keypress
// document.addEventListener("keypress",run); //Yön tuşları ve yan tuşlar hariç bütün tuşları bastırır.

// function run(e){
//     console.log(e.which); //Hangi karakteri bastığımızı ASCII üzerinden yazdırır.
//     console.log(e.key); //Hangi karakteri bastıysak o karakteri yazdırır.
//     console.log("Naber");
// }


//keydown
// document.addEventListener("keydown",run); //Bütün tuşları bastırır.

// function run(e){
//     console.log(e.which); //Hangi karakteri bastığımızı ASCII üzerinden yazdırır.
//     console.log(e.key); //Hangi karakteri bastıysak o karakteri yazdırır.
//     console.log("Naber");
// }


//keyup
// document.addEventListener("keyup",run); //Bir tuşu bıraktığımız zaman event çalışır. Bu eventte de yön tuşları ve yan tuşlar hariç hepsini yazdırır.

// function run(e){
//     console.log(e.which); //Hangi karakteri bastığımızı ASCII üzerinden yazdırır.
//     console.log(e.key); //Hangi karakteri bastıysak o karakteri yazdırır.
//     console.log("Naber");
// }

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
    // console.log(e.target.value);
}