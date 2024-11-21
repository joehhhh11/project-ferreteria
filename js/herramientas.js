document.getElementById("verMas").addEventListener("click", function() {
    // Obtener todos los productos adicionales (inicialmente ocultos)
    const productosOcultos = document.querySelectorAll(".product-item.hidden");
  
    // Si el texto del botón es "VER MENOS PRODUCTOS"
    if (this.innerText === "VER MENOS PRODUCTOS") {
      // Ocultar los productos adicionales
      productosOcultos.forEach(function(producto) {
        producto.classList.add("hidden");  // Oculta los productos
      });
  
      // Cambiar el texto del botón a "VER TODOS LOS PRODUCTOS"
      this.innerText = "VER TODOS LOS PRODUCTOS";
      
    } else {
      // Mostrar los productos adicionales
      productosOcultos.forEach(function(producto) {
        producto.classList.remove("hidden");  // Muestra los productos
      });
  
      // Cambiar el texto del botón a "VER MENOS PRODUCTOS"
      this.innerText = "VER MENOS PRODUCTOS";
      
      // Eliminar el botón "VER MENOS" cuando se presiona "VER TODOS LOS PRODUCTOS"
      this.remove(); // Elimina el botón del DOM
    }
  });
  