// Js/Checkout.js

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('Checkout.html')) {
        // Check if user is logged in
        if (!checkLogin()) {
            showNotification('Please login to proceed with checkout!', () => {
                window.location.href = '../HTML/LoginRegister.html';
            });
            return;
        }

        const buyerName = document.getElementById('buyer-name');
        const buyerPhone = document.getElementById('buyer-phone');
        const buyerAddress = document.getElementById('buyer-address');
        const orderItems = document.getElementById('order-items');
        const orderTotal = document.getElementById('order-total');
        const placeOrderBtn = document.getElementById('place-order-btn');
        const checkoutItems = JSON.parse(localStorage.getItem('checkoutItems')) || [];

        if (!buyerName || !buyerPhone || !buyerAddress || !orderItems || !orderTotal || !placeOrderBtn) {
            console.error('Required elements not found in Checkout.html');
            return;
        }

        // Display buyer information
        buyerName.textContent = localStorage.getItem('name') || 'Not provided';
        buyerPhone.textContent = localStorage.getItem('phone') || 'Not provided';
        buyerAddress.textContent = localStorage.getItem('address') || 'Not provided';

        // Display order items
        if (checkoutItems.length === 0) {
            orderItems.innerHTML = '<p>No items selected for checkout.</p>';
            placeOrderBtn.style.display = 'none';
        } else {
            orderItems.innerHTML = '';
            checkoutItems.forEach(item => {
                const orderItem = document.createElement('div');
                orderItem.classList.add('order-item');
                orderItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h4>${item.name}</h4>
                        <p>${item.price.toLocaleString('en-US')} VND</p>
                    </div>
                `;
                orderItems.appendChild(orderItem);
            });

            // Calculate and display total
            const total = checkoutItems.reduce((sum, item) => sum + (item.price || 0), 0);
            orderTotal.textContent = `${total.toLocaleString('en-US')} VND`;
        }

        // Handle place order
        placeOrderBtn.addEventListener('click', (event) => {
            event.preventDefault();

            // Check if shipping information is provided
            if (!localStorage.getItem('name') || !localStorage.getItem('phone') || !localStorage.getItem('address')) {
                showNotification('Please provide your shipping information in Personal Information page.', () => {
                    window.location.href = '../HTML/PersonalInfo.html';
                });
                return;
            }

            const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

            // Simulate order placement
            const order = {
                shippingInfo: {
                    name: localStorage.getItem('name'),
                    phone: localStorage.getItem('phone'),
                    address: localStorage.getItem('address'),
                },
                items: checkoutItems,
                total: checkoutItems.reduce((sum, item) => sum + (item.price || 0), 0),
                paymentMethod: paymentMethod === 'cash' ? 'Cash on Delivery' : 'Card Payment',
                date: new Date().toISOString(),
            };

            // Save order to localStorage (simulating order history)
            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));

            // Remove purchased items from cart
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(item => !checkoutItems.some(checkoutItem => checkoutItem.name === item.name));
            localStorage.setItem('cart', JSON.stringify(cart));

            // Clear checkout items
            localStorage.removeItem('checkoutItems');

            // Show confirmation and redirect to appointment page
            showNotification('Order placed successfully! Please schedule an appointment to try your products.', () => {
                window.location.href = '../HTML/Appointment.html';
            });
        });
    }
});