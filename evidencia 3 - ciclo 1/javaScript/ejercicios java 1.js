
let figuras = prompt("Escriba su figura que desea ajecutar: ")
let lado;
let base;
let altura;
let radio;
let D;
let d;
let B;
let b;
let p;
switch(figuras){
    case"RECTANGULO":
    case"rectangulo":
    case"rectángulo":
        base = prompt("¿Cuánto es la Base?")
        altura = prompt("¿Cuánto es la Altura?")
        document.write(`El área del Rectángulo es ${base*altura}`)
        break

    case "TRIANGULO":
    case "triangulo":
        base = prompt("¿Cuánto es tu Base?")
        altura = prompt("¿Cuánto es la Altura?")
        document.write(`El área del Triángulo es ${base*altura/2}`)
        break
    case "CIRCULO":
    case "circulo":
        radio = prompt("¿Cuánto es el Radio?")
        document.write(`El área del Círculo es ${Math.PI*Math.pow(radio,2)}`)
        break
    case"CUADRADO":
    case"cuadrado":
        lado = prompt("¿Cuánto es tu Lado ?")
        document.write(`El área del Cuadrado es ${lado*lado}`)
        break
    case"ROMBO":
    case"rombo":
        D = prompt("¿Cuánto es tu Diagonal Mayor?")
        d = prompt("¿Cuánto es tu Diagonal Menor?")
        document.write(`El área del Rombo es ${D*d}`) 
        break
    case"ROMBOIDE":
    case"romboide":
        base = prompt("¿Cuánto es tu Base?")
        altura = prompt("¿Cuánto es la Altura?")
        document.write(`El área del Romboide es ${base*altura} `)
        break
    case"TRAPECIO":
    case"trapecio":
        altura = prompt("¿Cuánto es la Altura?")
        B = prompt("¿Cuánto es tu Base Mayor?")
        b = prompt("¿Cuánto es tu Base Menor?")
        document.write(`El área del Trapecio es ${altura*((B + b) / 2)}`)
        break
    case"PENTAGONO":
    case"pentágono":
    case"pentagono":
        p = prompt("¿Cuánto es tu Apotema?")
        altura = prompt("Cuánto es la Altura")
        document.write(`El área del Pentagono es ${p*altura/2}`)
        break
        default: document.write("Esta figura no existe");
} 