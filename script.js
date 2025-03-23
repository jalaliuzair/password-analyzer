document.getElementById("password").addEventListener("input", function() {
    let password = this.value;
    let strengthText = document.getElementById("strength-text");

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
