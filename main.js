// Chiedo all'utente la distanza da percorrere e l'età
let kmtreno = parseInt(prompt("Quanti Km desideri percorerre?"));
let eta = parseInt(prompt("Quanti anni hai?"));

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