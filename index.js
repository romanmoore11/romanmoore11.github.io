
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    // padStart ensures you always get 6 digits (e.g., #1a3f becomes #001a3f)
}

document.addEventListener('DOMContentLoaded', function() {
    // Select all the empty grid boxes (not the images)
    const gridItems = document.querySelectorAll('.grid-item:not(.text-box):not(.grid-image)');
    
    gridItems.forEach(item => {
        item.style.backgroundColor = getRandomColor();
    });
});
