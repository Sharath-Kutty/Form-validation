document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const message = form.message.value.trim();
        const contact = form.contact.value.trim();

        let isValid = true;
        let errorMessage = '';

        // Validate username
        if (!username) {
            isValid = false;
            errorMessage += 'Username is required.\n';
        }

        // Validate email
        if (!email) {
            isValid = false;
            errorMessage += 'Email is required.\n';
        }

        // Validate password
        const passwordPattern = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            isValid = false;
            errorMessage += 'Password must be at least 8 characters long and include at least one number and one special character.\n';
        }

        // Validate message
        if (!message) {
            isValid = false;
            errorMessage += 'Message is required.\n';
        }

        // Validate contact number
        if (!/^\d{10}$/.test(contact)) {
            isValid = false;
            errorMessage += 'Contact number must be exactly 10 digits.\n';
        }

        // Show error messages or confirmation
        if (!isValid) {
            alert('Please fix the following errors:\n' + errorMessage);
        } else {
             success.innerHTML="Form Validation Successful...!"
            form.reset(); // Reset the form after successful submission
        }
    });
});

         