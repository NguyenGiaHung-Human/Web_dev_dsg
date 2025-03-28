// Cart.js

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('Cart.html')) {
        // Check if user is logged in
        if (!checkLogin()) {
            showNotification('Please login to view your cart!', () => {
                window.location.href = '../HTML/LoginRegister.html';
            });
            return;
        }

        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const buyBtn = document.getElementById('buy-btn');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (!cartItems || !cartTotal || !buyBtn) {
            console.error('Required elements not found in Cart.html');
            return;
        }

        // Add a 'selected' property to each item if not present
        cart = cart.map(item => ({
            ...item,
            selected: item.selected !== undefined ? item.selected : true
        }));

        // Save updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Function to calculate and update total
        const updateTotal = () => {
            const selectedItems = cart.filter(item => item.selected);
            const total = selectedItems.reduce((sum, item) => sum + (item.price || 0), 0);
            cartTotal.textContent = `${total.toLocaleString('en-US')} VND`;
            return selectedItems;
        };

        // Display cart items
        if (!cart || cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is currently empty.</p>';
            buyBtn.style.display = 'none';
        } else {
            cartItems.innerHTML = '';
            cart.forEach((item, index) => {
                if (!item || !item.name || !item.price || !item.image) {
                    console.warn(`Invalid item at index ${index}:`, item);
                    return;
                }
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <input type="checkbox" class="cart-item-checkbox" ${item.selected ? 'checked' : ''}>
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>${item.price.toLocaleString('en-US')} VND</p>
                    </div>
                    <div class="cart-item-actions">
                        <button onclick="removeFromCart(${index})">Remove</button>
                    </div>
                `;
                cartItems.appendChild(cartItem);

                // Add event listener for checkbox
                const checkbox = cartItem.querySelector('.cart-item-checkbox');
                checkbox.addEventListener('change', () => {
                    cart[index].selected = checkbox.checked;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateTotal();
                });
            });

            // Initial total calculation
            updateTotal();
        }

        // Handle buy button
        buyBtn.addEventListener('click', () => {
            if (!checkLogin()) {
                showNotification('Please login to proceed to checkout!', () => {
                    window.location.href = '../HTML/LoginRegister.html';
                });
                return;
            }

            const selectedItems = updateTotal();
            if (selectedItems.length === 0) {
                showNotification('Please select at least one item to proceed to checkout!');
                return;
            }
            localStorage.setItem('checkoutItems', JSON.stringify(selectedItems));
            window.location.href = '../HTML/Checkout.html';
        });
    }
});

// Function to remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    window.location.reload(); // Reload to update cart display
}