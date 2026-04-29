var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initHome } from './home.js';
import { initCatalog } from './catalog.js';
function loadComponent(id, path) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(path);
        const html = yield res.text();
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = html;
        }
        else {
            console.warn(`Element with id ${id} not found`);
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    //*** load components
    // detect if we are in /html folder
    const isSubPage = window.location.pathname.includes('/html/');
    const basePath = isSubPage ? '..' : '.';
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
