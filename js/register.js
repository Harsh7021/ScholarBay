document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm-password');
    const togglePassword = document.getElementById('togglePassword');

    // 1. Toggle Password Visibility (Only for main password field)
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        confirmInput.setAttribute('type', type); // Optional: Toggle both
        
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // 2. Form Submission & Validation
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        const confirmPassword = confirmInput.value;

        // Reset error styling
        passwordInput.style.borderColor = "transparent";
        confirmInput.style.borderColor = "transparent";

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            passwordInput.style.borderColor = "#ef4444"; // Red border
            confirmInput.style.borderColor = "#ef4444"; // Red border
            return;
        }

        // Check password length
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Success Simulation
        console.log("Registering user:", { fullname, email });
        
        const btn = document.querySelector('.btn-primary');
        const originalText = btn.innerText;
        btn.innerText = "Creating Account...";
        btn.style.opacity = "0.7";

        setTimeout(() => {
            alert("Account created successfully! Redirecting to login...");
            window.location.href = "login.html"; // Redirect to login page
        }, 1500);
    });
});