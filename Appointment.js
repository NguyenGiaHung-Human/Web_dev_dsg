// Js/Appointment.js

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('Appointment.html')) {
        // Check if user is logged in
        if (!checkLogin()) {
            showNotification('Please login to schedule an appointment!', () => {
                window.location.href = '../HTML/LoginRegister.html';
            });
            return;
        }

        const appointmentForm = document.getElementById('appointment-form');

        if (!appointmentForm) {
            console.error('Appointment form not found in Appointment.html');
            return;
        }

        // Handle form submission
        appointmentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Validate form
            if (!appointmentForm.checkValidity()) {
                appointmentForm.reportValidity();
                return;
            }

            const appointment = {
                date: document.getElementById('appointment-date').value,
                time: document.getElementById('appointment-time').value,
                branch: document.getElementById('appointment-branch').value,
                notes: document.getElementById('appointment-notes').value,
                user: localStorage.getItem('email'),
                createdAt: new Date().toISOString(),
            };

            // Save appointment to localStorage
            let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
            appointments.push(appointment);
            localStorage.setItem('appointments', JSON.stringify(appointments));

            // Show confirmation and redirect
            showNotification('Appointment scheduled successfully! We will contact you to confirm.', () => {
                window.location.href = '../HTML/MainPage.html';
            });
        });
    }
});