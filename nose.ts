class persona  {
    private nacimiento: number; 
    private nombre: string; 

    constructor (anioNacimiento: number, nombre: string){
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }

public cualestuNombre(): string{
    return "Mi nombre es" + this.nombre.split(" "); 
}

public cualestuEdad (): string{
    return "Mi nombre es "; 

}

    public cualestuGeneracion()  {
        if (this.nacimiento < 1975) {
            return "Soy un Baby Boomer";
        }
        if (this.nacimiento > 1975 && this.nacimiento < 1999){
            return "Soy un Milenial";
    }
        if (this.nacimiento>=1999 && this.nacimiento < 2010){
            return "Soy un Centenial";
        }
        if (this.nacimiento >= 2010){
            return "Soy un Alfa";
    }
}
    public calcularstuEdad(){
            return "Mi edad es " + (2022 - this.nacimiento)
        }
}



let fede = new persona (2000, "Federico Lopez");
console.log(fede.calcularstuEdad()); 
