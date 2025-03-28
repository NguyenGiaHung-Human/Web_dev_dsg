// Js/Bracelets.js

const bracelets = [
    { id: 1, name: "Starry Glow Bracelet", category: "bracelets", price: 1200000, image: "../Product_Picture/Bracelets/Type_1.jpg" },
    { id: 2, name: "Pearl Charm Bracelet", category: "bracelets", price: 1500000, image: "../Product_Picture/Bracelets/Type_2.jpg" },
    { id: 3, name: "Love Eternity Bracelet", category: "bracelets", price: 1800000, image: "../Product_Picture/Bracelets/Type_3.jpg" },
    { id: 4, name: "Sparkling Elegance Bracelet", category: "bracelets", price: 2000000, image: "../Product_Picture/Bracelets/Type_4.jpg" },
    { id: 5, name: "Golden Radiance Bracelet", category: "bracelets", price: 2200000, image: "../Product_Picture/Bracelets/Type_5.jpg" },
];
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`${product.name} has been added to your cart!`);
}
// Function to check if user is logged in
function checkLogin() {
    return localStorage.getItem('email') !== null;
}

// Function to add product to cart
function addToCart(product) {
    if (!product || !product.name) {
        showNotification("Error: Product information is missing!");
        return;
    }
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} has been added to your cart!`);
}

// Function to update cart count in header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length;
}

document.addEventListener('DOMContentLoaded', () => {
    // Update cart count on page load
    updateCartCount();

    // Populate featured products on MainPage.html
    if (window.location.pathname.includes('MainPage.html')) {
        const productList = document.getElementById('featured-products');
        if (productList) {
            productList.innerHTML = '';
            const featuredProducts = allProducts.slice(0, 4); // Show first 4 products as featured
            featuredProducts.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>${product.price.toLocaleString('en-US')} VND</p>
                    <button class="action-btn" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
                `;
                productList.appendChild(productItem);
            });
        }
    }

    // Populate all products on Products.html
    if (window.location.pathname.includes('Products.html')) {
        const productList = document.getElementById('product-list');
        const categoryFilter = document.getElementById('category-filter');
        const sortFilter = document.getElementById('sort-filter');

        // Function to display products
        const displayProducts = (products) => {
            productList.innerHTML = '';
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>${product.price.toLocaleString('en-US')} VND</p>
                    <button class="action-btn" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
                `;
                productList.appendChild(productItem);
            });
        };

        // Initial display
        displayProducts(allProducts);

        // Handle category filter
        categoryFilter.addEventListener('change', () => {
            const category = categoryFilter.value;
            let filteredProducts = category === 'all' ? allProducts : allProducts.filter(product => product.category === category);
            const sortValue = sortFilter.value;
            if (sortValue === 'low-to-high') {
                filteredProducts.sort((a, b) => a.price - b.price);
            } else if (sortValue === 'high-to-low') {
                filteredProducts.sort((a, b) => b.price - a.price);
            }
            displayProducts(filteredProducts);
        });

        // Handle sort filter
        sortFilter.addEventListener('change', () => {
            const category = categoryFilter.value;
            let filteredProducts = category === 'all' ? allProducts : allProducts.filter(product => product.category === category);
            const sortValue = sortFilter.value;
            if (sortValue === 'low-to-high') {
                filteredProducts.sort((a, b) => a.price - b.price);
            } else if (sortValue === 'high-to-low') {
                filteredProducts.sort((a, b) => b.price - a.price);
            }
            displayProducts(filteredProducts);
        });
    }
});