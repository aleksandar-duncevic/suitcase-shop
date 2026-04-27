async function loadComponent(id: string, path: string): Promise<void> {
  const res = await fetch(path);
  const html = await res.text();

  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = html;
  } else {
    console.warn(`Element with ${id} not found`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // detect if we are in /html folder
  const isSubPage =  window.location.pathname.includes('/html/');
  const basePath = isSubPage? '..' : '.';

  loadComponent("header", `${basePath}/components/header.html`);
  loadComponent("footer", `${basePath}/components/footer.html`);
});

