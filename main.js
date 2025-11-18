console.log('object oriented programming')

//const stefania = {name: "stefania", surname: "dagnino", marks: [10, 9, 7, 8, 8]};


//const leonardo = {name: "leonardo", surname: "silva", marks: [3, 4, 4, 2, 5]};


// function calculateStudentMean(student){

//     let sum = 0;

//     for (let i = 0; i < student.marks.length; i++) {
//         const mark = student.marks[i];
        
//         sum += mark;
//     }

//     const mean = sum / student.marks.length;

//     return mean;

// }

// console.log(calculateStudentMean(stefania));
// console.log(calculateStudentMean(leonardo));


// function addMark(student, newMark) {

//     if(newMark >= 0 && newMark <= 10){
//         student.marks.push(newMark);
//     } else {
//         console.log('errore, voto non valido');
//     }
    
// }

// addMark(stefania, 10);
// console.log(calculateStudentMean(stefania));

// addMark(leonardo, 20);
// console.log(calculateStudentMean(leonardo));



// function creaScheda(student) {

//     const scheda = "nome: " + student.name + "\n" +
//                    "cognome: " + student.surname + "\n" +
//                    "media: " + calculateStudentMean(student)
    
//     return scheda;
    
// }

// console.log(creaScheda(stefania));
// console.log(creaScheda(leonardo));




// const stefania = new Student("stefania", "dagnino", [10, 9, 7, 8, 8])
// const leonardo = new Student("leonardo", "silva", [3, 4, 4, 2, 5])
// const salma = new Student("salma", "sobhi")


// console.log(stefania.calculateMean())
// console.log(leonardo.calculateMean())
// console.log(salma.calculateMean())


// stefania.addMark(10);
// console.log(stefania.calculateMean());

// leonardo.addMark(20);
// console.log(leonardo.calculateMean());

// console.log("Studente:\n" + stefania);
// console.log(leonardo.toString());

// ////////////////////

// const rect1 = new Rectangle(30, 20, 'rosso');

// console.log(rect1.calculateArea()) // 600
// console.log(rect1.calculatePerimeter()); // 100
// console.log(rect1.toString())
//Rettangolo
//base: 30
//altezza: 20
//colore: rosso
//area: 600
//perimetro: 100

const stefania = new Student("stefania", "dagnino", [10, 9, 7, 8, 8]);
const leonardo = new Student("leonardo", "silva", [3, 4, 4, 2, 5]);
const salma = new Student("salma", "sobhi", [6, 6, 6]);

const eros = new StudentTutor("eros", "balan", [10, 9, 7, 8, 8], leonardo);

const andrea = new Teacher("andrea", "asioli", [stefania, leonardo, salma]);
const evelin = new Teacher("evelin", "medina", [eros]);



const elisabetta = new Principal("elisabbetta", "fegino", [andrea, evelin])


console.log(stefania.toString());


eros.addMark(7);
console.log(eros.calculateMean())
console.log(leonardo.calculateMean())

leonardo.addMark(10);
leonardo.addMark(9);
leonardo.addMark(9.5);
leonardo.addMark(8);
console.log(leonardo.calculateMean());
console.log(eros.calculateMean());


console.log(eros.toString());
//nome: eros
//cognome: balan
//media: 9.1666666
//--------------------
//allievo: leonardo silva
//media allievo: 6.0555555


console.log(andrea.toString());
//nome: andrea
//cognome: asioli
//--------------------
//allievi:
//stefania dagnino - media: 8
//leonardo silva - media: 6.0555
//salma sobhi - media: 6
//--------------------
//media della classe :6,68


console.log(elisabetta.toString())

//nome: elisabetta
//cognome: fegino
//--------------------
//insegnanti:
//asioli andrea - numero studenti: 3
//evelin medina - numero studenti: 1

