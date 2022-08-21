let nombre_susuario_uno = "Pepe";
 
function usuario(nombre, año, edad, dni) {
    this.edad = edad;
    this.año = año;
    this.nombre = nombre;
    this.dni = dni;
}



 class Alumno_coder{
  
    constructor(nombre, edad, dni)
    {
        this.nombre=nombre;
        this.edad=edad;
        this.dni=dni;
    }

    saludar(){
        console.log("Hola mi nombre es " + this.nombre)
    }
 }

 let pereda = new Alumno_coder("Carlos", "26", "PEAC960402");
let kathia = new Alumno_coder("Kathia", "25", "SFKV960830");
 console.log(pereda);
 pereda.saludar();
 kathia.saludar();