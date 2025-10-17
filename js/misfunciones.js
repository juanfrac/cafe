const p=document.querySelector("#resultado");
function sumar(){
    var numero1=document.getElementById("n1").value;
    var numero2=document.getElementById("n2").value;
    var suma=parseInt(numero1)+parseInt(numero2);
    document.write(suma);
}
function restar(){
    var numero1=document.getElementById("n1").value;
    var numero2=document.getElementById("n2").value;
    var resta=parseInt(numero1)-parseInt(numero2);
    document.write(resta);
}
function unir(){
    var nomb=document.getElementById("nombres").value;
    var ape=document.getElementById("apellidos").value;
    var completo=nomb+" "+ ape;
    document.write(completo);
}
function calcular(){
    var cantidad=document.getElementById("cant").value;
    var igv=cantidad*0.18;
    var total= parseFloat(cantidad)+parseFloat(igv);
    document.write("IGV:");
    document.writeln(igv);
    document.write("TOTAL:")
    document.writeln(total);
}
function verificar(){
    var ed=document.getElementById("edad").value;
    if(ed>=18){
        document.write("Ud. es Mayor de Edad");
    }
    else{
        document.write("Ud. es Menor de Edad");
    }
}
function promedio(){
    var nota1=document.getElementById("n1").value;
    var nota2=document.getElementById("n2").value;
    var nota3=document.getElementById("n3").value;
    var promedio=(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
    //document.writeln("El promedio es:");
    //document.write(promedio);
    p.innerText= 'la suma es: ' + ' '+ promedio;
    //if(promedio>=10.5){
      //  document.write("Ud.Esta aprobado");
    //}
    //else{
      //  document.write("Ud.Está desaprobado");
    //}
}

function agregarFila() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const genero = document.querySelector('input[name="genero"]:checked')?.value;
    const edad = document.getElementById("edad").value;
    const intereses = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                           .map(checkbox => checkbox.value)
                           .join(", ");

    // Verificar que se haya completado el campo obligatorio
    if (!nombre || !genero) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    // Crear una nueva fila en la tabla
    const tabla = document.getElementById("tabla").querySelector("tbody");
    const fila = tabla.insertRow();
    fila.insertCell(0).innerText = nombre;
    fila.insertCell(1).innerText = genero;
    fila.insertCell(2).innerText = edad;
    fila.insertCell(3).innerText = intereses;

    // Limpiar el formulario después de agregar la fila
    document.getElementById("form").reset();
}