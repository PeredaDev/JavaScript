let newVar = localStorage.getItem("PEREDA1");
console.log(typeof newVar);
for (let x = 0; x < localStorage.length; x++) {
    const element = localStorage.key(x);
    console.log(localStorage.getItem(element));
    console.log("La clave es", element);
}



function doSomething() {
    let pass = document.getElementById("password");
    let user = document.getElementById("usuario");
    console.log(pass.value);
    console.log(user.value);
    let usuario = {id: user.value, passcode: pass.value}
    let userJson = JSON.stringify(usuario);
    console.log(userJson);
    let recuperandoJson = JSON.parse(userJson);
    console.log(recuperandoJson);
}


let button = document.getElementById("button");
button.addEventListener("click", doSomething);



