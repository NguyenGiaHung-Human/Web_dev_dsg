// Js/MainPage.js

function displayFeaturedProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        console.log("Displaying featured products...");
        productGrid.innerHTML = '';

        // Lấy 1 sản phẩm từ mỗi danh mục để hiển thị
        const featuredProducts = [
            bracelets[0], // Vòng Tay Type 1
            earrings[0],  // Bông Tai Type 1
            necklaces[0], // Dây Chuyền Type 1
            rings.find(r => r.image.includes("Diamond_ring")) // Nhẫn Kim Cương Type 1
        ].filter(product => product); // Lọc bỏ các giá trị undefined (nếu có)

        featuredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/150x150?text=Placeholder'">
                <h3>${product.name}</h3>
                <p>${product.price.toLocaleString('vi-VN')} VNĐ</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productGrid.appendChild(productDiv);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('MainPage.html')) {
        displayFeaturedProducts();
    }
});
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`${product.name} has been added to your cart!`);
}