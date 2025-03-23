<script>
const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("togglePassword");
const strengthText = document.getElementById("strength-text");

toggleButton.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show";
    }
});

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    if (password.length < 6) {
        strengthText.textContent = "Weak";
        strengthText.className = "weak";
    } else if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 8) {
        strengthText.textContent = "Strong";
        strengthText.className = "strong";
    } else {
        strengthText.textContent = "Medium";
        strengthText.className = "medium";
    }
});
</script>
<script src="js/script.js"></script>

