async function leerJSON() {
    const response = await fetch('/data/usuarios.json'); // Ruta específica del archivo JSON
    if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}  
  // Función para comparar los datos ingresados
    async function validarUsuario(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const correoIngresado = document.getElementById('correo').value;
    const contrasenaIngresada = document.getElementById('contrasena').value;  
    try {async function leerJSON() {
        const response = await fetch('/data/usuarios.json'); // Ruta específica del archivo JSON
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    }  
      // Función para comparar los datos ingresados
        async function validarUsuario(event) {
        event.preventDefault(); // Evitar el envío del formulario
    
        const correoIngresado = document.getElementById('correo').value;
        const contrasenaIngresada = document.getElementById('contrasena').value;  
        try {
          // Leer los datos del archivo JSON
        const usuarios = await leerJSON();  
          // Buscar si el correo y contraseña coinciden con algún usuario
        const usuarioValido = usuarios.find(usuario =>
            usuario.correo === correoIngresado && usuario.contrasena === contrasenaIngresada
        );
    
        const mensaje = document.getElementById('mensaje');
    
        if (usuarioValido) {
            mensaje.textContent = 'Inicio de sesión exitoso.';
            mensaje.style.color = 'green';
        } else {
            mensaje.textContent = 'Correo o contraseña incorrectos.';
            mensaje.style.color = 'red';
        }
        } catch (error) {
        console.error(error);
        const mensaje = document.getElementById('mensaje');
        mensaje.textContent = 'Hubo un error al cargar los datos. Intente de nuevo más tarde.';
        mensaje.style.color = 'red';
        }
    } 
      // Añadir el evento al formulario
    document.getElementById('loginForm').addEventListener('submit', validarUsuario);
    
      // Leer los datos del archivo JSON
    const usuarios = await leerJSON();  
      // Buscar si el correo y contraseña coinciden con algún usuario
    const usuarioValido = usuarios.find(usuario =>
        usuario.correo === correoIngresado && usuario.contrasena === contrasenaIngresada
    );

    const mensaje = document.getElementById('mensaje');

    if (usuarioValido) {
        alert("Inicio de sesion exitoso")
        mensaje.textContent = 'Inicio de sesión exitoso.';
        mensaje.style.color = 'green';
    } else {
        alert("Correo o contraseña incorrectos")
        mensaje.textContent = 'Correo o contraseña incorrectos.';
        mensaje.style.color = 'red';
    }
    } catch (error) {
    console.error(error);
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = 'Hubo un error al cargar los datos. Intente de nuevo más tarde.';
    mensaje.style.color = 'red';
    alert(mensaje)
    }
} 
  // Añadir el evento al formulario
document.getElementById('loginForm').addEventListener('submit', validarUsuario);
