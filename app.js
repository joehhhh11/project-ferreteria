const urlProductos = "./productos.json";
let productosData = []; 
const selectedProducts = []; 

async function fetchProductos() {
  try {
    const response = await fetch(urlProductos);
    if (!response.ok) throw new Error("Error al cargar productos");

    productosData = await response.json(); 
    renderProductos(productosData); 
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("productos-container").textContent =
      "No se cargaron los productos XDDDDDDDDDDD";
  }
}

function renderProductos(data) {
  const container = document.getElementById("productos-container");

  container.innerHTML = data.categorias
    .map(
      (categoria) => `
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">${categoria.nombre}</h2>
        <div>
          <div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-6">
            ${categoria.productos
              .map(
                (producto) => `
                  <div class="bg-white p-5 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                    <div class="flex justify-center items-center mb-4">
                      <img src="${producto.imagen}" alt="${producto.nombre}" class="w-48 h-48 object-contain rounded-md">
                    </div>
                    <h3 class="text-lg font-bold text-gray-800 mb-2">${producto.nombre}</h3>
                    <p class="text-yellow-500 font-semibold">Calificación: ${producto.calificacion}★</p>
                    <p class="text-sm text-gray-600 mb-4">${producto.descripcion}</p>
                    <div class="flex justify-between">
                    <p class="text-green-500 font-semibold">S/. ${producto.precio} </p>
                    </div>  
                    <div class="flex items-center mt-4">
                      <button id="decrement-${producto.id}" class="px-2 py-1 bg-red-500 text-white rounded-l">-</button>
                      <span id="counter-${producto.id}" class="px-4 py-1 border-t border-b border-gray-300">0</span>
                      <button id="increment-${producto.id}" class="px-2 py-1 bg-green-500 text-white rounded-r">+</button>
                      
                    </div>
                  </div>`
              )
              .join("")}
          </div>
        </div>`
    )
    .join("");

  data.categorias.forEach((categoria) => {
    categoria.productos.forEach((producto) => {
      const incrementButton = document.getElementById(`increment-${producto.id}`);
      const decrementButton = document.getElementById(`decrement-${producto.id}`);
      const counterDisplay = document.getElementById(`counter-${producto.id}`);

      let count = 0;

      incrementButton.addEventListener("click", () => {
        count++;
        counterDisplay.textContent = count;
        updateSelectedProducts(producto, count);
      });

      decrementButton.addEventListener("click", () => {
        if (count > 0) count--;
        counterDisplay.textContent = count;
        updateSelectedProducts(producto, count);
      });
    });
  });
}

// filtrar los productos según el texto ingresado en el input
function searchProducts(event) {
  const query = event.target.value.toLowerCase();
  const filteredData = {
    categorias: productosData.categorias.map((categoria) => ({
      ...categoria,
      productos: categoria.productos.filter(
        (producto) =>
          producto.nombre.toLowerCase().includes(query) ||
          categoria.nombre.toLowerCase().includes(query)
      ),
    })),
  };
  renderProductos(filteredData); // Volver a renderizar con los productos filtrados
}

//actualiza los productos que se selecciona
function updateSelectedProducts(product, count) {
  const existingProduct = selectedProducts.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    if (count === 0) {
      const index = selectedProducts.indexOf(existingProduct);
      selectedProducts.splice(index, 1);
    } else {
      existingProduct.cantidad = count;
    }
  } else if (count > 0) {
    selectedProducts.push({ ...product, cantidad: count });
  }
}

// agregar el evento para escuchar el input del campo de búsqueda
document.getElementById("search-input").addEventListener("input", searchProducts);

fetchProductos();
