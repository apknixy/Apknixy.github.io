// यह Apps Script API का URL है, जो आपको मिला है।
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxatOWuT_5Mhb17LiJAmNanQyqrIPOH1ZWWH4PiEd2NE7lwGZqR42JZ9EjnCWG6gmX1/exec";

document.addEventListener("DOMContentLoaded", () => {
    // Signup Form Logic
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const messageElement = document.getElementById("message");

            if (password !== confirmPassword) {
                messageElement.textContent = "Passwords do not match.";
                return;
            }

            const formData = new FormData();
            formData.append("action", "signup");
            formData.append("email", email);
            formData.append("password", password);

            try {
                const response = await fetch(APPS_SCRIPT_URL, {
                    method: "POST",
                    body: formData
                });
                const result = await response.json();
                messageElement.textContent = result.message;
            } catch (error) {
                messageElement.textContent = "An error occurred. Please try again.";
            }
        });
    }

    // Login Form Logic
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const messageElement = document.getElementById("message");

            const formData = new FormData();
            formData.append("action", "login");
            formData.append("email", email);
            formData.append("password", password);
            
            try {
                const response = await fetch(APPS_SCRIPT_URL, {
                    method: "POST",
                    body: formData
                });
                const result = await response.json();
                messageElement.textContent = result.message;

                if (result.status === "success") {
                    // Save user ID to localStorage and redirect to homepage
                    localStorage.setItem("userId", result.userId);
                    window.location.href = "index.html"; // Redirect to your homepage
                }
            } catch (error) {
                messageElement.textContent = "An error occurred. Please try again.";
            }
        });
    }

    // Forgot Password Form Logic
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("forgotEmail").value;
            const messageElement = document.getElementById("message");

            const formData = new FormData();
            formData.append("action", "forgotPassword");
            formData.append("email", email);

            try {
                const response = await fetch(APPS_SCRIPT_URL, {
                    method: "POST",
                    body: formData
                });
                const result = await response.json();
                messageElement.textContent = result.message;
            } catch (error) {
                messageElement.textContent = "An error occurred. Please try again.";
            }
        });
    }
});
