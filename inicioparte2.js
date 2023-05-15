class CentroDocente {
    constructor() {
        this.dadosdealta = []
        this.dadosdebaja = []
        this.datos = []
    }
    darAlta(persona) {
        this.dadosdealta.push(persona)
    }
    imprimirdatosnuevo(persona) {
        this.datos.push(persona)
    }
    darBaja(persona) {
        console.log("Esta persona ha sido de baja del sistema")
        console.log(persona)
        this.dadosdebaja.push(persona)
    }
}

class Nuevo {
    constructor( nombre, apellido, dni, estadocivil,estado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.estadocivil = estadocivil
        this.estado = estado;
    }
}

let nuevito1 = new Nuevo("Bianca", "Aranguiz", 44120834, "solita", "Sin cargo")
let nuevito2 = new Nuevo("Micaela", "Aranguiz", 44120833, "Casada", "Sin cargo")
let centro1 = new CentroDocente()
centro1.darAlta(nuevito1)
centro1.imprimirdatosnuevo(nuevito1)
centro1.darAlta(nuevito2)
centro1.imprimirdatosnuevo(nuevito2)
console.log(centro1.datos)



