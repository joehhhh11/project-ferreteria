
    
  
  function openModal(service) {
    const modal = document.getElementById('serviceModal');
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('modalDescription');
    
    // Set dynamic content based on the service clicked
    if (service === 'asesoria') {
        title.innerText = "Asesoría Técnica";
        description.innerText = "Te brindamos asesoría para elegir los mejores productos para tus proyectos. ¡Contáctanos y empieza hoy!";
    } else if (service === 'entrega') {
        title.innerText = "Entrega a Domicilio";
        description.innerText = "Recibe tus productos directamente en tu casa con nuestro servicio de entrega. ¡Haz tu pedido ahora!";
    } else if (service === 'mantenimiento') {
        title.innerText = "Mantenimiento de Herramientas";
        description.innerText = "Te ayudamos a mantener tus herramientas en óptimas condiciones. ¡Solicita tu mantenimiento hoy mismo!";
    }

    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.add('hidden');
}
