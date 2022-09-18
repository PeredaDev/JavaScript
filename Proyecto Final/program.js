class product {
    constructor(name, price, description, quantity) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }

    deleteProduct(){
        
    }

    modifyProduct(){

    }
}

function addProduct(name, price, description, quantity){
    myProducts = myProducts || [];
    let product2add = new product(name, price, description, quantity);
    myProducts.push(product2add);
    localStorage.setItem("productos", JSON.stringify(myProducts));
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
    let tblBody = document.getElementsByClassName("product_table")[0];
    tblBody.innerHTML="";
    myProducts.forEach(function (arrayItem) {
        let hilera = document.createElement("tr");
        for (const [key, value]  of Object.entries(arrayItem)) {
            let column = document.createElement("td");
            column.appendChild(document.createTextNode(value));
            hilera.appendChild(column);
        }
        tblBody.appendChild(hilera);
    });
}

let myProducts = JSON.parse(localStorage.getItem('productos'));

if (myProducts) 
{
    displayProducts();
}

$('#addButton').click(validateProducts);
$('#showButton').click(displayProducts);
