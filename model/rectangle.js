class Rectangle{

    constructor(base, height, color){
        this.base = base;
        this.height = height;
        this.color = color;
    }

    calculateArea(){
        // return this.base * this.height;
        const area = this.base * this.height;
        return area;
    }

    calculatePerimeter(){
        // const perimetro = 2 * (this.base + this.height);
        // return perimetro;
        return this.base + 
               this.height + 
               this.base + 
               this.height;
    }
    
    toString(){
        const string = "Rettangolo\n" + 
                       "base: " + this.base + "\n" +
                       "altezza: " + this.height + "\n" +
                       "colore: " + this.color + "\n" +
                       "area: " + this.calculateArea() + "\n"
                       "perimetro: " + this.calculatePerimeter();

        return string;
    }

}