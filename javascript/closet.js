// Track current index for each carousel
const carouselPositions = [0, 0]; // Add more if there are more carousels
const itemWidth = 120; // Width of each item (including margins)

function moveLeft(carouselIndex) {
    const track = document.getElementById(`carousel-${carouselIndex}`);
    if (carouselPositions[carouselIndex] > 0) {
    carouselPositions[carouselIndex]--;
    updateMiddleItem(carouselIndex)
    // track.style.transition = 'transform 0.3s ease-in-out';
    track.style.transform = `translateX(-${carouselPositions[carouselIndex] * itemWidth}px)`;
    }
}

function moveRight(carouselIndex) {
    const track = document.getElementById(`carousel-${carouselIndex}`);
    const itemCount = track.children.length;
    if (carouselPositions[carouselIndex] < itemCount - 1) {
    carouselPositions[carouselIndex]++;
    updateMiddleItem(carouselIndex)
    // track.style.transition = 'transform 0.3s ease-in-out';
    track.style.transform = `translateX(-${carouselPositions[carouselIndex] * itemWidth}px)`;
    }
}

document.querySelectorAll('.carousel-track').forEach(track => {
    track.addEventListener('transitionend', () => {
        updateMiddleItem(track);
    });
});

// Update the middle item by adding a class
function updateMiddleItem(carouselIndex) {
    const track = document.getElementById(`carousel-${carouselIndex}`);
    const items = track.getElementsByClassName('carousel-item');
    const middleIndex = Math.floor(items.length / 2); // Find the middle item index
    const currentPosition = carouselPositions[carouselIndex];
    const middleItemIndex = currentPosition + middleIndex;

    // Remove class from all items
    for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('middle-item');
    }

    // Add class to the current middle item
    if (items[middleItemIndex]) {
    items[middleItemIndex].classList.add('middle-item');
    }
}


// Initialize by setting the middle item for each carousel
window.onload = function() {
    updateMiddleItem(0);
    updateMiddleItem(1);
}