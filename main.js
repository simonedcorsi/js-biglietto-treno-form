// Creare evento al click del bottone Genera

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
const inputAge = document.getElementById('age');
const age = inputAge.value;

console.log(nomeUtente,km_treno,age )

// Se l'età è minore di 18 applico uno sconto del 20%
const finalPrice = document.getElementById('prezzo_finale')
const prezzo_finale = prezzo_finale.value;

const scriverePrezzo = document.getElementById('prezzo_finale')
scriverePrezzo.innerHTML = prezzo_finale;


if(age < 18){
    let discount = price * 0.2;
    price = price - discount;
}


// Se l'età è maggiore di 65 applico uno sconto del 40%
if(age > 65){
    let discount = price * 0.4;
    price = price - discount;
}


// Prezzo finale biglietto
console.log('Il tuo biglietto costa: '+price+' €');


// Inserire nel html costo biglietto 

} )