/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le 
   iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function get_first_letters(arr) {
    let first_letters_array = [];
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        let first_letter = name.charAt(0);
        first_letters_array.push(first_letter);
    }
    return first_letters_array;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(get_first_letters(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]