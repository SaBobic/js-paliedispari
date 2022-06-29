//* Palindroma

/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//* Logica step by step

/*
1. Dichiarare le variabili globali
2. Creare una funzione che restituisca true o false alla domanda "è palindroma?"
2.1 Se la parola inserita dall'utente è numerabile o una stringa vvuota, viene restituito un errore
2.2 Fare in modo che venga restituita la parola scritta al contrario
2.3 Fare in modo che venga restituito true o false al confronto della parola "normale" con quella scritta al contrario
*/

// Dichiarare le variabili globali
const userWord = prompt('Inserisci una parola').toLowerCase().trim();

// Creare una funzione che restituisca true o false alla domanda "è palindroma?"
function isPalindromic(word){
    // Se la parola inserita dall'utente è numerabile o una stringa vvuota, viene restituito un errore
    if (!isNaN(word) || word === ''){
        alert('La parola inserita non è valida');
        return;
    }
    
    // Fare in modo che venga restituita la parola scritta al contrario
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    };
    
    // Fare in modo che venga restituito true o false al confronto della parola "normale" con quella scritta al contrario
    let result = reversedWord === word ? `La parola "${word}" è palindroma` : `La parola "${word}" non è palindroma`;
    return console.log(result);
}

isPalindromic(userWord);