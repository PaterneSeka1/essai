document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire si erreurs
    validateForm();
  });
  document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("password");
    let type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    this.textContent = type === "password" ? "👁️" : "🙈";
});
document.getElementById("toggleConfirmPassword").addEventListener("click", function () {
    let passwordField = document.getElementById("confirmPassword");
    let type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    this.textContent = type === "password" ? "👁️" : "🙈";
});
  
  function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
  
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
  
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
  
    let isValid = true;
  
    // Vérification email
    if (!email.includes("@")) {
      emailError.textContent = "L'email est invalide.";
      isValid = false;
    }
  
    // Vérification mot de passe (longueur)
    if (password.length < 8) {
      passwordError.textContent = "Le mot de passe doit contenir au moins 8 caractères.";
      isValid = false;
    }
  
    // Vérification confirmation du mot de passe
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Les mots de passe ne correspondent pas.";
      isValid = false;
    }
  
    // Si tout est bon, soumettre le formulaire
    if (isValid) {
      alert("Inscription réussie !");
      document.getElementById("registerForm").submit();
    }
  }