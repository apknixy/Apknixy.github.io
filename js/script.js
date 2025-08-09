
// आपका Apps Script API URL
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyuX7ue-RoYuzwRjLxjdQndnUBioLMhomBos6zverqU1ZOKx9muJNbvw5hc5Jd72AdJ/exec";

document.addEventListener("DOMContentLoaded", () => {
    // --- Authentication and Redirection Logic ---
    const userId = localStorage.getItem("userId");
    if (window.location.pathname.endsWith("index.html") && !userId) {
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

    // --- Signup Form Logic ---
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

    // --- Login Form Logic ---
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
                    localStorage.setItem("userId", result.userId);
                    window.location.href = "index.html";
                }
            } catch (error) {
                messageElement.textContent = "An error occurred. Please try again.";
            }
        });
    }

    // --- Forgot Password Form Logic ---
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
    
    // --- Post Upload Form Logic ---
    const postUploadForm = document.getElementById("postUploadForm");
    if (postUploadForm) {
        postUploadForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const userId = localStorage.getItem("userId");
            const title = document.getElementById("postTitle").value;
            const content = document.getElementById("postContent").value;
            const imageUrl = document.getElementById("postImageUrl").value;
            const messageElement = document.getElementById("message");

            if (!userId) {
                messageElement.textContent = "Please log in to upload posts.";
                return;
            }

            const formData = new FormData();
            formData.append("action", "uploadPost");
            formData.append("userId", userId);
            formData.append("title", title);
            formData.append("content", content);
            formData.append("imageUrl", imageUrl);

            try {
                const response = await fetch(APPS_SCRIPT_URL, {
                    method: "POST",
                    body: formData
                });
                const result = await response.json();
                messageElement.textContent = result.message;
                if (result.status === "success") {
                    postUploadForm.reset();
                }
            } catch (error) {
                messageElement.textContent = "An error occurred. Please try again.";
            }
        });
    }

    // --- Posts Fetching and Display Logic ---
    const postsContainer = document.getElementById("posts-container");

    async function fetchAndDisplayPosts() {
        if (!postsContainer) return;

        postsContainer.innerHTML = "<h2>Loading posts...</h2>";
        try {
            const response = await fetch(APPS_SCRIPT_URL + "?action=getPosts");
            const posts = await response.json();
            postsContainer.innerHTML = "";

            if (posts && posts.length > 0) {
                posts.reverse().forEach(post => {
                    const postElement = document.createElement("div");
                    postElement.className = "post";
                    postElement.innerHTML = `
                        <div class="post-header">
                            <img src="https://via.placeholder.com/40" alt="User Profile">
                            <span class="post-username">User ${post.user_id}</span>
                        </div>
                        <div class="post-content">
                            <h3>${post.title}</h3>
                            <img src="${post.main_image_url}" alt="Post Image">
                            <p>${post.content_html}</p>
                        </div>
                        <div class="post-actions">
                            <button><i class="fas fa-thumbs-up"></i> Likes: ${post.likes_count}</button>
                            <button><i class="fas fa-comment"></i> Comments: ${post.comments_count}</button>
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

    if (window.location.pathname.endsWith("index.html")) {
        fetchAndDisplayPosts();
    }
});
