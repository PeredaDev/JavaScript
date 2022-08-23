let stopLooping = false;
let x = 1;
let promedio, total = 0;
let edades = [];

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
                edades.push(parseInt(edad));
                total += parseInt(edad);
                x++;
            }
        }
    }
} while (!stopLooping);

promedio = calcMean(edades);

function calcMean(numero, maxNumber) {
    let mean = numero / maxNumber;
    return mean;
}

function calcMean(...array)
{
    let total=0;
    array.forEach(element => {
        total += parseInt(element);
    });
    return total / array.length;;
}

document.getElementById("promedio").innerHTML = promedio;  