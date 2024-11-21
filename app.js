function loadPage(page) {
    const mainContent = document.getElementById("main-content");
  
    let pageUrl = '';
    switch (page) {
      case "#home":
        pageUrl = 'ferre.html'; 
        break;
      case "#productos":
        pageUrl = 'herramientas.html';
        break;
      case "#servicios":
        pageUrl = 'servicios.html';
        break;
      case "#contacto":
        pageUrl = 'contacto.html';
        break;
      default:
        pageUrl = '404.html'; 
        break;
    }

    fetch(pageUrl)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Página no encontrada');
        }
      })
      .then(html => {
        mainContent.innerHTML = html;
      })
      .catch(error => {
        mainContent.innerHTML = `<p>Error al cargar la página: ${error.message}</p>`;
      });
  }
  
  function handleHashChange() {
    const page = window.location.hash || "#home";
    loadPage(page);
  }
  
  window.addEventListener("hashchange", handleHashChange);
  
  window.addEventListener("load", () => {
    handleHashChange();
  });

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
