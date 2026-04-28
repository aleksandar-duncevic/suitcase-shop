type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  color: string;
  size: string;
  salesStatus: boolean;
  rating: number;
  popularity: number;
  blocks: string[];
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch('/src/assets/data.json');
  const json = await res.json();
  return json.data;
}

function filterByBlock(products: Product[], block: string): Product[] {
  return products.filter(product => product.blocks.includes(block));
}

function initSlider(
  products: Product[],
  containerId: string,
  prevBtnId: string,
  nextBtnId: string
) {
  let currentIndex = 0;
  const ITEMS_PER_VIEW = 4;

  function render() {
    const container = document.getElementById(containerId);
    if (!container) return;

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
  document.getElementById(nextBtnId)?.addEventListener('click', () => {
    if (currentIndex + ITEMS_PER_VIEW < products.length) {
      currentIndex += ITEMS_PER_VIEW;
      render();
    }
  });

  // prev
  document.getElementById(prevBtnId)?.addEventListener('click', () => {
    if (currentIndex - ITEMS_PER_VIEW >= 0) {
      currentIndex -= ITEMS_PER_VIEW;
      render();
    }
  });
}

async function loadHomeProducts() {
  try {
    const products = await getProducts();
    console.log("loadHomeProducts()")

    const selected = filterByBlock(products, "Selected Products");
    const newArrivals = filterByBlock(products, "New Products Arrival");

    initSlider(selected, 'selected-products-container', 'selected-prev', 'selected-next');

    initSlider(newArrivals, 'new-products-container', 'new-prev', 'new-next');

  } catch (err) {
    console.error("Failed to load products:", err);
  }
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
      if (!hoverTextElem) return;
      const randomIndex = Math.floor(Math.random() * hoverTexts.length);
      hoverTextElem.textContent = hoverTexts[randomIndex];
    });
  });

  // *** product cards
  loadHomeProducts();

}