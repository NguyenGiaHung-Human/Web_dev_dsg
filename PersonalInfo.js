// Js/PersonalInfo.js

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('PersonalInfo.html')) {
        // Check if user is logged in
        if (!checkLogin()) {
            showNotification('Please login to view your personal information!', () => {
                window.location.href = '../HTML/LoginRegister.html';
            });
            return;
        }

        const infoEmail = document.getElementById('info-email');
        const infoName = document.getElementById('info-name');
        const infoPhone = document.getElementById('info-phone');
        const infoAddress = document.getElementById('info-address');
        const infoForm = document.getElementById('info-form');
        const passwordForm = document.getElementById('password-form');
        const cancelBtn = document.getElementById('cancel-btn');
        const logoutSectionBtn = document.getElementById('logout-section-btn');

        if (!infoEmail || !infoName || !infoPhone || !infoAddress || !infoForm || !passwordForm || !cancelBtn || !logoutSectionBtn) {
            console.error('Required elements not found in PersonalInfo.html');
            return;
        }

        // Display user information
        infoEmail.textContent = localStorage.getItem('email') || 'Not provided';
        infoName.textContent = localStorage.getItem('name') || 'Not provided';
        infoPhone.textContent = localStorage.getItem('phone') || 'Not provided';
        infoAddress.textContent = localStorage.getItem('address') || 'Not provided';

        // Populate form with current information
        document.getElementById('edit-name').value = localStorage.getItem('name') || '';
        document.getElementById('edit-phone').value = localStorage.getItem('phone') || '';
        document.getElementById('edit-address').value = localStorage.getItem('address') || '';

        // Handle form submission for editing information
        infoForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('edit-name').value;
            const phone = document.getElementById('edit-phone').value;
            const address = document.getElementById('edit-address').value;

            // Save updated information to localStorage
            localStorage.setItem('name', name);
            localStorage.setItem('phone', phone);
            localStorage.setItem('address', address);

            // Update displayed information
            infoName.textContent = name || 'Not provided';
            infoPhone.textContent = phone || 'Not provided';
            infoAddress.textContent = address || 'Not provided';

            showNotification('Information updated successfully!');
        });

        // Handle cancel button
        cancelBtn.addEventListener('click', () => {
            document.getElementById('edit-name').value = localStorage.getItem('name') || '';
            document.getElementById('edit-phone').value = localStorage.getItem('phone') || '';
            document.getElementById('edit-address').value = localStorage.getItem('address') || '';
        });

        // Handle password change
        passwordForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            const storedPassword = localStorage.getItem('password');

            if (currentPassword !== storedPassword) {
                showNotification('Current password is incorrect!');
                return;
            }

            if (newPassword !== confirmPassword) {
                showNotification('New password and confirmation do not match!');
                return;
            }

            localStorage.setItem('password', newPassword);
            showNotification('Password changed successfully!');
            passwordForm.reset();
        });

        // Handle logout button in Personal Information section
        logoutSectionBtn.addEventListener('click', (event) => {
            event.preventDefault();
            logout();
        });
    }
});