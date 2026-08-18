const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
if (menuButton) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
  });
}

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.querySelector('.form-status').textContent = 'Merci ! Votre demande est prête à être envoyée. Connectez ce formulaire à votre service e-mail ou CRM pour recevoir les messages.';
    form.reset();
  });
}
