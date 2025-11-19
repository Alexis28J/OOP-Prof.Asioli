class Teacher extends Human{

    constructor(name, surname, yob, students){
        super(name, surname, yob);
        this.students = students;
    }

    calculateClassMean(){
        let sum = 0;

        for (const student of this.students) {
            sum += student.calculateMean();
        }

        const mean = sum / this.students.length;

        return mean;
    }

    toString(){
        let string = super.toString() + '\n' +
                    "------------------------\n" +
                    "allievi:\n";

        for (const student of this.students) {
            string += student.name + 
                      " " + 
                      student.surname + 
                      " - media: " + 
                      student.calculateMean() + 
                      "\n";
        }

        string += "------------------------\n"

        string += "media della classe: " + this.calculateClassMean();

        return string;
               
    }

}