
// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

// Fase Preparatoria :

// Chiedo il livello di difficolta all'utente tramitre prompt
// Se livello di difficolta = 1: 1-100 - se livello di difficolta = 2: 1-81- se livello di difficolta = 3: 1-49
// Genero 16 bombe - range: 1-gameMaxNumer (100 o 81 o 49, vedi punto precedente)
// Numero massimo di tentativi = gameMaxNumber - numero di bombe (16)


// Fase Logica :

// Finche il gioco non é finito
   // Chiedo un numero all'utente tramite prompt
   // Se il numero è una bomba -> alert 'hai preso + punteggio'
   //Altrimenti (numero non è bomba ) ->
   // Metto il numero corretto in un Array di numeri buoni per il prosegu del gioco  solo se non é gia presente
   // Se l'utente ha raggiunto il numero max di tentwativi (lunghezza array buoni per il proseguo del gioco === numero max di tentativi) -> alert hai vinto


// Chiedo il livello di difficolta all'utente tramite prompt

let userLevel =parseInt(prompt("Inserisci il livello di difficolta compreso tra 1 e 3"));

if(userLevel === 1) {
    rangeMax = 100;
}
else if(userLevel === 2) {
    rangeMax = 81;
}
else if(userLevel === 3) {
    rangeMax = 49;
}
console.log(userLevel);