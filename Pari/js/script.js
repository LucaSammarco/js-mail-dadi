// Consegna 
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è pari inseriscilo nell’array

const evenNum = [];


for (let index = 0; index < 6; index++) {
    
    let userNumber = prompt("Insert number");
    console.log(evenNum)
    if (userNumber % 2 == 0) {
        evenNum.push(userNumber)
     
} else {
} }

console.log(evenNum)