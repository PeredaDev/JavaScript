let myProducts = [];

class product {
    constructor(name, price, description, quantity) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }

    deleteProduct(){
        
    }
}

function addProduct(name, price, description, quantity){
    let product2add = new product(name, price, description, quantity)
    myProducts.push(product2add);
    let product2addJSON = JSON.stringify(myProducts);
    localStorage.setItem("productos", product2addJSON);
}

function validateProducts(){
    let name = document.getElementById("nombre_producto");
    let price = document.getElementById("producto_precio");
    let description = document.getElementById("producto_descripcion");
    let quantity = document.getElementById("producto_cantidad");
    let valid;
    name.value === "" || price.value === ""  ||  quantity.value === "" || description.value === "" ? valid = false : valid = true;
    valid ? addProduct(name.value, price.value, description.value, quantity.value) : alert("Se deben introducir todos los campos");
    name.value = "";
    price.value = "";
    description.value = "";
    quantity.value = "";
}

function displayProducts(){
    products = JSON.parse(localStorage.getItem('productos'));
    let tblBody = document.getElementsByClassName("product_table")[0];
    tblBody.innerHTML="";
        // Crea las hileras de la tabla
        products.forEach(function (arrayItem) {
        let hilera = document.createElement("tr");
        let name = document.createElement("td");
        let price = document.createElement("td");
        let quantity = document.createElement("td");
        let description = document.createElement("td");
        name.appendChild(document.createTextNode(arrayItem.name));
        price.appendChild(document.createTextNode(arrayItem.price));
        quantity.appendChild(document.createTextNode(arrayItem.quantity));
        description.appendChild(document.createTextNode(arrayItem.description));
        hilera.appendChild(name);
        hilera.appendChild(price);
        hilera.appendChild(quantity);
        hilera.appendChild(description);
        tblBody.appendChild(hilera);
    });
                // agrega la hilera al final de la tabla (al final del elemento tblbody)

}
let products = JSON.parse(localStorage.getItem('productos'));
if(products)
{
    displayProducts();
}
let addButton = document.getElementById("addButton");
let displayButton = document.getElementById("showButton");

addButton.addEventListener("click", validateProducts);
displayButton.addEventListener("click", displayProducts);
