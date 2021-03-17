// ! ESERCIZIO 1) Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// ! Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
var student =  {    
                    'first name' : 'Matteo',
                    'surname' : 'Sabbatini',
                    'age': 22
                };
var stampa = printStudentObject(student);
document.getElementById("outcome").innerHTML = stampa; 
console.log(student)

// ! ESERCIZIO 2) Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// ! Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var students_array = [];
var students; 
var choice = "y";

students_array.push(student);

console.log(student);
console.log(students_array);

for (var i = 0; i < students_array.length; i++) {
   printStudentObject(student);
}

while (choice == "y" || choice == "Y") {
    students = addNewStudent();
    new_student = students_array.push(students);
    document.getElementById("outcome").innerHTML += "<br>" + new_student; 

    choice = prompt("Vuoi inserire un altro studente ? \n Premi y per sì");
}

//???????????????????????????????????????????????  FUNZIONI 

// funzione che aggiunge oggetti in un array
function addNewStudent (students_array) {
    var nome = prompt("inserisci il nome di un nuovo studente");
    var cognome = prompt("inserisci il cognome di un nuovo studente");
    var eta = prompt("inserisci l'età dello studente");
    
    var element = {};

    element ["first_name"] = nome;
    element ["surname"] = cognome;
    element ["age"] = eta;

    return element;
}

// funzione che controlla che sia stato inserito un numero
function isNumber(num) {
    var num = parseInt(num);
    while (!isNaN(num) == false || num <= 0) {
       num = parseInt(prompt("Hai inserito un valore errato, inserisci un intero positivo"));
    }
        return num;
}

// funzione che stampa gli elementi di un oggetto 
function printStudentObject () {
    var line = "";
    for (x in student) {
        line += " " + student[x];
    }
    return line;
}