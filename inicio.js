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

//saludo segun la hora del dia
function mostrarSaludo() {
  const saludo = document.createElement('div');//crear elemento div
  saludo.classList.add('saludo');

  const icono = document.createElement('span');
  icono.classList.add('icono');
  icono.textContent = '👋🏻'; //add icono
  saludo.appendChild(icono);

  //determinar los mensajes de saludo segun la hora
  const hora = new Date().getHours();
  let mensaje;
  if (hora < 12) {
    mensaje = "¡BUENOS DIAS! Aquí encontrarás todo lo que necesitas para tu proyecto.";
  } else if (hora < 18) {
   mensaje= "¡BUENAS TARDES! Explora nuestras ofertas y promociones que tenemos para tí.";
  } else {
    mensaje = "¡BUENAS NOCHES! Prepara tu proyecto con nuestras herramientas.";
  }
  //add mensaje de saludo
  const texto = document.createElement('span');
  texto.textContent = mensaje;
  saludo.appendChild(texto);
  //crear boton cierre
  const btnCerrar = document.createElement('button');
  btnCerrar.classList.add('cerrar');
  btnCerrar.textContent = 'X';

  btnCerrar.addEventListener('click',() => {
    saludo.classList.remove('mostrar');
      setTimeout(() => saludo.remove(), 500);
  });
  saludo.appendChild('btnCerrar');

  //add al cuerpo del doc.
  document.body.appendChild(saludo);
    setTimeout(() => saludo.classList.add('mostrar'), 100);//mostar en animacion
  //desaparecer a los 5 segundos
  setTimeout(() =>{ if(document.body.contains(saludo)){
    saludo.classList.remove('mostrar');
    setTimeout(() => saludo.remove(), 500);
    }
  }, 5000);
}
//mostrar el mensaje al abrir la pagina
window.addEventListener('load', mostrarSaludo);
