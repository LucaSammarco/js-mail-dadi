// Consegna
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


const emails = [
    "goku@gmail.com",
    "vegeta@gmail.com",
    "gohan@gmail.com",
    "junior@gmail.com",
    "trunks@gmail.com",
    "crilin@gmail.com",
    "freezer@gmail.com"
]

let userEmail = prompt("type your email")
    
    if (emails.includes(userEmail)) {
        console.log("blaba")
        
    } else {
        console.log("nooo")
    }