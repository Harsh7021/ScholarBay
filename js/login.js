document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    // 1. Toggle Password Visibility
    togglePassword.addEventListener('click', () => {
        // Toggle the type attribute
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle the eye icon
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // 2. Handle Login Submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const email = document.getElementById('email').value;
        const password = passwordInput.value;

        if(email && password) {
            // For now, just show an alert. 
            // Later, you will replace this with your Supabase/Database code.
            console.log("Logging in with:", email);
            
            // Simulating a button loading state
            const btn = document.querySelector('.btn-primary');
            const originalText = btn.innerText;
            btn.innerText = "Logging in...";
            btn.style.opacity = "0.7";
            
            setTimeout(() => {
                alert(`Welcome back, ${email}! (This is a demo)`);
                btn.innerText = originalText;
                btn.style.opacity = "1";
            }, 1000);
        }
    });
});