//* Pari dispari

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto
*/

//* Logica step by step

/*
1. Dichiaro le variabili globali
2. Creo una funzione che restituisca un numero random da 1 a 5
3. Assegno il numero generato dalla funzione al computer
4. Sommo i due numeri
5. Creo una funzione che stabilisca se un numero è pari o dispari
6. Assegno il risultato della funzione alla variabile globale associata
7. Dichiaro chi ha vinto in base alla scelta dell'utente
*/

// Dichiaro le variabili globali
const userEvenOdd = prompt('pari o dispari?', 'pari').trim().toLocaleLowerCase();
const userNumber = parseInt(prompt('scegli un numero da 1 a 5', '3').trim().toLocaleLowerCase());
let cpuNumber;
let sumNumbers;
let result; // Risposta alla domanda "la somma dei numeri è pari?"
let getWinner = 'Hai vinto!';

// Creo una funzione che restituisca un numero random da 1 a 5
function getRandomNumber(min = 1, max = 5) {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

// Assegno il numero generato dalla funzione al computer
cpuNumber = getRandomNumber();

// Sommo i due numeri
sumNumbers = userNumber + cpuNumber;

// Creo una funzione che stabilisca se un numero è pari o dispari
function isEven(number){
    let result = number % 2 ? 'dispari' : 'pari';
    return result;
}

// Assegno il risultato della funzione alla variabile result
result = isEven(sumNumbers);

// Dichiaro chi ha vinto in base alla scelta dell'utente
if (result !== userEvenOdd) getWinner = 'Hai perso!';

console.log("Hai scelto " + userEvenOdd);
console.log("Hai scelto il numero " + userNumber);
console.log("Il computer ha scelto il numero " + cpuNumber);
console.log("La somma dei numeri è " + sumNumbers);
console.log(result);
console.log(getWinner);