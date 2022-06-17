//crearemos un saludo ineractivo mostrando sus datos y mostrandolo en la pantalla

//seleccionar al boton que produzca un evento (ID)
document.getElementById("boton").addEventListener("click",function(){
    //extraer los datos del usuario, declarando variables
    let nom = document.getElementById("nombre").value 
    let tel = document.getElementById("telefono").value
    //mostrar el resultado en la pantalla
    document.getElementById("salida").innerHTML="Hola " + nom + " te has hecho acrededor de un vale de 20% de descuento y te llamaremos al número " + tel + " para darte mas información del porque chocolatito ADVINCULA falló el penal:(((( pipipipipipipipi"
})
