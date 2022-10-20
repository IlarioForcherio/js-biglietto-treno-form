/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65*/


const inputNomeCognome = document.getElementById('nome-cognome');
const inputKm = document.getElementById('km');
let inputEta = document.getElementById('age');






function Genera(){
//Età
    let valueEta = (inputEta.value);
    console.log(valueEta);
//Nome e cognome   
    let valueNomeCognome = inputNomeCognome.value;
    document.getElementById("nome-passeggero").innerHTML=` ${valueNomeCognome}`;
//Kilometri   
    let valueKm = parseInt(inputKm.value);
    console.log(valueKm);



    //prezzo biglietto
    let prezzoTicket = valueKm * 0.21;
    console.log(prezzoTicket);
    
    //sconti
    let sconto20 = prezzoTicket * 0.2;
    
    let sconto40 = prezzoTicket / 100 * 40;
    
    //condizione 
   
    if (valueEta === 'minore18'){
    prezzoTicket = prezzoTicket - sconto20;
    
    document.getElementById("ticket").innerHTML= ` ${prezzoTicket.toFixed(2)} €`;
   
    } else if (valueEta === 'maggiore65'){
    prezzoTicket = prezzoTicket - sconto40;
    
    document.getElementById("ticket").innerHTML= ` ${prezzoTicket.toFixed(2)} €`;

   }else (valueEta === 'altro');{
    prezzoTicket = prezzoTicket;
    document.getElementById("ticket").innerHTML= ` ${prezzoTicket.toFixed(2)} €`;
}


//numeri random
let numeroRandom = document.getElementById('random');
numeroRandom = Math.floor( Math.random() * 9);
document.getElementById("random").innerHTML= ` ${numeroRandom}`;

let numeroRandom2 = document.getElementById('random2');
numeroRandom = Math.floor( Math.random() * 9999999999);
document.getElementById("random2").innerHTML= ` ${numeroRandom}`;








   
 

}


