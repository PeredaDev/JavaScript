let myProducts = [];

class product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

function addProduct(){
    let name = document.getElementById("nombre_producto");
    let price = document.getElementById("producto_precio");
    let description = document.getElementById("producto_descripcion");
    let product2add = new product(name.value, price.value, description.value)
    myProducts.push(product2add);
}

function displayProducts(){

    let body = document.getElementsByTagName("main")[0];
      // Crea un elemento <table> y un elemento <tbody>
    let tabla   = document.createElement("table");
    let tblBody = document.createElement("tbody");
    let tableHeader = document.createElement("tr");
    let tableHeader1 = document.createElement("th")
    let tableHeader2 = document.createElement("th")
    let tableHeader3 = document.createElement("th")
    let textoHeader1 = document.createTextNode("Nombre");
    let textoHeader2 = document.createTextNode("Precio");
    let textoHeader3 = document.createTextNode("Descripcion");
    tableHeader1.appendChild(textoHeader1);
    tableHeader2.appendChild(textoHeader2);
    tableHeader3.appendChild(textoHeader3);
    tableHeader.appendChild(tableHeader1);
    tableHeader.appendChild(tableHeader2);
    tableHeader.appendChild(tableHeader3);
    tblBody.appendChild(tableHeader);
     // Crea las celdas
    for (let i = 0; i < myProducts.length; i++) {
        // Crea las hileras de la tabla
        let hilera;
        myProducts.forEach(function (arrayItem) {
            hilera = document.createElement("tr");
            let celda1 = document.createElement("td");
            let celda2 = document.createElement("td");
            let celda3 = document.createElement("td");
            let textoCelda1 = document.createTextNode(arrayItem.name);
            let textoCelda2 = document.createTextNode(arrayItem.price);
            let textoCelda3 = document.createTextNode(arrayItem.description);
            celda1.appendChild(textoCelda1);
            celda2.appendChild(textoCelda2);
            celda3.appendChild(textoCelda3);
            hilera.appendChild(celda1);
            hilera.appendChild(celda2);
            hilera.appendChild(celda3);
        });
          
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
}
