// Track current index for each carousel
const carouselPositions = [0, 0, 0, 0]; // Add more if there are more carousels
const itemWidth = 120; // Width of each item (including margins)
const visibleItemsCount = 3; // Number of items visible in the carousel at once

function moveLeft(carouselIndex) {
    const track = document.getElementById(`carousel-${carouselIndex}`);
    if (carouselPositions[carouselIndex] > -1) {
        carouselPositions[carouselIndex]--;
        updateMiddleItem(carouselIndex);
        centerCarouselOnItem(track, carouselIndex);
    }
}

function moveRight(carouselIndex) {
    const track = document.getElementById(`carousel-${carouselIndex}`);
    const itemCount = track.children.length;
    if (carouselPositions[carouselIndex] < itemCount - 2) {
        carouselPositions[carouselIndex]++;
        updateMiddleItem(carouselIndex);
        centerCarouselOnItem(track, carouselIndex);
    }
}

// Center the carousel so that the current item is in the middle
function centerCarouselOnItem(track, carouselIndex) {
    // Calculate the offset so that the middle item aligns with the center of the visible area
    const offset = -1 * carouselPositions[carouselIndex] * itemWidth;
    track.style.transform = `translateX(${offset}px)`;
}

// Update the middle item by adding a class
function updateMiddleItem(carouselIndex) {
    const track = document.getElementById(`carousel-${carouselIndex}`);
    const items = track.getElementsByClassName('carousel-item');
    const middleIndex = Math.floor(visibleItemsCount / 2); // Find the middle position in the view
    const middleItemIndex = carouselPositions[carouselIndex] + middleIndex;

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
    updateMiddleItem(2);
    updateMiddleItem(3);
};
;