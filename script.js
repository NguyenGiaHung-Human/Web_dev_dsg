// script.js

// Sample product data (combined from all categories)
const allProducts = [
    //Bracelets
    { id: 1, name: "Starry Glow Bracelet", category: "bracelets", price: 1200000, image: "../Product_Picture/Bracelets/Type_1.jpg" },
    { id: 2, name: "Pearl Charm Bracelet", category: "bracelets", price: 1500000, image: "../Product_Picture/Bracelets/Type_2.jpg" },
    { id: 3, name: "Love Eternity Bracelet", category: "bracelets", price: 1800000, image: "../Product_Picture/Bracelets/Type_3.jpg" },
    { id: 4, name: "Sparkling Elegance Bracelet", category: "bracelets", price: 2000000, image: "../Product_Picture/Bracelets/Type_4.jpg" },
    { id: 5, name: "Golden Radiance Bracelet", category: "bracelets", price: 2200000, image: "../Product_Picture/Bracelets/Type_5.jpg" },
    //Neckless
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

    //Earring
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

// Function to check if user is logged in
function checkLogin() {
    return localStorage.getItem('loggedIn') === 'true';
}

// Function to log out
function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('currentEmail');
    localStorage.removeItem('cart'); // Xóa giỏ hàng khi đăng xuất
    showNotification('You have been logged out!', () => {
        window.location.href = '../HTML/MainPage.html';
    });
}

// Function to add product to cart
function addToCart(product) {
    if (!checkLogin()) {
        showNotification('Please login to add products to your cart!', () => {
            window.location.href = '../HTML/LoginRegister.html';
        });
        return;
    }

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
    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCount.textContent = cart.length;
    }
}

// Function to update user status links
function updateUserStatusLinks() {
    const userStatusLink = document.getElementById('user-status');
    const logoutBtn = document.getElementById('logout-btn');
    const isLoggedIn = checkLogin();

    // Cập nhật liên kết trong user-cart
    if (userStatusLink) {
        userStatusLink.textContent = isLoggedIn ? 'Personal Information' : 'Login | Register';
        userStatusLink.href = isLoggedIn ? '../HTML/PersonalInfo.html' : '../HTML/LoginRegister.html';
    }

    // Hiển thị/ẩn nút đăng xuất
    if (logoutBtn) {
        logoutBtn.style.display = isLoggedIn ? 'inline' : 'none';
        logoutBtn.addEventListener('click', (event) => {
            event.preventDefault();
            logout();
        });
    }
}

// Function to display featured products on MainPage.html
function displayFeaturedProducts() {
    const productList = document.getElementById('featured-products');
    if (productList) {
        productList.innerHTML = '';
        const featuredProducts = allProducts.slice(0, 4); // Hiển thị 4 sản phẩm đầu tiên
        featuredProducts.forEach(product => {
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
}

document.addEventListener('DOMContentLoaded', () => {
    // Cập nhật trạng thái đăng nhập và số lượng giỏ hàng
    updateUserStatusLinks();
    updateCartCount();

    // Hiển thị sản phẩm nổi bật trên MainPage.html
    if (window.location.pathname.includes('MainPage.html')) {
        displayFeaturedProducts();
    }

    // Gắn sự kiện cho các nút "Add to Cart" (nếu có class add-to-cart-btn)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                name: button.dataset.name,
                price: parseInt(button.dataset.price),
                image: button.dataset.image
            };
            addToCart(product);
        });
    });
});