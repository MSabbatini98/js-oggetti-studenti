// creo un oggetto 
var student =  {
                    name : 'Matteo',
                    surname : 'Sabbatini',
                    age: 22
                };
console.log(student)
printStudentObject(student);

function printStudentObject () {
    var line = "";
    for (x in student) {
        line += " " + student[x];
    }
    document.getElementById("outcome").innerHTML = line;
}