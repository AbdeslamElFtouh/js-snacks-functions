/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function conta_vocali(stringa) {
    let vocali = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (let i = 0; i < stringa.length; i++) {
        let current_char = stringa[i].toLowerCase();
        
        if (vocali.includes(current_char)) {
            count++;
        }
    }
    return count;
}   

// Invoca la funzione qui e stampa il risultato in console

console.log(conta_vocali(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)