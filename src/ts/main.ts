import { initHome } from './home.js';
import { initCatalog } from './catalog.js';

async function loadComponent(id: string, path: string): Promise<void> {
  const res = await fetch(path);
  const html = await res.text();

  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = html;
  } else {
    console.warn(`Element with id ${id} not found`);
  }
}

document.addEventListener('DOMContentLoaded', async () => {

  //*** load components
  // detect if we are in /html folder
  /*
  const isSubPage =  window.location.pathname.includes('/html/');
  const basePath = isSubPage? '..' : '.';
  */
  await loadComponent("header", `./components/header.html`);
  await loadComponent("footer", `./components/footer.html`);
  

  //*** router
  const path = window.location.pathname;
  const homepage = path.endsWith('/') || path.endsWith('index.html');

  if (homepage) {
    initHome();
  }

  if (path.includes('catalog')) {
    initCatalog();
  }


  //*** open modal
  const accountIcon = document.querySelector('.account-icon')!;
  const modal = document.getElementById('loginModal')!;

  if (accountIcon && modal) {
    accountIcon.addEventListener('click', () => {
      modal.classList.add('active');
    });
  }

  const form = document.getElementById('loginForm');

  if (form) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.classList.remove('active');
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = document.getElementById('email') as HTMLInputElement | null;
      const passwordInput = document.getElementById('password') as HTMLInputElement | null;

      if (!emailInput || !passwordInput) {
        return;
      }

      const email = emailInput.value;
      const password = passwordInput.value;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        alert('Invalid email');
        return;
      }

      if (!password) {
        alert('Password required');
        return;
      }

      // Success
      modal.classList.remove('active');
    });
  }

  const toggle = document.getElementById('toggle-password');
  const passwordInput = document.querySelector<HTMLInputElement>('#password');
  if (toggle && passwordInput) {
    toggle.addEventListener('click', () => {
      passwordInput.type =
        passwordInput.type === 'password' ? 'text' : 'password';
    });
  }

});

