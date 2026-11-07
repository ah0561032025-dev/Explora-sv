// Interacciones de la página Explora SV
const menuToggle = document.querySelector('#menuToggle');
const siteNav = document.querySelector('#siteNav');
const themeToggle = document.querySelector('#themeToggle');
const contactForm = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');
const year = document.querySelector('#year');

// 1) Menú responsive: abre/cierra la navegación en pantallas pequeñas.
menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

// Cierra el menú al seleccionar un enlace.
siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// 2) Cambio de tema: alterna entre tema oscuro/verde y claro.
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  console.log(document.body.className);
  const lightMode = document.body.classList.contains('light-theme');
  themeToggle.textContent = lightMode ? '◑ Tema' : '◐ Tema';
  themeToggle.setAttribute('aria-pressed', String(lightMode));
});

// 3) Validación básica del formulario (no envía datos a un servidor).
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (name.length < 2 || !email.includes('@') || message.length < 3) {
    formMessage.textContent = 'Revisa los campos: completa tu nombre, correo y mensaje.';
    return;
  }

  formMessage.textContent = `¡Gracias, ${name}! Tu mensaje quedó validado en esta demostración.`;
  contactForm.reset();
});

// Actualiza automáticamente el año del footer.
year.textContent = new Date().getFullYear();
