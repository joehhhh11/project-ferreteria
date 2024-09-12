function loadPage(page) {
    const mainContent = document.getElementById("main-content");
  
    let pageUrl = '';
    switch (page) {
      case "#home":
        pageUrl = 'ferre.html'; 
        break;
      case "#productos":
        pageUrl = 'index2.html';
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
  