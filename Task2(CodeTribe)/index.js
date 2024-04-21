let name = "Simphiwe";
let province = "KZN";
let bio = `Hi, I am a young self-motivated aspiring software developer from ${province}. 
            I build websites and applications to help businesses grow & do better online in this digital period.`;

let nameElement = document.createElement("h1");
nameElement.innerHTML = `<span>Sim</span>ph<span>i</span>we`;

let bioElement = document.createElement("h3");
bioElement.textContent = bio;

let container = document.querySelector(".info");

container.appendChild(nameElement);
container.appendChild(bioElement);
