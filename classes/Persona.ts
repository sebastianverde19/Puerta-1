export class Persona  {
    private nacimiento: number; 
    private nombre: string; 

    constructor (anioNacimiento: number, nombre: string){
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }


    public cualEsTuNombre(): string{
        return "Mi nombre es " + this.nombre.split(" ")
    };

    public cualEsTuEdad(): string{
        return "Mi edad es ";
    };

    public cualestugeneracion() {
        if (this.nacimiento < 1975){
            return "Soy un Baby Boomer";
        }
        if (this.nacimiento > 1999){
            return "Soy un milenial";
        }
        if (this.nacimiento < 2010){
            return "Soy un Alfa"
        }
    }

    public calcularEdad (){
        return "mi edad es " + (2022- this.nacimiento)
    
    }
}