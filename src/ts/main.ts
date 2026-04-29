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

document.addEventListener('DOMContentLoaded', () => {

  //*** load components
  // detect if we are in /html folder
  const isSubPage =  window.location.pathname.includes('/html/');
  const basePath = isSubPage? '..' : '.';

  loadComponent("header", `${basePath}/components/header.html`);
  loadComponent("footer", `${basePath}/components/footer.html`);

  //*** router
  const path = window.location.pathname;

  if (path.endsWith('index.html') || path === '/' || path === '') {
    initHome();
  }

  if (path.includes('catalog')) {
    initCatalog();
  }

});

