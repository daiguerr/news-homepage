// Obtener los elementos
const burgerMenuOpen = document.getElementById('burger-menu-open');  // Icono de abrir el menú
const burgerMenuClosed = document.getElementById('burger-menu-close');  // Icono de cerrar el menú
const navbar = document.getElementById('navbar-id');  // Contenedor del menú

// Mostrar el menú al hacer clic en el icono de abrir
burgerMenuOpen.addEventListener('click', () => {
    navbar.classList.toggle('active');  // Añadir la clase active para mostrar el menú
    document.body.style.overflow = 'hidden';  // Deshabilitar el scroll cuando el menú está abierto

    // Ocultar el ícono de abrir y mostrar el ícono de cerrar
    burgerMenuOpen.style.display = 'none';  // Ocultar el ícono de abrir
    burgerMenuClosed.style.display = 'block';  // Mostrar el ícono de cerrar  // Cambiar el color de fondo de la imagen
}); 

// Ocultar el menú al hacer clic en el icono de cerrar
burgerMenuClosed.addEventListener('click', () => {
    navbar.classList.toggle('active');  // Eliminar la clase active para ocultar el menú
    document.body.style.overflow = 'scroll';  // Restaurar el scroll cuando el menú está cerrado

    // Mostrar el ícono de abrir y ocultar el ícono de cerrar
    burgerMenuOpen.style.display = 'block';  // Mostrar el ícono de abrir
    burgerMenuClosed.style.display = 'none';  // Ocultar el ícono de cerrar
});

function checkViewport() {
    const width = window.innerWidth; // Obtener el ancho del viewport
  
    // Si el ancho del viewport es menor que 768px (por ejemplo, en móvil o tablet)
    if (width < 500) {
      burgerMenuOpen.style.display = 'none'; // Ocultar icon1
      burgerMenuClosed.style.display = 'block'; // Mostrar icon2
    } else {
      burgerMenuClosed.style.display = 'none'; // Mostrar icon1
      burgerMenuOpen.style.display = 'none'; // Ocultar icon2
    }
  }

  // Ejecutar la función cuando la página cargue y cuando el tamaño del viewport cambie
window.addEventListener('load', checkViewport); // Al cargar la página
window.addEventListener('resize', checkViewport); // Cuando el tamaño del viewport cambie