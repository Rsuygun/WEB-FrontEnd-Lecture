const name = "Ramazan Serhat UYGUN";
const department = "Yazılım";
const salary = 5000;


// const a = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary;

// "``" bu işateri kullanmak için "Alt Gr + ;;" yapmamız gerekir.
//Bu işaretin faydası aradaki "+" işaretlerini kaldırarak yazma işlemimizi daha baside indirgemek.

// const a = `İsim:${name}\nDepartman:${department}\nMaaş:${salary}`;


// const html = "<ul>" + 
//              "<li>" + name + "</li>" +
//              "<li>" + department + "</li>" +
//              "<li>" + salary + "</li>" + 
//              "</ul>";

function a(){
    return "Merhaba";
}

const html = `
       <ul>
       <li>${name}</li>
       <li>${department}</li>
       <li>${salary}</li>
       <li>${10 / 4}</li>
       <li>${a()}</li>
       </ul>
    `;

document.body.innerHTML = html; 