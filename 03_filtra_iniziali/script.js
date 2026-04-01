/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array 
   contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filter_by_initial(array, letter) {
    let risultati = [];
    
    for (let i = 0; i < array.length; i++) {
        let current_name = array[i];  
        if (current_name.startsWith(letter)) {
            risultati.push(current_name);
        }
    }
    return risultati;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(filter_by_initial(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]