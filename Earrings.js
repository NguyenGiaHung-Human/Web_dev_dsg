// Js/Earrings.js

const earrings = [
    { id: 6, name: "Falling Blossom Earrings", category: "earrings", price: 800000, image: "../Product_Picture/Earrings/Type_1.jpg" },
    { id: 7, name: "Golden Hoop Earrings", category: "earrings", price: 850000, image: "../Product_Picture/Earrings/Type_2.jpg" },
    { id: 8, name: "Dewdrop Earrings", category: "earrings", price: 900000, image: "../Product_Picture/Earrings/Type_3.jpg" },
    { id: 9, name: "Little Star Earrings", category: "earrings", price: 950000, image: "../Product_Picture/Earrings/Type_4.jpg" },
    { id: 10, name: "Butterfly Wing Earrings", category: "earrings", price: 1000000, image: "../Product_Picture/Earrings/Type_5.jpg" },
    { id: 11, name: "Golden Flower Earrings", category: "earrings", price: 1050000, image: "../Product_Picture/Earrings/Type_6.jpg" },
    { id: 12, name: "Pink Heart Earrings", category: "earrings", price: 1100000, image: "../Product_Picture/Earrings/Type_7.jpg" },
    { id: 13, name: "Waterdrop Earrings", category: "earrings", price: 1150000, image: "../Product_Picture/Earrings/Type_8.jpg" },
    { id: 14, name: "Pearl Drop Earrings", category: "earrings", price: 1200000, image: "../Product_Picture/Earrings/Type_9.jpg" },
    { id: 15, name: "Diamond Flower Earrings", category: "earrings", price: 1250000, image: "../Product_Picture/Earrings/Type_10.jpg" },
    { id: 16, name: "Cute Bow Earrings", category: "earrings", price: 1300000, image: "../Product_Picture/Earrings/Type_11.jpg" },
    { id: 17, name: "Metallic Shine Earrings", category: "earrings", price: 1350000, image: "../Product_Picture/Earrings/Type_12.jpg" },
    { id: 18, name: "Large Hoop Earrings", category: "earrings", price: 1400000, image: "../Product_Picture/Earrings/Type_13.jpg" },
    { id: 19, name: "Large Dewdrop Earrings", category: "earrings", price: 1450000, image: "../Product_Picture/Earrings/Type_14.jpg" },
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