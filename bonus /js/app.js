
// Definire il prezzo per km
const priceKm = 0.21;
// Variabile Input Distanza da percorrere -> Variabile distanza da percorrere come numero float -> sostituiamo le virgole con i punti
let  inputDistanceToTravel;
let distanceToTravel;
let distanceIsaNumber = true; 
//Variabile Input età utente-> Variabile età come numero intero
const inputUserAge = prompt("Inserisci quanti anni hai");
const userAge = parseInt(inputUserAge);
// Definire sconto 
let discount = 0;
let discountValue = 0;
// Definire prezzo intero
let fullPrice;
// Definire prezzo finale 
let finalPrice;

// Comunichiamo il prezzo per km all'utente
console.log(`Il prezzo per ogni km è ${priceKm}€`);
// Ripetiamo al utente il valore di età che ha inserito 
console.log(`L'input che l'utente ha inserito come età l'utente è ${inputUserAge} anni`);
// Ripetiamo al utente la distanza da percorerre inserita. 


do {
    // Variabile Input Distanza da percorrere -> sostituiamo le virgole con i punti  ->  Variabile distanza da percorrere come numero float 
     inputDistanceToTravel = prompt("Inserisci quanti km vuoi percorrere").replace(",", ".");
     distanceToTravel = parseFloat(inputDistanceToTravel)
     console.log(`L'input che l'utente ha inserito come distanza da percorrere è ${inputDistanceToTravel} km`);
    // Se l'input della distanza è un numero
    if (!isNaN(distanceToTravel) && distanceToTravel > 0) {
        //Inizializziamo il prezzo intero calcolandolo con il prodotto del prezzo al km e distanza di viaggio
        fullPrice = priceKm * distanceToTravel;
        distanceIsaNumber = true;
    }
    else {
        //Si avvisa l'utente di aver inserito un valore sbagliato e si ferma il programma
        alert(`Il valore ${inputDistanceToTravel} non è un input valido.`);
        distanceIsaNumber = false;
    }
} while (!distanceIsaNumber)






// Se il prezzo completo del biglietto è un numero ed è maggiore di 0 e l'età del utente è un numero 
if ((!isNaN(fullPrice) && fullPrice > 0) && !isNaN(userAge)) {
    // Comunichiamo il prezzo pieno della corsa
    console.log(`Il prezzo pieno calcolato per questa corsa è di ${fullPrice}€`);
    // Se è presente dello sconto
    if (discount !== 0) {
        // Comunichiamo la % di sconto 
        console.log(`La riduzione per la fascia età è del ${discount}%`);
        // Calcoliamo il valore dello sconto
        discountValue = (fullPrice * discount) / 100
        // Comunichiamo il valore numerico dello sconto
        console.log(`Il valore dello sconto è di ${discountValue}€`);
    } else {
        // Comunichiamo che non è presente sconto
        console.log("Per questa corsa non è presente sconto");
    }

    // Inizializziamo il valore del prezzo finito calcolandolo con la differenza tra fullPrice e discountValue
    finalPrice = parseFloat((fullPrice - discountValue).toFixed(2));
    // Comunichiamo il prezzo finito al utente 
    console.log(`Il prezzo finito per questo biglietto è di ${finalPrice}€`);
}


