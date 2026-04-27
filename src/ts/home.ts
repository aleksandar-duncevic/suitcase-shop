export function initHome() {
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
}