/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function saluti(name) {
    let saluto_utente = 'Ciao ' + name;
    return saluto_utente;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluti(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
