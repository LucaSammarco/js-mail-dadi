//Consegna
// Il giocatore gioca contro il computer.
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let userNum = Math.floor(Math.random() * 6) + 1;
let pcNum = Math.floor(Math.random() * 6) + 1;

console.log("User Number",userNum,"Pc Number", pcNum)

if (userNum === pcNum){
    console.log("pareggio")



} else if (userNum > pcNum){
    console.log("User Won")
} else {
    console.log("Pc won")
}
