


function nombre_actividad() {

    if (document.getElementById("nombre_actividad").value == "") {
        alert("Por favor ingrese una actividad");
        return;
    }


    


    let nombre_actividad = document.getElementById("nombre_actividad").value; 
    /* con value obtenemos el valor del input */

    let contenedor_tarea = document.createElement("div");
    contenedor_tarea.className = ' contenedor_tarea form-floating mb-3';

    let nombre_tarea = document.createElement("li");
    nombre_tarea.className = 'list-group-item tarea'; 
 

    
    /* le agregamos el valor */
    nombre_tarea.textContent = nombre_actividad + "";
   

    let boton_eliminar = document.createElement("button");
    boton_eliminar.textContent = "Eliminar";
    boton_eliminar.className = 'btn btn-danger boton_eliminar';
    boton_eliminar.onclick = function() {
        document.getElementById("lista").removeChild(contenedor_tarea);
       
    };
    
    

    //agregamos el boton a la lista
    contenedor_tarea.appendChild(boton_eliminar);

    contenedor_tarea.appendChild(nombre_tarea);
    
   
    document.getElementById("lista").appendChild(contenedor_tarea);

    document.getElementById("nombre_actividad").value = "";  /* limpiamos el input */

   
}