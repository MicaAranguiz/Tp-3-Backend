class Persona {
    constructor(nombre, apellido, dni, estadocivil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.estadocivil = estadocivil
        this.datos = []
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
    imprimirdatosestudiante(estudiante) {
        this.datos.push(estudiante)
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
    imprimirdatospersonal(persona) {
        this.datos.push(persona)
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
    imprimirdatospersonal(persona) {
        this.datos.push(persona)
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
    imprimirdatosprofesor(profe) {
        this.datosprofe.push(profe)
    }

}



let estudiante1 = new Estudiante("Mariano", "Orozco", 44120834, "casado", "Laboratorio")
let estudiantes = new Estudiante()
estudiantes.imprimirdatosestudiante(estudiante1)
estudiante1.cambioestado("soltero")
estudiante1.nuevoestudiante("matematica")
console.log("Todos los estudiantes: ")
console.log(estudiantes.datos)



let personal1 = new Personal("Luis", "Sinapellido", 1234567, "nosesabe", 2000, 12345, "Portero")
let empleados = new Empleado()
empleados.imprimirdatospersonal(personal1)
personal1.traslado("Profesor")
console.log("Todos los empleados: ")
console.log(empleados.datos)



let profesor1 = new Profesor("Alejandro", "Arriagada", 26789409, "Casado con hijos", 2001, 2345, "Backend")
let profesores = new Profesor()
profesores.imprimirdatospersonal(profesor1)
profesor1.cambiodepartamento("Matematica")
console.log("Todos los profesores: ")
console.log(profesores.datos)
