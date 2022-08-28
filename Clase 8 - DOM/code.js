 
 function saludar() {
    let nombre = document.getElementById("nombre_usaurio");
    console.log(nombre);
    console.log("Hola bienvenido al sistema", nombre.value);
 }

 function display() {
    let parrafo = document.createElement("p");
    parrafo.innerText="Pereda";
    parrafo.style.padding="5rem";
    parrafo.style.backgroundColor="red";
    let mensaje = document.getElementById("text");
    mensaje.append(parrafo);
    
 }