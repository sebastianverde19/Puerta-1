var persona = /** @class */ (function () {
    function persona(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    persona.prototype.cualestuNombre = function () {
        return "Mi nombre es" + this.nombre.split(" ");
    };
    persona.prototype.cualestuEdad = function () {
        return "Mi nombre es ";
    };
    persona.prototype.cualestuGeneracion = function () {
        if (this.nacimiento < 1975) {
            return "Soy un Baby Boomer";
        }
        if (this.nacimiento > 1975 && this.nacimiento < 1999) {
            return "Soy un Milenial";
        }
        if (this.nacimiento >= 1999 && this.nacimiento < 2010) {
            return "Soy un Centenial";
        }
        if (this.nacimiento >= 2010) {
            return "Soy un Alfa";
        }
    };
    persona.prototype.calcularstuEdad = function () {
        return "Mi edad es " + (2022 - this.nacimiento);
    };
    return persona;
}());
var fede = new persona(2000, "Federico Lopez");
console.log(fede.calcularstuEdad());
