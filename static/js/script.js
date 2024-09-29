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
let percentuale = 0

do{
    firstName= prompt("Qual è il tuo nome ?")
}while(firstName===null)

do{
d1=prompt("1.Chi ha vinto l'ultimo mondiale di calcio? ")
}while(d1===null)
if(d1.toLowerCase().trim() === "argentina"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log( "Hai risposto " +d1+"." +" La risposta corretta era argentina.")
}

do{
d2=prompt("2.Chi è il leggendario n10 della Roma? ")
}while(d2===null)
if(d2.toLowerCase().trim() === "totti"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log( "Hai risposto " +d2+"." +" La risposta corretta era totti.")
}

do{
d3=prompt("3.Vi si trova la mole antonelliana ")
}while(d3===null)
if(d3.toLowerCase().trim() === "torino"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log("Hai risposto "+ d3+"." +" La risposta corretta era torino.")
}
do{
d4=prompt("4.prima di sabato ")
}while(d4===null)
if(d4.toLowerCase().trim() === "venerdi"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log("Hai risposto " +d4+"." +" La risposta corretta era venerdi.")
}
do{
d5=prompt("5.Il nome di berlusconi ")
}while(d5===null)
if(d5.toLowerCase().trim() === "silvio"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log( "Hai risposto " +d5+"." +" La risposta corretta era silvio.")
}

do{
d6=prompt("6.Aggiungi un posto a...")
}while(d6===null)
if(d6.toLowerCase().trim() === "tavola"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log( "Hai risposto "+ d6+"." +" La risposta corretta era tavola.")
}

do{
d7=prompt("7.Giovanni Aldo e....")
}while(d7===null)
if(d7.toLowerCase().trim() === "giacomo"){
        rgiuste++
        console.log("Risposta corretta")

}else{
    rsbagliate++
    console.log("Risposta sbagliata")
    console.log("Hai risposto " +d7+"." +" La risposta corretta era giacomo.")
}

percetale = (rgiuste/7)*100
console.log("il tuo punteggio è:"+ rgiuste+"/7 "+ "con una percentuale di :"+ percetale.toFixed(1)+"%")

if(rgiuste>5){
    console.log("Complimeti test superato")
    

}else{
    console.log("Mi dispiace, test non superato")
}









