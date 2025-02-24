# Biglietto del treno

### Richiesta:

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - va applicato uno sconto del 20% per i minorenni
 - va applicato uno sconto del 40% per gli over 65.
 - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

 --- 

 ### Soluzione:

  - **Preparazione**: 

    - Definire la costante per il prezzo per km - Variabile priceKm

    - Definire attraverso l'input la distanza da percorrere
    -Definire la variabile del prezzo intero
    - Si converte in un numero float
      - Se l'input è un numero: 
        - Iniziallizare la variabile prezzo intero con il calcolo del prodotto del prezzo al km e distanza di viaggio
      - Se il numero è uguale a 0:
        - Si avvisa l'utente di aver inserito 0 come distanza e si interrompe il programma 
      - Altrimenti: 
        - Si avvisa l'utente di aver inserito un valore sbagliato e si interrompe il programma 

    - Definire la variabile sconto uguale a 0 
    - Definire il valore numerico dello sconto uguale a 0 
    - Definire attraverso l'input l' età del utente
    - Si converte in un numero intero 
        - Se l'input è un numero 
          - Se l'età è inferiore ai 18 anni 
            - inizializzare variabile sconto a 20%  
          - Se l'età è supera i 65 anni 
            - inizializzare variabile sconto al 40% 
          - Altrimenti 
            - lasciare la variabile sconto a 0
      - Altimenti
         - Si avvisa l'utente di aver inserito un valore sbagliato e si interrompe il programma
    
    
    - Definire prezzo finale




  - **Gestione dati**: 

    - Se lo sconto è maggiore di 0 
       - Iniziallizzazione del valore numerico dello sconto attraverso il calcolo della % dal prezzo intero
    

    - Iniziallizzazione del prezzo finale da calcolare con la differenza di full price e il valore numerico dello sconto 
    - Aggiungi la proprietà toFixed(2) al prezzo finale dei numeri float per evitare di avere troppi numeri dopo la virgola

    - Si mostra all'utente il prezzo finale