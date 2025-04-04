import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// Interacción básica con el DOM 
window.mostrarDato = function () {
  const dato = document.getElementById('dato');
  if (dato.style.display === 'none') {
    dato.style.display = 'block';
  } else {
    dato.style.display = 'none';
  }
};
