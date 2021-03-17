// ! ESERCIZIO 1) Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// ! Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// ! ESERCIZIO 2) Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// ! Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var students_array = []; //tiene tutti i nuovi studenti/oggetto inseriti
var choice = "y"; //continuare ad inserire studenti 
var new_student ; /// variabile che salva l'oggetto del nuovo studente
var student =  {    
                    'first name' : 'Matteo',
                    'surname' : 'Sabbatini',
                    'age': 23
                }; //oggetto con 3 proprietà

var stampa = printStudentObject(student);
document.getElementById("outcome").innerHTML = stampa; 

students_array.push(student);

while (choice == "y" || choice == "Y") {
    new_student = addNewStudent();
    students_array.push(new_student);
    
    var esercizio2 = stampaArrayObj(students_array);
    document.getElementById("outcome3").innerHTML = esercizio2; 
    
    choice = prompt("Vuoi inserire un altro studente ? \n Premi y per sì");
}




//???????????????????????????????????????????????  FUNZIONI 

// funzione che aggiunge oggetti in un array
function addNewStudent () {
    var element = {};
    var nome = prompt("inserisci il nome di un nuovo studente");
    var cognome = prompt("inserisci il cognome di un nuovo studente");
    var eta = prompt("inserisci l'età dello studente");
    eta = isNumber(eta);
    element ["first_name"] = nome;
    element ["surname"] = cognome;
    element ["age"] = eta;
    console.log(element);
    return element;
}
// funzione che stampa gli elementi di un oggetto 
function printStudentObject (object) {
    var line = "";
    for (var x in object) {
        line += " " + object[x];
    }
    return line;
}

// funzione che controlla che sia stato inserito un numero
function isNumber(num) {
    var num = parseInt(num);
    while (!isNaN(num) == false || num <= 0) {
       num = parseInt(prompt("Hai inserito un valore errato, inserisci un intero positivo"));
    }
        return num;
}

// funzione che stampa array di oggetti
function stampaArrayObj(array) {
    var string = "";
    for (var y = 0; y < array.length; y++){
        console.log(array[y]);
        string += "<br>" +  printStudentObject(array[y]);
        console.log(string); 
    }
    return string;
}
function stampaArray(array) {
    var string = "";
    for (var y = 0; y < array.length; y++){
        console.log(array[y]);
        //string += array[y] +  " "; //stampa gli elementi dell'array in una riga con gli spazi
        string += array[y] +  "\n"; //stampa gli elementi in righe diverse
    } 
    return string;
}