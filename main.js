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

    const carrozza = document.getElementById('carrozza')

    console.log(nomeUtente,km_treno,age )

    let price = km_treno * 0.21;
    let prezzo_finale;

    // Se l'età è minore di 18 applico uno sconto del 20%
    if(age == "minorenne"){
        let sconto = price * 0.2;
        prezzo_finale = price - sconto;
        const scriverePrezzo = document.getElementById('prezzo_finale')
        scriverePrezzo.innerHTML = prezzo_finale.toFixed(2) ;
    }


    // Se l'età è maggiore di 65 applico uno sconto del 40%
    else if(age == "over65"){
        let sconto = price * 0.4;
        prezzo_finale = price - sconto;
        const scriverePrezzo = document.getElementById('prezzo_finale')
        scriverePrezzo.innerHTML = prezzo_finale.toFixed(2);
    }
     // Altrimenti non applicare nessuno sconto
    else {
        const scriverePrezzo = document.getElementById('prezzo_finale')
        scriverePrezzo.innerHTML = price.toFixed(2);
    }
    
    carrozza.innerHTML = randomNumber(1,99)

} )

function randomNumber(min,max) {
Math.floor(Math.random() * max) + min;
}