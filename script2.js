
let randomNum = Math.random() * 6 + 1;  // creo numeri randomici tra 1 e 6
let randomNum2 = Math.random() * 6 + 1;

giocatore = [randomNum.toFixed(0), randomNum.toFixed(0), randomNum.toFixed(0), randomNum.toFixed(0)]; // creo un array  con  4 numeri randomici]
computer = [randomNum2.toFixed(0), randomNum2.toFixed(0), randomNum2.toFixed(0), randomNum2.toFixed(0)];

for  (let i=0; i<giocatore.length; i++) {
    console.log(giocatore[i]); //creo il ciclo di leetture dell'array del giocatore
}
for  (let i=0; i<computer.length; i++) {
    console.log(computer[i]); //creo il ciclo di lettura dell'array del computer
}

for (let i=0; i < giocatore.length; i++) {  //li confronto  e definiscoo il vincitore
    if (giocatore[i] > computer[i]) {
        console.log("Hai vinto!");
    } else if (giocatore[i] < computer[i]) {
        console.log("Hai perso!");
    } else {
        console.log("Pareggio!");
    }
}
