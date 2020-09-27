---
title: JavaScript Pill 1 Closures
date: "2020-09-27"
---
Cosa è una closure ?

 Una closure è la combinazione di più funzioni racchiuse tra loro.
 Consente alle funzioni interne di accedere allo scope della funzione che le racchiude.

Cosa è lo scope ? 

Lo scope è la parte del nostro programma dove le nostre variabili ed i nostri metodi saranno visibili ed utilizzabili. 

L'utilizzo delle closures è importante perché controllano cosa è e cosa non è presente all'interno dello scope della nostra funzione 

Le closures sono spesso usate in JavaScript per gestire la privacy di determinati oggetti  e sono utilizzate in diversi design patterns .

Andiamo a vedere un semplicissimo esempio (Fonte MDN)
```javascript
function init() {
  var name = "Juan"; // name è una variabile locale creata da init
  function displayName() { // displayName() è una funzione interna, una chiusura
    alert(name); // utilizza la variabile dichiarata nella funzione padre    
  }
  displayName();    
}
init();
```
Non essendo dichiarata nel global scope la variabile name potrà essere utilizzata solo all'interno della nostra funzione e quindi da displayName.

```javascript
var passed = 3;
var addTo = function(){
    var inner = 2;
    return passed + inner;
};
console.log(addTo())
//La console ci ritornerà 5 
```
Nel secondo esempio non stiamo passando la variabile passed ma il risultato è sempre valido. 
Questo perché lanciando la nostra funzione , andrà automaticamente a cercare il nostro parametro fino a quando non lo troverà. 
In caso contrario il nostro risultato sarà undefined.