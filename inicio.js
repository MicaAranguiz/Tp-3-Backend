class Persona {
    constructor(nombre, apellido, dni, estadocivil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.estadocivil = estadocivil
    }
    cambioestado(nuevoEstadoCivil) {
        console.log("El estado de esta persona está siendo modificado: ")
        this.estadocivil = nuevoEstadoCivil
    }
   
}
class Estudiante extends Persona {
    constructor(nombre, apellido, dni, estadocivil, curso) {
        super(nombre, apellido, dni, estadocivil)
        this.curso = curso;
    }
    imprimirdatosestudiante() {
        console.log("LOS DATOS DEL ESTUDIANTE SON: " + this.nombre + ", " + this.apellido + ", " + this.dni + ", " + this.estadocivil + ", " +this.curso)
    }
    nuevoestudiante(nuevoCurso) {
        console.log("Matriculando a un nuevo estudiante: ")
        this.curso = nuevoCurso;
    }
}


//Comienza la clase empleado y ahora heredan de este mismo
class Empleado extends Persona {
    constructor(nombre, apellido, dni, estadocivil) {
        super(nombre, apellido, dni, estadocivil)
    }
    reasignardespacho() {
        console.log("reasignando nuevo despacho: ")
    }
    imprimirdatosprofesor() {
        console.log("LOS DATOS DE LA PERSONA SON: " + this.nombre + ", " + this.apellido + ", " + this.dni + ", " + this.estadocivil + ", " + this.añoinicio + ", " + this.nrolegajo + ", " + this.materia)
    }
    imprimirdatospersonal() {
        console.log("LOS DATOS DE LA PERSONA SON: " + this.nombre + ", " + this.apellido + ", " + this.dni + ", " + this.estadocivil + ", " + this.añoinicio + ", " + this.nrolegajo + ", " + this.seccion)
    }
}

class Personal extends Empleado {
    constructor(nombre, apellido, dni, estadocivil, añoinicio, nrolegajo, seccion) {
        super(nombre, apellido, dni, estadocivil)
        this.añoinicio = añoinicio;
        this.nrolegajo = nrolegajo;
        this.seccion = seccion;
    }
    traslado(nuevoTrabajo) {
        console.log("Cambiando de sección de empleado: ")
        this.seccion = nuevoTrabajo;
    }
}
class Profesor extends Empleado {
    constructor(nombre, apellido, dni, estadocivil, añoinicio, nrolegajo, materia) {
        super(nombre, apellido, dni, estadocivil)
        this.añoinicio = añoinicio;
        this.nrolegajo = nrolegajo;
        this.materia = materia
    }
    cambiodepartamento(nuevamateria) {
        console.log("Cambiando departamento del profesor: ")
        this.materia = nuevamateria;
    }

}


let estudiante1 = new Estudiante("Mariano", "Orozco", 44120834, "casado", "Laboratorio")
console.log(estudiante1.imprimirdatosestudiante())
estudiante1.cambioestado("soltero")
estudiante1.nuevoestudiante("matematica")
console.log(estudiante1.imprimirdatosestudiante())



let personal1 = new Personal("Luis", "Sinapellido", 1234567, "nosesabe", 2000, 12345, "Portero")
console.log(personal1.imprimirdatospersonal())
personal1.traslado("Profesor")
console.log(personal1.imprimirdatospersonal())



let profesor1 = new Profesor("Alejandro", "Arriagada", 26789409, "Casado con hijos", 2001, 2345, "Backend")
console.log(profesor1.imprimirdatosprofesor())
profesor1.cambiodepartamento("Matematica")
console.log(profesor1.imprimirdatosprofesor())


