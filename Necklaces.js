// Js/Necklaces.js

const necklaces = [
    { id: 20, name: "Tiny Flower Necklace", category: "necklaces", price: 1500000, image: "../Product_Picture/Necklaces/Type_1.jpg" },
    { id: 21, name: "Blue Eye Necklace", category: "necklaces", price: 1550000, image: "../Product_Picture/Necklaces/Type_2.jpg" },
    { id: 22, name: "Starry Light Necklace", category: "necklaces", price: 1600000, image: "../Product_Picture/Necklaces/Type_3.jpg" },
    { id: 23, name: "Heart Charm Necklace", category: "necklaces", price: 1650000, image: "../Product_Picture/Necklaces/Type_4.jpg" },
    { id: 24, name: "Rose Bloom Necklace", category: "necklaces", price: 1700000, image: "../Product_Picture/Necklaces/Type_5.jpg" },
    { id: 25, name: "Infinity Necklace", category: "necklaces", price: 1750000, image: "../Product_Picture/Necklaces/Type_6.jpg" },
    { id: 26, name: "Waterdrop Necklace", category: "necklaces", price: 1800000, image: "../Product_Picture/Necklaces/Type_7.jpg" },
    { id: 27, name: "Bird Wing Necklace", category: "necklaces", price: 1850000, image: "../Product_Picture/Necklaces/Type_8.jpg" },
    { id: 28, name: "Pearl Bead Necklace", category: "necklaces", price: 1900000, image: "../Product_Picture/Necklaces/Type_9.jpg" },
    { id: 29, name: "Metallic Glow Necklace", category: "necklaces", price: 1950000, image: "../Product_Picture/Necklaces/Type_10.jpg" },
    { id: 30, name: "Circle Charm Necklace", category: "necklaces", price: 2000000, image: "../Product_Picture/Necklaces/Type_11.jpg" },
    { id: 31, name: "Tiny Bead Necklace", category: "necklaces", price: 2050000, image: "../Product_Picture/Necklaces/Type_12.jpg" },
    { id: 32, name: "Cross Pendant Necklace", category: "necklaces", price: 2100000, image: "../Product_Picture/Necklaces/Type_13.jpg" },
    { id: 33, name: "Golden Flower Necklace", category: "necklaces", price: 2150000, image: "../Product_Picture/Necklaces/Type_14.jpg" },
];
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`${product.name} has been added to your cart!`);
}
// Js/script.js

// Sample product data (combined from all categories)


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