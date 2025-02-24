
// Definire il prezzo per km
const priceKm = 0.21;
// Variabile Input Distanza da percorrere -> Variabile distanza da percorrere come numero float
const inputDistanceToTravel = prompt("Inserisci quandi km vuoi percorrere");
const distanceToTravel = parseFloat(inputDistanceToTravel);
//Variabile Input età utente-> Variabile età come numero intero
const inputUserAge = prompt("Inserisci quanti anni hai");
const userAge = parseInt(inputUserAge);
// Definire Prezzo finale
let  fullPrice = 0;

console.log(`Il prezzo per ogni km è ${priceKm}€`)
console.log(`L'input che l'utente ha inserito come età l'utente è ${inputUserAge} anni`)
console.log(`L'input che l'utente ha inserito come distanza da percorrere è ${inputDistanceToTravel} km`);


// Se l'input della distanza è un numero
if (!isNaN(distanceToTravel)) {
    //Si calcola il prezzo intero con il prodotto del prezzo al km e distanza di viaggio
    fullPrice = priceKm * distanceToTravel;
}
else {
    //Si avvisa l'utente di aver inserito un valore sbagliato
    alert(`Il valore ${inputDistanceToTravel} non è un numero.`)
}

console.log(`Il prezzo pieno calcolato per questa corsa è di ${fullPrice}€`);
