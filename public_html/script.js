// Arreglo global para almacenar los alumnos
let listaAlumnos = [];
//funcion del boton
function calcularPromedio() {
    // Obtener los datos del formulario
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(
        document.getElementById("edad").value
    );
    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );
    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );
    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );
    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );
    // Validar que los datos estén completos
    if (
        isNaN(edad)  ||
        nombre === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {
        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";
        return;
    }
    // Calcular promedio
    let promedio =
        (calificacion1 + calificacion2 + calificacion3 +calificacion4) / 4;
    // Crear un objeto alumno
    let nuevoAlumno = {
        nombre: nombre,
        edad: edad,
        promedio: promedio.toFixed(2)
    };
    // Agregar al arreglo global
    listaAlumnos.push(nuevoAlumno);

   
    // Actualizar la tabla visualmente
    mostrarTabla();
    
    // Mostrar resultado con mensajes personalizados dependiendo el promedio
    if (promedio <=10 && promedio >9) {
        //el elemento "resultado" lo unimos con el texto queramos que salga 
        //En este caso las variables del nombre, edad, el promedio a 2 numeros despues del punto y el mensaje personalizado
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>EXCELENTE";
    }else{
        if (promedio <=9 && promedio >=8) {
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>MUY BIEN";
    }else{
        if (promedio <8 && promedio >=7) {
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>BIEN";
    }  else{
        if (promedio <7 && promedio >=6.5) {
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>PIENSA EN CONTA";
    } else{
        if (promedio <6.5 && promedio >=6) {
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>DATE DE BAJA";
    } else{
        if (promedio <6 && promedio >=0) {
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>VETE A TURISMO O A LA VOCA 11 :)";
    } else{
        document.getElementById("resultado").innerHTML =
            "PUSISTE MAL UNA CALIFICACION BRODY";
    }
    }
    }
    } 
    } 
    }
}
// Función para pintar la tabla con los datos del arreglo
function mostrarTabla() {
    let tbody = document.getElementById("tablaAlumnos").getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; // Limpiar tabla antes de redibujar

    for (let i = 0; i < listaAlumnos.length; i++) {
        let alumno = listaAlumnos[i];
        let fila = tbody.insertRow();

        let celdaNombre = fila.insertCell(0);
        let celdaEdad = fila.insertCell(1);
        let celdaPromedio = fila.insertCell(2);

        celdaNombre.innerHTML = alumno.nombre;
        celdaEdad.innerHTML = alumno.edad;
        celdaPromedio.innerHTML = alumno.promedio;
    }
}

//Funcion para limpiar el cuestionario
function limpiarCuestionario(){
    //Establece el valor de todos los elementos del cuestionario como vacios 
    document.getElementById("nombre").value="";
    document.getElementById("edad").value="";
    document.getElementById("calificacion1").value="";
    document.getElementById("calificacion2").value="";
    document.getElementById("calificacion3").value="";
    document.getElementById("calificacion4").value="";
    //Manda un mensaje informando que se limpio el cuestionario
    document.getElementById("resultado").innerHTML =
            "CUESTIONARIO LIMPIADO";
}
function borrarLista() {
    listaAlumnos = [];
    mostrarTabla();
    document.getElementById("resultado").innerHTML = "LISTA DE ALUMNOS BORRADA";
}