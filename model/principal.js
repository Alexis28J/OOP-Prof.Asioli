class Principal extends Human{

    constructor(name, surname, yob, teachers){
        super(name, surname, yob);
        this.teachers = teachers;
    }

    toString(){
        let string = super.toString() + "\n" +
                     "-----------------------\n" +
                     "Insegnanti:\n";
        
        for (const teacher of this.teachers) {
            string += teacher.name + 
                      " " + 
                      teacher.surname + 
                      " - Numero allievi: " + 
                      teacher.students.length + 
                      "\n";
        }

        return string;
                     
    }

}