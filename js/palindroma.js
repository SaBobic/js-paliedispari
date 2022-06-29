//* Palidroma

/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//* Logica step by step

/*
1. Dichiarare le variabili globali
2. Creare una funzione che restituisca true o false alla domanda "è palindroma?"
2.1 Fare in modo che venga restituita la parola scritta al contrario
2.2 Fare in modo che venga restituito true o false al confronto della parola "normale" con quella scritta al contrario
*/

// Dichiarare le variabili globali
const userWord = prompt('Inserisci una parola').toLowerCase().trim();
let reversedUserWord = "";

for (let i = userWord.length - 1; i < 0; i--){
    reversedUserWord += userWord[i];
};

console.log(userWord);
console.log(reversedUserWord);






// // Creare una funzione che restituisca true o false alla domanda "è palindroma?"
// function isPalindromic(word){
//     // Fare in modo che venga restituita la parola scritta al contrario
//     for (let i = word.length - 1; i < 0; i--){
//         reversedUserWord += word[i];
//     };
// }