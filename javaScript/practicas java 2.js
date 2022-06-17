//cargar el evento en una ventana
// => es una funcion alternativa
window.addEventListener("load",()=>{
    //busco los botones y el resultado
    const botones = document.getElementsByClassName("boton")
    //usar en queryselector para que nos de el elemento solo
    const result = document.querySelector(".resultado")

//convierto la htmlvolevtion a array para poder iterar
    const botonlista = Array.from(botones)

//agrego un evento de click a cada boton
//forlach ---> una simple itineracion en su lugar
botonlista.forEach((boton)=>{
    boton.addEventListener("click", () =>{
        calculadora(boton, result)
    })
})    
})

function calculadora(boton,result){
    switch (boton.innerHTML){
        case "c":
            //se borra todo los resulrtados
            borrar(result)
            break;

        case "=":
            //se calcula la formula
            calcular(result)
            break;
        default:
            //funcionara con los botones y el resultado
            actualizar(result,boton)
            break;
    }
}

function calcular(result){
    result.innerHTML = eval(result.innerHTML)
}
function borrar(result){
    if(result.innerHTML !=0){
        result.innerHTML = 0
    }
}

function actualizar(result,boton){
    if(result.innerHTML == 0){
        result.innerHTML = " "
    }

    result.innerHTML += boton.innerHTML
}