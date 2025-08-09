// आपका Apps Script API URL
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxatOWuT_5Mhb17LiJAmNanQyqrIPOH1ZWWH4PiEd2NE7lwGZqR42JZ9EjnCWG6gmX1/exec";

document.addEventListener("DOMContentLoaded", () => {
    // --- Authentication and Redirection Logic ---
    const userId = localStorage.getItem("userId");
    // Only run on index.html
    if (window.location.pathname.endsWith("index.html") && !userId) {
        // If not logged in, redirect to login page
        window.location.href = "login.html";
    }

    // --- Logout Logic ---
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("userId");
            window.location.href = "login.html";
        });
    }

    // --- Menu Toggle Logic ---
    const menuBtn = document.getElementById("menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const sideMenu = document.getElementById("side-menu");
    if (menuBtn && closeMenuBtn && sideMenu) {
        menuBtn.addEventListener("click", () => {
            sideMenu.classList.add("open");
        });
        closeMenuBtn.addEventListener("click", () => {
            sideMenu.classList.remove("open");
        });
    }

    // --- Dark Mode Logic ---
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", () => {
            document.body.classList.toggle("dark-mode", darkModeToggle.checked);
        });
    }

    // --- Fetch Posts Logic ---
    if (window.location.pathname.endsWith("index.html")) {
        fetchPosts();
    }

    async function fetchPosts() {
        const postsContainer = document.getElementById("posts-container");
        postsContainer.innerHTML = "<h2>Loading posts...</h2>";
        try {
            const response = await fetch(APPS_SCRIPT_URL + "?action=getPosts");
            const posts = await response.json();
            postsContainer.innerHTML = ""; // Clear loading message

            if (posts && posts.length > 0) {
                posts.forEach(post => {
                    // This is a basic example, you will need to add more details here
                    const postElement = document.createElement("div");
                    postElement.className = "post";
                    postElement.innerHTML = `
                        <div class="post-header">
                            <img src="${post.profilePic}" alt="User Profile">
                            <span class="post-username">${post.username}</span>
                        </div>
                        <div class="post-content">
                            <h3>${post.title}</h3>
                            <p>${post.content}</p>
                            <img src="${post.mainImage}" alt="Post Image">
                        </div>
                        <div class="post-actions">
                            <button><i class="fas fa-thumbs-up"></i> ${post.likes}</button>
                            <button><i class="fas fa-comment"></i> ${post.comments}</button>
                        </div>
                    `;
                    postsContainer.appendChild(postElement);
                });
            } else {
                postsContainer.innerHTML = "<h2>No posts to display.</h2>";
            }
        } catch (error) {
            console.error("Failed to fetch posts:", error);
            postsContainer.innerHTML = "<h2>Failed to load posts. Please try again later.</h2>";
        }
    }
    
    // The rest of your existing login, signup, forgot password logic goes here...
    // I have moved the auth logic to the top of this script to ensure it runs first.
    // The previous code for loginForm, signupForm etc., should be added below.
});

// -----------------------------------------------------------------------

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
// -----------------------------------------------------------------------
