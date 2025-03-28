// Js/Rings.js

const rings = [
    // Diamond Rings
    { id: 34, name: "Sparkling Diamond Ring", category: "rings", price: 3000000, image: "../Product_Picture/Rings/Diamond_ring/Type_1.jpg" },
    { id: 35, name: "Eternal Diamond Ring", category: "rings", price: 3100000, image: "../Product_Picture/Rings/Diamond_ring/Type_2.jpg" },
    { id: 36, name: "Elegant Diamond Ring", category: "rings", price: 3200000, image: "../Product_Picture/Rings/Diamond_ring/Type_3.jpg" },
    { id: 37, name: "Radiant Diamond Ring", category: "rings", price: 3300000, image: "../Product_Picture/Rings/Diamond_ring/Type_4.jpg" },
    { id: 38, name: "Brilliant Diamond Ring", category: "rings", price: 3400000, image: "../Product_Picture/Rings/Diamond_ring/Type_5.jpg" },
    { id: 39, name: "Golden Diamond Ring", category: "rings", price: 3500000, image: "../Product_Picture/Rings/Diamond_ring/Type_6.jpg" },
    { id: 40, name: "Regal Diamond Ring", category: "rings", price: 3600000, image: "../Product_Picture/Rings/Diamond_ring/Type_7.jpg" },

    // Gold Rings
    { id: 41, name: "Patterned Gold Ring", category: "rings", price: 2500000, image: "../Product_Picture/Rings/Gold_rings/Type_1.jpg" },
    { id: 42, name: "Classic Gold Ring", category: "rings", price: 2600000, image: "../Product_Picture/Rings/Gold_rings/Type_2.jpg" },
    { id: 43, name: "Plain Gold Ring", category: "rings", price: 2700000, image: "../Product_Picture/Rings/Gold_rings/Type_3.jpg" },
    { id: 44, name: "Heart Gold Ring", category: "rings", price: 2800000, image: "../Product_Picture/Rings/Gold_rings/Type_4.jpg" },
    { id: 45, name: "Bird Wing Gold Ring", category: "rings", price: 2900000, image: "../Product_Picture/Rings/Gold_rings/Type_5.jpg" },
    { id: 46, name: "Simple Gold Ring", category: "rings", price: 3000000, image: "../Product_Picture/Rings/Gold_rings/Type_6.jpg" },
    { id: 47, name: "Beaded Gold Ring", category: "rings", price: 3100000, image: "../Product_Picture/Rings/Gold_rings/Type_7.jpg" },

    // Platinum Rings
    { id: 48, name: "Night Glow Platinum Ring", category: "rings", price: 3500000, image: "../Product_Picture/Rings/Platinum_rings/Type_1.jpg" },
    { id: 49, name: "Twisted Platinum Ring", category: "rings", price: 3600000, image: "../Product_Picture/Rings/Platinum_rings/Type_2.jpg" },
    { id: 50, name: "Beaded Platinum Ring", category: "rings", price: 3700000, image: "../Product_Picture/Rings/Platinum_rings/Type_3.jpg" },
    { id: 51, name: "Plain Platinum Ring", category: "rings", price: 3800000, image: "../Product_Picture/Rings/Platinum_rings/Type_4.jpg" },
    { id: 52, name: "Shimmering Platinum Ring", category: "rings", price: 3900000, image: "../Product_Picture/Rings/Platinum_rings/Type_5.jpg" },
    { id: 53, name: "Regal Platinum Ring", category: "rings", price: 4000000, image: "../Product_Picture/Rings/Platinum_rings/Type_6.jpg" },
    { id: 54, name: "Infinity Platinum Ring", category: "rings", price: 4100000, image: "../Product_Picture/Rings/Platinum_rings/Type_7.jpg" },

    // Ruby Rings
    { id: 55, name: "Beaded Ruby Ring", category: "rings", price: 3200000, image: "../Product_Picture/Rings/Ruby_ring/Type_1.jpg" },
    { id: 56, name: "Heart Ruby Ring", category: "rings", price: 3300000, image: "../Product_Picture/Rings/Ruby_ring/Type_2.jpg" },
    { id: 57, name: "Square Ruby Ring", category: "rings", price: 3400000, image: "../Product_Picture/Rings/Ruby_ring/Type_3.jpg" },
    { id: 58, name: "Golden Ruby Ring", category: "rings", price: 3500000, image: "../Product_Picture/Rings/Ruby_ring/Type_4.jpg" },
    { id: 59, name: "Twisted Ruby Ring", category: "rings", price: 3600000, image: "../Product_Picture/Rings/Ruby_ring/Type_5.jpg" },
    { id: 60, name: "Elegant Ruby Ring", category: "rings", price: 3700000, image: "../Product_Picture/Rings/Ruby_ring/Type_6.jpg" },
    { id: 61, name: "Simple Ruby Ring", category: "rings", price: 3800000, image: "../Product_Picture/Rings/Ruby_ring/Type_7.jpg" },

    // Silver Rings
    { id: 62, name: "Night Glow Silver Ring", category: "rings", price: 2000000, image: "../Product_Picture/Rings/Silver_rings/Type_1.jpg" },
    { id: 63, name: "Twisted Silver Ring", category: "rings", price: 2100000, image: "../Product_Picture/Rings/Silver_rings/Type_2.jpg" },
    { id: 64, name: "Beaded Silver Ring", category: "rings", price: 2200000, image: "../Product_Picture/Rings/Silver_rings/Type_3.jpg" },
    { id: 65, name: "Plain Silver Ring", category: "rings", price: 2300000, image: "../Product_Picture/Rings/Silver_rings/Type_4.jpg" },
    { id: 66, name: "Shimmering Silver Ring", category: "rings", price: 2400000, image: "../Product_Picture/Rings/Silver_rings/Type_5.jpg" },
    { id: 67, name: "Regal Silver Ring", category: "rings", price: 2500000, image: "../Product_Picture/Rings/Silver_rings/Type_6.jpg" },
    { id: 68, name: "Infinity Silver Ring", category: "rings", price: 2600000, image: "../Product_Picture/Rings/Silver_rings/Type_7.jpg" },
];
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`${product.name} has been added to your cart!`);
}
// Js/script.js

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