//--------------------- ESERCIZIO -------------------------------------
// Dovete stampare la lista di spesa in pagina utilizzando ciclo while.
// Rifacciamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */

//Creo l'array
const shoppingList = ["latte", "uova", "pancake", "cioccolato", "farina"];

//seleziono ul dall'html
let listElem = document.querySelector(".shopping-list");
console.log(listElem);

let i = 0;

let items = " "

while (i < shoppingList.length) {
    console.log(i, shoppingList);

    //Aggiungo 'li' agli elementi dell'array (lo aggiungo in console e poi lo inserisco in HTML nell'output)
    // items = items + "<li>" + shoppingList[i] + "</li>";
    items += "<li>" + shoppingList[i] + "</li>";
    console.log(items);

    i++;
}

//Output
// Aggiugo nel DOM
listElem.innerHTML = items;

