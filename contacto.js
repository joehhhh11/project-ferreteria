document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const celular = document.getElementById('celular').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;

        const formularioData = {
            nombre: nombre,
            celular: celular,
            correo: correo,
            mensaje: mensaje
        };

        console.log("Datos enviados:", formularioData);
        alert("La información ha sido enviada correctamente.");

        document.getElementById('nombre').value = '';
        document.getElementById('celular').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('mensaje').value = '';
    });
});