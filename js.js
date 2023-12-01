function subir(){

    alert("Turno cargado con exito");
    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var DNI = document.getElementById("DNI").value;
    var fecha = document.getElementById("date").value;
    var obrsoc = document.getElementById("obrsoc").value;

    var tabla=document.getElementById("tbody");

    var fila=tabla.insertRow();
    var colum1=fila.insertCell(0);
    var colum2=fila.insertCell(1);
    var colum3=fila.insertCell(2);
    var colum4=fila.insertCell(3);
    var colum5=fila.insertCell(4);
    var colum6=fila.insertCell(5);

    colum1.innerHTML =nombre;
    colum2.innerHTML =apellido;
    colum3.innerHTML =edad;
    colum4.innerHTML =DNI;
    colum5.innerHTML =fecha;
    colum6.innerHTML =obrsoc;
}

   