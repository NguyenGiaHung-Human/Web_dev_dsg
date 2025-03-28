function adjustLayout() {
    const width = window.innerWidth;
    const productGrid = document.querySelector('.product-grid');
    const searchBar = document.querySelector('.search-bar input');

    if (productGrid && searchBar) {
        console.log("Adjusting layout for window width:", width);
        if (width <= 480) {
            productGrid.style.gridTemplateColumns = '1fr';
            searchBar.style.width = '100%';
        } else if (width <= 768) {
            productGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            searchBar.style.width = '100%';
        } else if (width <= 1024) {
            productGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
            searchBar.style.width = '200px';
        } else {
            productGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
            searchBar.style.width = '200px';
        }
    }
}

// Đảm bảo sự kiện chỉ được gắn một lần
window.removeEventListener('resize', adjustLayout);
window.addEventListener('resize', adjustLayout);

document.addEventListener('DOMContentLoaded', () => {
    console.log("AppearSize.js loaded");
    adjustLayout();
});