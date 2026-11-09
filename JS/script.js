let numeroSegreto;
const numeriInseriti = [];
let nTentativi = 7;
let giocoFinito = false;

function istruzioni() {
    let bottone = document.getElementById("bottoneIstruzioni");
    let istruzioni = document.getElementById("istruzioni");

    bottone.classList.toggle("bi-arrow-down-circle-fill");
    bottone.classList.toggle("bi-arrow-right-circle");

    istruzioni.classList.toggle("d-none");
}

function gioca() {
    let gioco = document.getElementById("gioco");
    let bottone = document.getElementById("bottoneGioca");
    bottone.disabled = true;

    numeroSegreto = Math.floor(Math.random() * 100);

    console.log(numeroSegreto);
    gioco.classList.remove("d-none");
}

function indovina() {
    let form = document.getElementById("input");
    let stampaVettore = document.getElementById("vettore");
    let numeroInserito = document.getElementById("input").value;
    numeroInserito = Number.parseInt(numeroInserito);

    if(isNaN(numeroInserito)) return;
    if(numeriInseriti.includes(numeroInserito)) {
        alert("Numero già inserito");
        return;
    }

    if(!giocoFinito) {
        numeriInseriti.push(numeroInserito);
        nTentativi--;
        suggerimento(numeroInserito);
        numeroTentativi();
    }

    if (numeroInserito == numeroSegreto) {
        vittoria();
    } else if(nTentativi <= 0) {
        sconfitta();
    } 

    stampaVettore.innerHTML = numeriInseriti.join(" - ");
    form.value = "";
}

function vittoria() {
    let gioco = document.getElementById("gioco");

    giocoFinito = true;
    gioco.classList.replace("bg-white", "bg-success");
    console.log("hai vinto");
}
function sconfitta() {
    let gioco = document.getElementById("gioco");
    
    giocoFinito = true;
    gioco.classList.replace("bg-white", "bg-danger");
    console.log("hai perso");
}

function suggerimento(numeroInserito) {
    let suggerimento = document.getElementById("suggerimento");

    if(numeroInserito > numeroSegreto) {
        suggerimento.innerHTML = "il numero che cerchi è più piccolo";
    } else {
        suggerimento.innerHTML = "il numero che cerchi è più grande";
    }
}

function numeroTentativi() {
    let tentativi = document.getElementById("tentativi");
    tentativi.innerHTML = nTentativi;
}