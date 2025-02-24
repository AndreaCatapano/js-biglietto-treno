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
  
    - Definire il prezzo per km - Variabile priceKm
    - Definire la variabile del prezzo intero
    - Definire la variabile sconto
    - Definire prezzo finale
    - Definire prezzo Utente
    - Variabile Input Distanza da percorrere -> Richiedi input numero km all'utente -> si rende float 
      - Se l'input è un numero: 
        - Si calcola il prezzo intero con il prodotto del prezzo al km e distanza di viaggio
      - Altrimenti: 
        - Si avvisa l'utente di aver inserito un valore sbagliato 
   - Variabile Input età utente-> Richiedi input dell'età del cliente -> si rende intero 
        - Se l'input è un numero 
          - Se l'età è inferiore ai 18 anni 
            - Lo sconto è del 20% 
          - Se l'età è supera i 65 anni 
            - Lo scontro è del 40%
          - Altrimenti 
            - Non ci sta sconto
      - Altimenti
         - Si avvisa l'utente di aver inserito un valore sbagliato 

  - **Gestione dati**: 

    - Se lo sconto è maggiore di 0 
       - Il prezzo finale è da calcolare applicando la formula per sottrarre la % di sconto al prezzo completo 
    - Altrimenti 
      - Il prezzo finale è uguale al prezzo completo
    
    - Il prezzo finale viene scritto in "forma umana" 

    - Si mostra all'utente il prezzo finale