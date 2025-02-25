
// Definire il prezzo per km
const priceKm = 0.21;
// Variabile Input Distanza da percorrere -> Variabile distanza da percorrere come numero float -> sostituiamo le virgole con i punti
let inputDistanceToTravel;
let distanceToTravel;
let distanceIsaNumber = true;
//Variabile Input età utente-> Variabile età come numero intero
let inputUserAge;
let userAge;
let ageIsaNumber = true;
// Definire sconto 
let discount = 0;
let discountValue = 0;
// Definire prezzo intero
let fullPrice;
// Definire prezzo finale 
let finalPrice;

// Comunichiamo il prezzo per km all'utente
console.log(`Il prezzo per ogni km è ${priceKm}€`);


do {
    // Variabile Input Distanza da percorrere -> sostituiamo le virgole con i punti  ->  Variabile distanza da percorrere come numero float 
    inputDistanceToTravel = prompt("Inserisci quanti km vuoi percorrere").replace(",", ".");
    distanceToTravel = parseFloat(inputDistanceToTravel);
    // Ripetiamo al utente la distanza da percorerre inserita. 
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


do {
    inputUserAge = prompt("Inserisci quanti anni hai");
    userAge = parseInt(inputUserAge);
    // Ripetiamo al utente il valore di età che ha inserito 
    console.log(`L'input che l'utente ha inserito come età l'utente è ${inputUserAge} anni`);
    // Se l'input dell'età è un numero
    if (!isNaN(userAge)) {
        //Se l'età è inferiore ai 18 anni
        if (userAge < 18) {
            //Lo sconto è del 20%
            discount = 20;
        } // Se l'età è supera i 65 anni
        else if (userAge >= 65) {
            // Lo scontro è del 40%
            discount = 40;
        }
        ageIsaNumber = true;
    } else {
        //Si avvisa l'utente di aver inserito un valore sbagliato e si ferma il programma
        alert(`Il valore ${inputUserAge} non è un numero.`);
        ageIsaNumber = false;
    }
} while (!ageIsaNumber)



// Se il prezzo completo del biglietto è un numero ed è maggiore di 0 e l'età del utente è un numero 
if ((!isNaN(fullPrice) && fullPrice > 0) && !isNaN(userAge)) {
    // Comunichiamo il prezzo pieno della corsa
    console.log(`Il prezzo pieno calcolato per questa corsa è di ${fullPrice}€`);
    // Se è presente dello sconto
    if (discount !== 0) {
        // Comunichiamo la % di sconto 
        console.log(`La riduzione per la fascia età è del ${discount}%`);
        // Calcoliamo il valore dello sconto
        discountValue = (fullPrice * discount) / 100;
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


