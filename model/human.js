class Human{

    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    toString(){
        return "nome: " + this.name + "\n" +
               "cognome: " + this.surname;
    }
}