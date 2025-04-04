document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let rememberMe = document.getElementById("rememberMe").checked;
    
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");
    
    let hasError = false;
    
    if (username === "") {
        usernameError.classList.remove("hidden");
        hasError = true;
    } else {
        usernameError.classList.add("hidden");
    }
    
    if (password === "") {
        passwordError.classList.remove("hidden");
        hasError = true;
    } else {
        passwordError.classList.add("hidden");
    }
    
    if (!hasError) {
        if (rememberMe) {
            localStorage.setItem("savedUsername", username);
        } else {
            localStorage.removeItem("savedUsername");
        }
        alert("Connexion réussie !");
    }
});

// Pré-remplissage si "Se souvenir de moi" a été coché précédemment
document.addEventListener("DOMContentLoaded", function() {
    let savedUsername = localStorage.getItem("savedUsername");
    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
        document.getElementById("rememberMe").checked = true;
    }
});
// HTML pour le formulaire de connexion


document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("password");
    let type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    this.textContent = type === "password" ? "👁️" : "🙈";
});