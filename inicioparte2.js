class Persona {
    constructor(nombre, apellido, dni, estadocivil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.estadocivil = estadocivil
    }
}

class CentroDocente extends Persona {
    constructor(nombre, apellido, dni, estadocivil, suscripcion, dnibaja) {
        super(nombre, apellido, dni, estadocivil)
        this.suscripcion = suscripcion
        this.dnibaja = dnibaja;
        this.dnibaja = 44120934
        this.dadosdealta = []
    }
    darAlta(nuevoAlta) {
        console.log("Dando de alta a nueva persona")
        this.dadosdealta.push(nuevoAlta)
    }
    darBaja() {
        if (this.dni == this.dnibaja) {
            console.log("La persona con el dni: " + this.dni)
            this.dnibaja = ("YA NO EXISTE EN EL SISTEMA")
        }
    }
    imprimirdatosnuevo() {
        console.log("LOS DATOS DE LA NUEVA PERSONA SON: " + this.nombre + ", " + this.apellido + ", " + this.dni + ", " + this.estadocivil + ", " + this.suscripcion)
    }
    imprimirdatosbaja() {
        console.log("DNI DE LA PERSONA DADA DE BAJA EN CUESTIÓN: " + this.dnibaja)
    }
}

let nuevito1 = new CentroDocente("Bianca", "Aranguiz", 44120834, "solita", "Sin cargo")
console.log(nuevito1)
nuevito1.darAlta(nuevito1)
console.log(nuevito1.dadosdealta)
let nuevito2 = new CentroDocente("Biancaaaaaaaaa", "Aranguiz", 44120833, "solita", "Sin cargo")
console.log(nuevito2)
nuevito1.darAlta(nuevito2)
console.log(nuevito2.dadosdealta)
// console.log(nuevito2)
// nuevito1.darAlta("Nuevo Empleado")
// nuevito2.darAlta("Nuevo Empleado")
// nuevito1.imprimirdatosnuevo()
// nuevito2.imprimirdatosnuevo()
// nuevito2.imprimirdatosbaja()
// nuevito1.darBaja()

