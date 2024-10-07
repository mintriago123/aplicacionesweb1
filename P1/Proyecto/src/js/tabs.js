function openTab(evt, tabName) { 
    var i, tabcontent, tablinks;
    
    // Obtener todas las pestañas y ocultarlas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].style.display === "block") {
            tabcontent[i].style.display = "none"; // Cerrar la pestaña visible
        }
    }

    // Eliminar la clase "active" de todos los botones de pestañas
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar la nueva pestaña
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
