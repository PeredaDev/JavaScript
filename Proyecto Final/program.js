class product {
    constructor(name, price, description, quantity) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }
}

function deleteProduct(name) {
    let index;
    myProducts = JSON.parse(localStorage.getItem('productos'));
    myProducts.forEach(element => {
        if (element.name === name.data.param1) {
            index = myProducts.indexOf(element);
        }
    });
    myProducts.splice(index, 1);
    localStorage.setItem("productos", JSON.stringify(myProducts));
    $('#' + name.data.param1).remove();
}

function addProduct(name, price, description, quantity) {
    myProducts = myProducts || [];
    let product2add = new product(name, price, description, quantity);
    myProducts.push(product2add);
    localStorage.setItem("productos", JSON.stringify(myProducts));
}

function validateProducts() {
    let name = document.getElementById("nombre_producto");
    let price = document.getElementById("producto_precio");
    let description = document.getElementById("producto_descripcion");
    let quantity = document.getElementById("producto_cantidad");
    let valid;
    name.value === "" || price.value === "" || quantity.value === "" || description.value === "" ? valid = false : valid = true;
    valid ? addProduct(name.value, price.value, description.value, quantity.value) : alert("Se deben introducir todos los campos");
    name.value = "";
    price.value = "";
    description.value = "";
    quantity.value = "";
}

function displayProducts() {
    if (!myProducts) return;
    let tblBody = document.getElementsByClassName("product_table")[0];
    tblBody.innerHTML = "";
    myProducts.forEach(function (arrayItem) {
        let hilera = document.createElement("tr");
        hilera.id = arrayItem.name;
        for (const [key, value] of Object.entries(arrayItem)) {
            let column = document.createElement("td");
            column.className =
                column.appendChild(document.createTextNode(value));
            hilera.appendChild(column);
        }
        let column = document.createElement("td");
        column.id = arrayItem.name;
        column.className = "bi bi-trash";
        column.appendChild(document.createElement("i"));
        hilera.appendChild(column);
        tblBody.appendChild(hilera);

        $('tbody #' + arrayItem.name).click({ param1: arrayItem.name }, deleteProduct);
    });
}


let myProducts;
fetch('./MOCK_DATA.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        myProducts = data;
        localStorage.setItem("productos", JSON.stringify(myProducts));
        if (myProducts) {
            displayProducts();
        }
    })


$('#addButton').click(validateProducts);
$('#showButton').click(displayProducts);

