//creamos un juego numeros al azar donde debemos elegir
let num = Math.ceil(Math.random()*10)

    //MANEJADOR DE EVENTOS
    document.getElementById("boton").addEventListener("click",function(){
    
    //obtener lA INFORMACION
        let dato = document.getElementById("numero").value 
    //Mostrar la respuesta de acuerdo a la condicion

        if(num == dato){
            alert("FELICITACIONES,te has ganado un REBELDE")
        //Recarga la información
            location.reload()
    }
        else{
            alert("Lo siento el número era " + num + " si deseas puedes volver a jugar para ganar un REBELDE")
            location.reload()
    }
})
