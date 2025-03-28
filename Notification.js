// Js/Notification.js

// Function to show a custom notification
function showNotification(message, callback) {
    // Create overlay if it doesn't exist
    let overlay = document.querySelector('.notification-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('notification-overlay');
        document.body.appendChild(overlay);
    }

    // Create notification container
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <p>${message}</p>
        <button>OK</button>
    `;

    // Append notification to overlay
    overlay.appendChild(notification);

    // Show overlay
    overlay.style.display = 'flex';

    // Handle OK button click
    const okButton = notification.querySelector('button');
    okButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlay.removeChild(notification);
        if (callback) callback(); // Execute callback if provided
    });
}
function showNotification(message, callback) {
    let overlay = document.querySelector('.notification-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('notification-overlay');
        document.body.appendChild(overlay);
    }

    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <p>${message}</p>
        <button>OK</button>
    `;

    overlay.appendChild(notification);
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.classList.add('active'); // Kích hoạt hiệu ứng
    }, 10);

    const okButton = notification.querySelector('button');
    okButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlay.removeChild(notification);
        if (callback) callback();
    });
}
