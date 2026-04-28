var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/src/assets/data.json');
        const json = yield res.json();
        return json.data;
    });
}
function filterByBlock(products, block) {
    return products.filter(product => product.blocks.includes(block));
}
function initSlider(products, containerId, prevBtnId, nextBtnId) {
    var _a, _b;
    let currentIndex = 0;
    const ITEMS_PER_VIEW = 4;
    function render() {
        const container = document.getElementById(containerId);
        if (!container)
            return;
        const visible = products.slice(currentIndex, currentIndex + ITEMS_PER_VIEW);
        container.innerHTML = visible.map(p => `
      <div class="product-card">
        ${p.salesStatus ? `<span class="badge">SALE</span>` : ''}
        <img src="${p.imageUrl}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p class="price">$${p.price}</p>
        <button>Add To Cart</button>
      </div>
    `).join('');
    }
    // initial render
    render();
    // next
    (_a = document.getElementById(nextBtnId)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        if (currentIndex + ITEMS_PER_VIEW < products.length) {
            currentIndex += ITEMS_PER_VIEW;
            render();
        }
    });
    // prev
    (_b = document.getElementById(prevBtnId)) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        if (currentIndex - ITEMS_PER_VIEW >= 0) {
            currentIndex -= ITEMS_PER_VIEW;
            render();
        }
    });
}
function loadHomeProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield getProducts();
            console.log("loadHomeProducts()");
            const selected = filterByBlock(products, "Selected Products");
            const newArrivals = filterByBlock(products, "New Products Arrival");
            initSlider(selected, 'selected-products-container', 'selected-prev', 'selected-next');
            initSlider(newArrivals, 'new-products-container', 'new-prev', 'new-next');
        }
        catch (err) {
            console.error("Failed to load products:", err);
        }
    });
}
export function initHome() {
    // *** hover text
    const hoverTexts = [
        "Travel smart, travel light.",
        "Adventure starts here.",
        "Pack your dreams.",
        "Explore without limits.",
        "Style meets journey.",
        "Ready for your next escape?",
        "Carry comfort wherever you go.",
        "Designed for every destination.",
        "Travel with confidence.",
        "Your perfect travel companion.",
        "Go further, travel better.",
        "Where style meets adventure.",
        "Make every trip effortless.",
        "Built for the journey ahead.",
        "Take your world with you."
    ];
    const travelCards = document.querySelectorAll('.travel-card');
    travelCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const hoverTextElem = card.querySelector('.hover-text');
            if (!hoverTextElem)
                return;
            const randomIndex = Math.floor(Math.random() * hoverTexts.length);
            hoverTextElem.textContent = hoverTexts[randomIndex];
        });
    });
    // *** product cards
    loadHomeProducts();
}
