let stopLooping = false;
let x = 1;
let promedio, total = 0;
do {
    edad = prompt("Introduce la edad del estudiante ("+ x + "), o si desea salir introduzca \"SALIR\"");
    if (edad == "SALIR" && x > 2) {
        stopLooping = true;
    }
    else {
        if (edad == "SALIR") {
            alert("Debe introducir minimo dos valores");
        }
        else {
            if (isNaN(edad)) {
                alert("El valor introducido debe ser un numero");
            }
            else {
                total += parseInt(edad);
                x++;
            }
        }
    }
} while (!stopLooping);

promedio = calcMean(total, (x - 1) );

function calcMean(numero, maxNumber) {
    let mean = numero / maxNumber;
    return mean;
}

document.getElementById("promedio").innerHTML = promedio;  