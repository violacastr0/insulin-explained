// Added on branch feature/insulin-cards
// Flips each card on click, tap, Enter or Space.
document.querySelectorAll(".card").forEach((card) => {
  const front = card.querySelector(".card-front");
  const back = card.querySelector(".card-back");

  const flip = () => {
    const flipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", String(flipped));
    front.setAttribute("aria-hidden", String(flipped));
    back.setAttribute("aria-hidden", String(!flipped));
  };

  card.addEventListener("click", flip);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flip();
    }
  });
});

// Show a placeholder if an image file is missing.
document.querySelectorAll(".card-media img").forEach((img) => {
  const markMissing = () => img.parentElement.classList.add("is-missing");
  if (img.complete && img.naturalWidth === 0) markMissing();
  img.addEventListener("error", markMissing);
});
