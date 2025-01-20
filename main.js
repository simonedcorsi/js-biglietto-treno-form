// Chiedo all'utente la distanza da percorrere e l'età
let kmtreno = ("Quanti Km desideri percorerre?");
let eta = ("Quanti anni hai?");

// Calcolo il prezzo di base (kilometri* tariffa al kilometro)
let price = kmtreno * 0.21;


// Se l'età è minore di 18 applico uno sconto del 20%
if(eta < 18){
    let discount = price * 0.2;
    price = price - discount;
}


// Se l'età è maggiore di 65 applico uno sconto del 40%
if(eta > 65){
    let discount = price * 0.4;
    price = price - discount;
}


// Prezzo finale biglietto
console.log('Il tuo biglietto costa: '+price+' €');




// Creare evento al click del bottone Genera

const inputAge = document.getElementById('age');

const button = document.getElementById('genera');
button.addEventListener ( 'click', function() {


// Inserire nel html nome e cognome passeggero
const inputNname = document.getElementById('name');//<input type="text" id="name" value=""></input>
const nomeUtente = inputNname.value;

const doveDevoScrivere = document.getElementById('nome_utente')
doveDevoScrivere.innerHTML = nomeUtente;


// Chiedere Km da fare 
const inputKm = document.getElementById('km');
const km_treno = inputKm.value;

const scrivereKmtreno = document.getElementById('km_treno')
scrivereKmtreno.innerHTML = km_treno;
// Chiedere età passeggero


// Se l'età è minore di 18 applico uno sconto del 20%


// Se l'età è maggiore di 65 applico uno sconto del 40%


// Inserire nel html costo biglietto 

} )