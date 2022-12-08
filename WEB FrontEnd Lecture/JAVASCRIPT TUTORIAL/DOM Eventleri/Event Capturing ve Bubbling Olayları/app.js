//Event Bubbling - Event uyguladığımız her hangi bir child tan bubbling sayesinde parentınada event işlemi uygulayabiliyoruz.

// document.querySelector(".container").addEventListener("click",run);

// function run(e){
//     console.log("Div Container");
// }

// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row");
// })

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");
// });

//Event Capturing(Delegation) - "Event Bubbling" in tam tersi işlemi yapıyor diyebiliriz.

const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click",run);

function run(e){
    if(e.target.className === "fa fa-remove"){
        console.log("Silme İşlemi");
    }
    if(e.target.id === "filter"){
        console.log("Filtreleme İşlemi");
    }
    if(e.target.id === "clear-todos"){
        console.log("Tüm Taskları Silme İşlemi");
    }
    // console.log(e.target);
}


