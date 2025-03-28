// Js/LoginRegister.js

// Function to validate email (must contain @ and end with gmail.com)
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
}

// Function to validate password (only letters and numbers, no special characters)
function validatePassword(password) {
    const passwordRegex = /^[a-zA-Z0-9]+$/;
    return passwordRegex.test(password);
}

function login(email, password) {
    // Xóa giỏ hàng của tài khoản trước đó
    localStorage.removeItem('cart');
    
    // Lưu trạng thái đăng nhập
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('currentEmail', email); // Lưu email người dùng hiện tại
    alert('Login successful!');

    // Cập nhật số lượng giỏ hàng trên giao diện
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = '0'; // Đặt lại số lượng về 0
    }
}

// Hàm đăng xuất (thêm vào nếu chưa có)
function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('currentEmail');
    localStorage.removeItem('cart'); // Xóa giỏ hàng khi đăng xuất
    alert('You have been logged out!');

    // Cập nhật số lượng giỏ hàng trên giao diện
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = '0'; // Đặt lại số lượng về 0
    }

    // Chuyển hướng về trang chủ
    window.location.href = '../HTML/MainPage.html';
}

// Function to toggle between login and register sections on mobile
function toggleAuthSection() {
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const toggleBtn = document.getElementById('toggle-auth-btn');

    if (loginSection.classList.contains('active')) {
        loginSection.classList.remove('active');
        registerSection.classList.add('active');
        toggleBtn.textContent = 'Switch to Login';
    } else {
        loginSection.classList.add('active');
        registerSection.classList.remove('active');
        toggleBtn.textContent = 'Switch to Register';
    }
}

// Function to clear login form inputs
function clearLoginForm() {
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    if (loginEmail && loginPassword) {
        loginEmail.value = '';
        loginPassword.value = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('LoginRegister.html')) {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const loginSection = document.getElementById('login-section');
        const registerSection = document.getElementById('register-section');

        // Set default active section for mobile
        if (window.innerWidth <= 768) {
            loginSection.classList.add('active');
        }

        // Handle login form submission
        if (loginForm) {
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                const storedEmail = localStorage.getItem('email');
                const storedPassword = localStorage.getItem('password');

                // Validate email
                if (!validateEmail(email)) {
                    alert('Please enter a valid Gmail address (e.g., example@gmail.com).');
                    return;
                }

                // Validate password
                if (!validatePassword(password)) {
                    alert('Password can only contain letters and numbers, no special characters.');
                    return;
                }
                if (email === storedEmail && password === storedPassword) {
                    login(email, password);
                } else {
                    showNotification('Account not found! Please register a new account.', () => {
                        clearLoginForm();
                        if (window.innerWidth <= 768) {
                            loginSection.classList.remove('active');
                            registerSection.classList.add('active');
                            document.getElementById('toggle-auth-btn').textContent = 'Switch to Login';
                        } else {
                            registerSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                }
                // Check credentials
                if (email === storedEmail && password === storedPassword) {
                    login(email, password); // Call login function
                    window.location.href = '../HTML/MainPage.html'; // Redirect to Home
                } else {
                    // If account doesn't exist, switch to register form
                    alert('Account not found! Please register a new account.');
                    clearLoginForm(); // Clear login form inputs

                    if (window.innerWidth <= 768) {
                        // On mobile, toggle to register section
                        loginSection.classList.remove('active');
                        registerSection.classList.add('active');
                        document.getElementById('toggle-auth-btn').textContent = 'Switch to Login';
                    } else {
                        // On desktop, scroll to register section
                        registerSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        }

        // Handle register form submission
        if (registerForm) {
            registerForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const email = document.getElementById('register-email').value;
                const password = document.getElementById('register-password').value;
                const confirmPassword = document.getElementById('confirm-password').value;

                // Validate email
                if (!validateEmail(email)) {
                    alert('Please enter a valid Gmail address (e.g., example@gmail.com).');
                    return;
                }

                // Validate password
                if (!validatePassword(password)) {
                    alert('Password can only contain letters and numbers, no special characters.');
                    return;
                }

                // Validate confirm password
                if (password !== confirmPassword) {
                    alert('Passwords do not match! Please try again.');
                    return;
                }

                // Register the user and auto-login
                register(email, password);
                login(email, password); // Auto-login after successful registration
                window.location.href = '../HTML/MainPage.html'; // Redirect to Home
            });
        }
    }
});
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`${product.name} has been added to your cart!`);
}
function register(email, password) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    showNotification('Registration successful! You will be logged in automatically.', () => {
        login(email, password); // Gọi login sau khi thông báo
        window.location.href = '../HTML/MainPage.html'; // Chuyển hướng
    });
}

function login(email, password) {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('currentEmail', email);
    showNotification('Login successful!', () => {
        window.location.href = '../HTML/MainPage.html'; // Chuyển hướng sau khi nhấn OK
    });
}