const filterElement = document.querySelector('header input');
const cards = document.querySelectorAll('.cards li');

filterElement.addEventListener('input', filterCards);

function filterCards() {
    const filterText = filterElement.value.toLowerCase();

    cards.forEach(card => {
        const titleElement = card.querySelector('h2');
        const title = titleElement.textContent.toLowerCase();
        const shouldDisplay = title.includes(filterText);
        toggleCardDisplay(card, shouldDisplay);
    });
}

function toggleCardDisplay(card, shouldDisplay) {
    if (shouldDisplay) {
        card.classList.remove('hidden');
    } else {
        card.classList.add('hidden');
    }
}