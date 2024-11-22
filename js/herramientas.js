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
  
  function filterProducts() {
    const nameSearch = document.getElementById('nameSearch').value.toLowerCase();
    const priceRange = document.getElementById('priceRange').value;
    const categorySelect = document.getElementById('categorySelect').value.toLowerCase();
    const descriptionSearch = document.getElementById('descriptionSearch').value.toLowerCase();
    
    // Obtener todos los productos
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
      const name = product.querySelector('h3').innerText.toLowerCase();
      const description = product.querySelector('p.text-gray-600').innerText.toLowerCase();
      const priceText = product.querySelector('.price').innerText;
      const priceMatch = parseFloat(priceText.split(' ')[0]);

      const category = product.dataset.category.toLowerCase();  // Asumimos que cada producto tiene un atributo "data-category"

      // Filtrar por nombre, precio, categoría y descripción
      const matchesName = name.includes(nameSearch);
      const matchesPrice = priceMatch <= priceRange;
      const matchesCategory = category.includes(categorySelect) || categorySelect === '';
      const matchesDescription = description.includes(descriptionSearch);

      // Mostrar u ocultar el producto según los filtros
      if (matchesName && matchesPrice && matchesCategory && matchesDescription) {
        product.style.display = 'block'; // Mostrar producto
      } else {
        product.style.display = 'none'; // Ocultar producto
      }
    });
    
    // Actualizar el valor del rango de precio en la interfaz
    document.getElementById('priceValue').innerText = priceRange;
  }
