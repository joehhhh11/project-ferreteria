// Botón interactivo para dinámicas futuras
function cambiarTexto() {
    const sobreNosotros = document.getElementById("sobre-nosotros");
    sobreNosotros.innerHTML += `
      <p class="text-gray-600 mt-5 text-center">
        Nos esforzamos por ofrecer la mejor experiencia de compra a nuestros clientes.
      </p>`;
  }
  document.querySelectorAll("#info-principal div").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "#f0f8ff";
    });
    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "white";
    });
  });
  // Ejemplo: Interacciones futuras
console.log("Página cargada correctamente");
// Este script se puede utilizar para cualquier funcionalidad adicional, por ahora está vacío
console.log("Página cargada correctamente");
