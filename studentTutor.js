class StudentTutor extends Student{

    constructor(name, surname, marks, tutee){
        super(name, surname, marks)
        this.tutee = tutee;
    }

    calculateMean(){
        const actualMean = super.calculateMean();
        const tuteeMean = this.tutee.calculateMean();

        let newMean;

        if (tuteeMean >= 6) {
            
            newMean = actualMean + 1;

        } else {

            newMean = actualMean;

        }

        return newMean;

    }

}