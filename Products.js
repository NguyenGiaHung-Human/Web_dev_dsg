// Products.js

function displayProducts() {
    const productList = document.getElementById('product-list');
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');

    if (!productList || !categoryFilter || !sortFilter) return;

    let filteredProducts = [...allProducts];

    // Filter by category
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    // Sort by price
    const sortOption = sortFilter.value;
    if (sortOption === 'low-to-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-to-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Display products
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/150x150?text=Placeholder'">
            <h4>${product.name}</h4>
            <p>${product.price.toLocaleString('en-US')} VND</p>
            <button class="action-btn" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('Products.html')) {
        displayProducts();

        // Handle product filters
        const categoryFilter = document.getElementById('category-filter');
        const sortFilter = document.getElementById('sort-filter');
        if (categoryFilter && sortFilter) {
            categoryFilter.addEventListener('change', displayProducts);
            sortFilter.addEventListener('change', displayProducts);
        }
    }
});