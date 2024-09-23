/*qui scriviamo il codice
// let è una parola chiave che serve a dichiarare la variabile

let firstName = prompt("Qual è il tuo nome?")

//prompt è una funzione che chiede un input all'utente e funz

//alert mostra un popup nella finestra del browser; è bloccante 
alert("Benvenuto " + firstName )

if(firstName === null){

}

//console.log logga in console il messaggio passato come 
console.log("Benvenuto " + firstName)*/


let firstName
let d1,d2,d3,d4,d5,d6,d7
let rgiuste = 0
let rsbagliate = 0

do{
    firstName= prompt("Qual è il tuo nome ?")
}while(firstName===null)

d1=prompt("1.Chi ha vinto l'ultimo mondiale di calcio? ")
if(d1.toLowerCase().trim() === "argentina"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log("La risposta corretta era argentina.")
}


d2=prompt("2.Chi è il leggendario n10 della Roma? ")
if(d2.toLowerCase().trim() === "totti"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log("La risposta corretta era totti.")
}


d3=prompt("3.Vi si trova la mole antonelliana ")
if(d3.toLowerCase().trim() === "torino"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log("La risposta corretta era torino.")
}

d4=prompt("4.prima di sabato ")
if(d4.toLowerCase().trim() === "venerdi"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log("La risposta corretta era venerdi.")
}

d5=prompt("5.Il nome di berlusconi ")
if(d5.toLowerCase().trim() === "silvio"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log("La risposta corretta era silvio.")
}


d6=prompt("6.Aggiungi un posto a...")
if(d6.toLowerCase().trim() === "tavola"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log("La risposta corretta era tavola.")
}


d7=prompt("7.Giovanni Aldo e....")
if(d7.toLowerCase().trim() === "giacomo"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log("La risposta corretta era giacomo.")
}


console.log("il tuo punteggio è:"+ rgiuste+"/7")

if(rgiuste>5){
    console.log("Complimeti test superato")
    

}else{
    console.log("Mi dispiace, test non superato")
}









