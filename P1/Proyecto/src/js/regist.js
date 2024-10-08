document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('miForm');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío del formulario por defecto
        
        // Verificar que las contraseñas coincidan
        if (password1.value !== password2.value) {
            alert("Las contraseñas no coinciden");
            return; // Salir si no coinciden
        }
        
        // Crear un objeto con los datos del formulario
        const formData = {
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            email: document.getElementById('email').value,
            password: password1.value, // Guardamos solo una de las contraseñas
            direccion: document.getElementById('direccion').value,
        };

        // Convertir el objeto en un string JSON
        const jsonData = JSON.stringify(formData, null, 2);

        // Crear un enlace temporal para descargar el archivo JSON
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'formData.json'; // Nombre del archivo que se descargará
        a.click();

        // Liberar la URL del objeto
        URL.revokeObjectURL(url);

        // Limpiar el formulario después de guardar
        form.reset();
        alert("Formulario enviado y archivo JSON descargado con éxito");
    });
});
