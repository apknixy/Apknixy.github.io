// Firebase Configuration (from your input)
const firebaseConfig = {
    apiKey: "AIzaSyDlZA4grzF3fx95-11E4s7ASXwkIij1k1w",
    authDomain: "addmint-7ab6b.firebaseapp.com",
    databaseURL: "https://addmint-7ab6b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "addmint-7ab6b",
    storageBucket: "addmint-7ab6b.firebasestorage.app",
    messagingSenderId: "504015450137",
    appId: "1:504015450137:web:694b176313582cce1e7a88",
    measurementId: "G-H7J7M23Z82"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// --- DOM Elements ---
// const splashScreen = document.getElementById('splash-screen'); // Splash screen is now removed from HTML.
const authContainer = document.getElementById('auth-container'); // Container for login/signup screens
const appContainer = document.getElementById('app-container'); // Main application container
const loadTestMessage = document.getElementById('load-test-message'); // Element for debugging basic JS load


// Auth Screens Elements
const loginScreen = document.getElementById('login-screen');
const signupScreen = document.getElementById('signup-screen');
const loginEmailInput = document.getElementById('login-email');
const loginPasswordInput = document.getElementById('login-password');
const loginBtn = document.getElementById('login-btn');
const loginStatus = document.getElementById('login-status');
const showSignupLink = document.getElementById('show-signup');

const signupEmailInput = document.getElementById('signup-email');
const signupPasswordInput = document.getElementById('signup-password');
const signupConfirmPasswordInput = document.getElementById('signup-confirm-password');
const signupBtn = document.getElementById('signup-btn');
const signupStatus = document.getElementById('signup-status');
const showLoginLink = document.getElementById('show-login');

const forgotPasswordLink = document.getElementById('forgot-password-link');
const forgotPasswordModal = document.getElementById('forgot-password-modal');
const resetEmailInput = document.getElementById('reset-email');
const sendResetEmailBtn = document.getElementById('send-reset-email-btn');
const resetStatus = document.getElementById('reset-status');
const closeResetModalBtn = document.getElementById('close-reset-modal');


const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');
const mainContent = document.querySelector('.main-content');
const bottomNavItems = document.querySelectorAll('.app-bottom-nav .nav-item');
const screenSections = document.querySelectorAll('.app-screen');
// Coins, Credits, Limits, Gift Claim Button removed based on previous request

const refreshPostsBtn = document.getElementById('refresh-posts-btn');
const postsFeed = document.getElementById('posts-feed');
const loadingSpinner = document.getElementById('loading-spinner');


// Post Upload Screen elements
const uploadScreen = document.getElementById('upload-screen');
const postCategorySelect = document.getElementById('post-category');
const postContentInput = document.getElementById('post-content');
const postBoostSelect = document.getElementById('post-boost'); // Kept disabled for 24 hours only
const monetizePostCheckbox = document.getElementById('monetize-post-checkbox');
const publishPostBtn = document.getElementById('publish-post-btn');
const uploadStatus = document.getElementById('upload-status');
const editorToolbar = document.querySelector('.editor-toolbar');

// Profile Screen elements
const profileScreen = document.getElementById('profile-screen');
const myProfileAvatar = document.getElementById('my-profile-avatar');
const myProfileUsername = document.getElementById('my-profile-username');
const myProfileName = document.getElementById('my-profile-name');
const myProfileBio = document.getElementById('my-profile-bio');
const myPostsCount = document.getElementById('my-posts-count');
const myFollowersCount = document.getElementById('my-followers-count');
const myFollowingCount = document.getElementById('my-following-count');
const editProfileBtn = document.getElementById('edit-profile-btn');
const followUserBtn = document.getElementById('follow-user-btn');
const unfollowUserBtn = document.getElementById('unfollow-user-btn');
const messageUserBtn = document.getElementById('message-user-btn');
const profileWhatsappLink = document.getElementById('profile-whatsapp-link');
const profileInstagramLink = document.getElementById('profile-instagram-link');
const currentProfileUsernamePosts = document.getElementById('current-profile-username-posts');
const profilePostsFeed = document.getElementById('profile-posts-feed');
const profileRepostsFeed = document.getElementById('profile-reposts-feed');
const profilePostTabs = document.querySelectorAll('.profile-post-tabs .tab-btn');

const editProfileModal = document.getElementById('edit-profile-modal');
const profileModalInstruction = document.getElementById('profile-modal-instruction');
const editUsernameInput = document.getElementById('edit-username');
const usernameAvailability = document.getElementById('username-availability');
const editNameInput = document.getElementById('edit-name');
const editBioInput = document.getElementById('edit-bio');
const editWhatsappInput = document.getElementById('edit-whatsapp');
const editInstagramInput = document.getElementById('edit-instagram');
const profilePicUrlInput = document.getElementById('profile-pic-url-input');
const profileLogoOptions = document.getElementById('profile-logo-options');
const accountPrivacyToggle = document.getElementById('account-privacy-toggle');
const accountPrivacyStatus = document.getElementById('account-privacy-status');
const saveProfileBtn = document.getElementById('save-profile-btn');
const cancelEditProfileBtn = document.getElementById('cancel-edit-profile-btn');

const followListModal = document.getElementById('follow-list-modal');
const followListTitle = document.getElementById('follow-list-title');
const followListContent = document.getElementById('follow-list-content');
const closeFollowListModalBtn = document.getElementById('close-follow-list-modal');

// Messaging Screen elements
const messagesScreen = document.getElementById('messages-screen');
const messageListContainer = document.getElementById('message-list-container');
const recentChatsList = document.getElementById('recent-chats-list');
const chatWindowContainer = document.getElementById('chat-window-container');
const chatPartnerUsername = document.getElementById('chat-partner-username');
const chatPartnerAvatar = document.getElementById('chat-partner-avatar');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendMessageBtn = document.getElementById('send-message-btn');
const backToChatsBtn = document.getElementById('back-to-chats-btn');

// Search Screen elements
const searchScreen = document.getElementById('search-screen');
const searchQueryInput = document.getElementById('search-query');
const searchBtn = document.getElementById('search-btn');
const searchUserList = document.getElementById('search-user-list');
const searchPostList = document.getElementById('search-post-list');
const noSearchResults = document.getElementById('no-search-results');

// Earnings Screen elements
const earningsScreen = document.getElementById('earnings-screen');
const totalMonetizedViewsSpan = document.getElementById('total-monetized-views');
const totalUnmonetizedViewsSpan = document.getElementById('total-unmonetized-views');
const estimatedEarningsSpan = document.getElementById('estimated-earnings');
const withdrawBtn = document.getElementById('withdraw-btn');
const withdrawalStatusDiv = document.getElementById('withdrawal-status');

const withdrawalModal = document.getElementById('withdrawal-modal');
const withdrawalViewsDisplay = document.getElementById('withdrawal-views-display');
const withdrawalMethodSelect = document.getElementById('withdrawal-method');
const withdrawalIdLabel = document.getElementById('withdrawal-id-label');
const withdrawalIdInput = document.getElementById('withdrawal-id-input');
const confirmWithdrawalBtn = document.getElementById('confirm-withdrawal-btn');
const withdrawalDetailsReview = document.getElementById('withdrawal-details-review');
const reviewMethodSpan = document.getElementById('review-method');
const reviewIdSpan = document.getElementById('review-id');
const reviewViewsSpan = document.getElementById('review-views');
const editWithdrawalBtn = document.getElementById('edit-withdrawal-btn');
const sendWithdrawalRequestBtn = document.getElementById('send-withdrawal-request-btn');
const cancelWithdrawalBtn = document.getElementById('cancel-withdrawal-btn');


// Comments Modal elements
const commentsModal = document.getElementById('comments-modal');
const commentsModalTitle = document.getElementById('comments-modal-title');
const commentsList = document.getElementById('comments-list');
const newCommentInput = document.getElementById('new-comment-input');
const addCommentBtn = document.getElementById('add-comment-btn');
const closeCommentsModalBtn = document.getElementById('close-comments-modal');

// Immersive Feed elements
const immersiveFeed = document.getElementById('immersive-feed');
const feedLoadingSpinner = document.getElementById('feed-loading-spinner');

// Sidebar user info elements
const sidebarProfileAvatar = document.getElementById('sidebar-profile-avatar');
const sidebarUsername = document.getElementById('sidebar-username');

// Dark Mode Toggle elements
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
const body = document.body;
const postCategoryFilter = document.getElementById('post-category-filter');

// --- Global Variables ---
let currentUser = null; // Currently logged-in user
let currentProfileViewingId = null; // ID of the profile currently being displayed
let currentChatPartnerId = null; // ID of the user in the active chat

let lastVisiblePost = null; // For Home feed pagination
let lastVisibleImmersivePost = null; // For Immersive feed pagination

let fetchingPosts = false; // Flag to prevent multiple concurrent post fetches (Home)
let fetchingImmersivePosts = false; // Flag for Immersive feed

let postsToLoadPerScroll = 10; // Number of posts to load on scroll

let dataSaverEnabled = false; // Flag for data saver feature (logic implementation needed)
let currentPostIdForComments = null; // Stores post ID when comments modal is open

let isProcessingAuth = false; // Prevents multiple rapid authentication requests
let hasRunInitialAuthCheck = false; // Ensures the `onAuthStateChanged` block runs its full logic only once per app load cycle

// Text-to-Speech API
const synth = window.speechSynthesis;

// Profile Logo Data (50 entries)
const PROFILE_LOGOS = [
    { class: 'logo-1', emoji: '🧑', color: '#ff6347' },
    { class: 'logo-2', emoji: '👩', color: '#6a5acd' },
    { class: 'logo-3', emoji: '🚀', color: '#32cd32' },
    { class: 'logo-4', emoji: '💡', color: '#ff8c00' },
    { class: 'logo-5', emoji: '🌟', color: '#ffd700' },
    { class: 'logo-6', emoji: '🌈', color: '#9932cc' },
    { class: 'logo-7', emoji: '🦊', color: '#d2691e' },
    { class: 'logo-8', emoji: '🐼', color: '#6495ed' },
    { class: 'logo-9', emoji: '🦋', color: '#dda0dd' },
    { class: 'logo-10', emoji: '🐢', color: '#20b2aa' },
    { class: 'logo-11', emoji: '🤖', color: '#87ceeb' },
    { class: 'logo-12', emoji: '👽', color: '#7cfc00' },
    { class: 'logo-13', emoji: '🦄', color: '#ee82ee' },
    { class: 'logo-14', emoji: '🐉', color: '#48d1cc' },
    { class: 'logo-15', emoji: '🌊', color: '#4682b4' },
    { class: 'logo-16', emoji: '🔥', color: '#dc143c' },
    { class: 'logo-17', emoji: '👑', color: '#f0e68c' },
    { class: 'logo-18', emoji: '💎', color: '#00ced1' },
    { class: 'logo-19', emoji: '🔑', color: '#b0e0e6' },
    { class: 'logo-20', emoji: '⚡', color: '#ffff00' },
    { class: 'logo-21', emoji: '🎵', color: '#ff69b4' },
    { class: 'logo-22', emoji: '🎨', color: '#7b68ee' },
    { class: 'logo-23', emoji: '🧩', color: '#ffa07a' },
    { class: 'logo-24', emoji: '🍔', color: '#cd853f' },
    { class: 'logo-25', emoji: '🍕', color: '#f08080' },
    { class: 'logo-26', emoji: '🎮', color: '#c0c0c0' },
    { class: 'logo-27', emoji: '✈️', color: '#afeeee' },
    { class: 'logo-28', emoji: '🌳', color: '#228b22' },
    { class: 'logo-29', emoji: '🌸', color: '#ffb6c1' },
    { class: 'logo-30', emoji: '⚽', color: '#b0c4de' },
    { class: 'logo-31', emoji: '🎸', color: '#8b4513' },
    { class: 'logo-32', emoji: '🚲', color: '#00fa9a' },
    { class: 'logo-33', emoji: '📚', color: '#deb887' },
    { class: 'logo-34', emoji: '☕', color: '#d2b48c' },
    { class: 'logo-35', emoji: '🎁', color: '#f4a460' },
    { class: 'logo-36', emoji: '🎉', color: '#ba55d3' },
    { class: 'logo-37', emoji: '🌍', color: '#87cefa' },
    { class: 'logo-38', emoji: '🔬', color: '#778899' },
    { class: 'logo-39', emoji: '🔭', color: '#696969' },
    { class: 'logo-40', emoji: '🛠️', color: '#d3d3d3' },
    { class: 'logo-41', emoji: '⚖️', color: '#add8e6' },
    { class: 'logo-42', emoji: '💰', color: '#b8860b' },
    { class: 'logo-43', emoji: '🛡️', color: '#5f9ea0' },
    { class: 'logo-44', emoji: '🔔', color: '#f0f8ff' },
    { class: 'logo-45', emoji: '⏳', color: '#fa8072' },
    { class: 'logo-46', emoji: '💾', color: '#3cb371' },
    { class: 'logo-47', emoji: '⚙️', color: '#4682b4' },
    { class: 'logo-48', emoji: '📡', color: '#2e8b57' },
    { class: 'logo-49', emoji: '🌐', color: '#a52a2a' },
    { class: 'logo-50', emoji: '📈', color: '#c71585' }
];


// --- Utility Functions ---

// Display a small toast notification on screen
function showToast(message, type = 'info', duration = 3000) {
    toastNotification.textContent = message;
    toastNotification.className = `toast-notification show ${type}`; // Add type for styling (e.g., 'error', 'success')
    setTimeout(() => {
        toastNotification.className = 'toast-notification';
    }, duration);
}

// Update authentication form status messages
function updateAuthStatus(element, message, type) {
    element.textContent = message;
    element.className = `status-message ${type}`;
    // If message is empty or hidden, set display:none for better rendering.
    if (type === 'hidden' || message === '') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block'; // Or whatever is default for this status message
    }
}


// Format numbers for display (e.g., 12000 -> 12k)
function formatNumber(num) {
    if (num === undefined || num === null) return 0;
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return num;
}

// Switch between app screens (Home, Profile, etc.)
function showScreen(screenId) {
    screenSections.forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    // Update active state in bottom navigation
    bottomNavItems.forEach(item => {
        if (item.dataset.screen === screenId.replace('-screen', '')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Close sidebar if open
    sidebar.classList.remove('open');
}

// Generate a random logo class from PROFILE_LOGOS
function getRandomLogoClass() {
    const randomIndex = Math.floor(Math.random() * PROFILE_LOGOS.length);
    return PROFILE_LOGOS[randomIndex].class;
}

// Get the full CSS class name for a given logo name (e.g., 'logo-1' -> 'user-logo-1')
function getLogoCssClass(logoName) {
    const logo = PROFILE_LOGOS.find(l => l.class === logoName);
    return logo ? `user-${logo.class}` : 'user-logo-1'; // Fallback to 'user-logo-1'
}

// Dynamically inject CSS for profile logos to allow pseudo-elements (emojis) and background colors
function applyLogoStyles() {
    PROFILE_LOGOS.forEach(logo => {
        if (!document.head.querySelector(`style[data-logo-class="${logo.class}"]`)) {
            const style = document.createElement('style');
            style.setAttribute('data-logo-class', logo.class);
            style.innerHTML = `
                .profile-avatar.user-${logo.class}, .profile-avatar-large.user-${logo.class}, .profile-avatar-small.user-${logo.class}, .logo-option-item.user-${logo.class} { background-color: ${logo.color}; }
                .profile-avatar.user-${logo.class}::before, .profile-avatar-large.user-${logo.class}::before, .profile-avatar-small.user-${logo.class}::before, .logo-option-item.user-${logo.class}::before { content: '${logo.emoji}'; font-size: ${logo.class.includes('large') ? '60px' : logo.class.includes('small') ? '30px' : '24px'}; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: var(--button-primary-text); }
            `;
            document.head.appendChild(style);
        }
    });
}
applyLogoStyles(); // Call once when the script loads.


// --- Core Authentication Flow Logic ---

// Show authentication container (Login/Signup) UI
function showAuthContainerUI() {
    console.log("Entering showAuthContainerUI()");
    // Set explicit display to flex to correctly handle visibility AND layout
    authContainer.style.display = 'flex';
    authContainer.classList.remove('hidden'); // Ensure it's not marked as 'hidden' anymore
    
    appContainer.style.display = 'none'; // Ensure app container is hidden
    appContainer.classList.add('hidden'); 
    
    loginScreen.classList.add('active'); // Default to login screen active
    signupScreen.classList.remove('active'); // Ensure signup is inactive
    console.log("UI: Displaying Authentication screens.");
}

// Show main app container (Home Feed, Profile, etc.) UI
function showAppContainerUI() {
    console.log("Entering showAppContainerUI()");
    // Set explicit display to flex to correctly handle visibility AND layout
    appContainer.style.display = 'flex';
    appContainer.classList.remove('hidden'); // Ensure it's not marked as 'hidden' anymore

    authContainer.style.display = 'none'; // Ensure auth container is hidden
    authContainer.classList.add('hidden'); 
    
    console.log("UI: Displaying Main App screens.");
}


// Central function to handle authentication state and UI redirection
async function checkUserAndRedirect(user) {
    console.log(`checkUserAndRedirect called. User: ${user ? user.uid : "None"}. Email Verified: ${user ? user.emailVerified : "N/A"}.`);
    
    // Only process this flow once per full page load, regardless of subsequent quick state changes.
    // This is crucial to prevent re-rendering/re-initialization bugs on multiple onAuthStateChanged firings.
    if (hasRunInitialAuthCheck && user === auth.currentUser) {
        console.log("checkUserAndRedirect: Already performed initial check, skipping.");
        return;
    }
    hasRunInitialAuthCheck = true; // Mark as started immediately to prevent other runs.

    // Show the small test message if JavaScript is loading correctly.
    if (loadTestMessage) {
        loadTestMessage.style.display = 'block'; // Make the test message visible
        console.log("Test message should be visible: JavaScript is loading!");
    }


    if (user && user.emailVerified) {
        currentUser = user; // Set global current user
        console.log(`User ${user.uid} is authenticated and verified. Attempting to load user profile.`);
        try {
            const userDocRef = db.collection('users').doc(currentUser.uid);
            const userDoc = await userDocRef.get();
            const userData = userDoc.data();

            // If user document is missing OR username/name are not set, force profile setup.
            if (!userDoc.exists || !userData.username || userData.username === "" || !userData.name || userData.name === "") {
                console.log("User profile incomplete (missing username or display name). Forcing profile setup.");
                showAppContainerUI(); // Transition to the main app container.
                showScreen('profile-screen'); // Navigate to the profile screen.
                editProfileModal.classList.remove('hidden'); // Automatically open the edit profile modal.
                profileModalInstruction.textContent = "Welcome! Please complete your profile (Username and Display Name are required) to continue using the app.";
                myProfileUsername.textContent = "@NewUser"; // Placeholder for UI
                sidebarUsername.textContent = "New User"; // Placeholder for UI
                sidebarProfileAvatar.className = `profile-avatar-small ${getLogoCssClass('logo-1')}`; // Default logo
                showToast("Welcome! Please complete your profile (Username and Display Name are required).", 'info', 5000);
            } else {
                console.log("User profile is complete. Loading main application UI.");
                loadUserProfile(currentUser.uid); // Load full profile details, update sidebar, etc.
                showAppContainerUI(); // Transition to the main app container.
                showScreen('home-screen'); // Default to home feed.
                loadPosts(); // Start loading content.
                showToast("Logged in successfully!", 'success');
            }
        } catch (firestoreError) {
            console.error("Firebase Firestore error while loading user profile:", firestoreError);
            showToast("Error loading user profile. Please try logging in again.", 'error', 7000);
            auth.signOut(); // Critical error, force logout.
            showAuthContainerUI(); // Fallback to authentication UI.
        }
    } else { // No user is logged in OR user's email is not verified
        currentUser = null; // Ensure global user object is null.
        console.log("No authenticated and verified user found. Displaying Authentication UI.");
        showAuthContainerUI(); // Display the Login/Register screens.

        if (user && !user.emailVerified) { // If there's a user object but not verified
            console.log("User is authenticated but email not verified. Instructing verification.");
            updateAuthStatus(loginStatus, "Please verify your email to continue. Check your inbox (or spam folder) for a verification link.", 'info');
            auth.signOut(); // Sign out unverified users to streamline verification flow.
        } else {
            console.log("No active user session found. Showing login form.");
            updateAuthStatus(loginStatus, "", 'hidden'); // Clear any previous messages.
        }
    }
}


// Attach the main authentication state listener to Firebase
auth.onAuthStateChanged(user => {
    // console.log("onAuthStateChanged event fired. Current User:", user ? user.uid : "None");
    checkUserAndRedirect(user); // Calls our central handler
});


// Login/Signup/Forgot Password UI interaction handlers
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginScreen.classList.remove('active');
    signupScreen.classList.add('active');
    updateAuthStatus(loginStatus, '', 'hidden'); // Clear statuses on screen switch
    updateAuthStatus(signupStatus, '', 'hidden');
    console.log("UI: Switched to Signup screen.");
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupScreen.classList.remove('active');
    loginScreen.classList.add('active');
    updateAuthStatus(loginStatus, '', 'hidden'); // Clear statuses on screen switch
    updateAuthStatus(signupStatus, '', 'hidden');
    console.log("UI: Switched to Login screen.");
});

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    forgotPasswordModal.classList.remove('hidden');
    updateAuthStatus(resetStatus, '', 'hidden'); // Clear status on modal open
    resetEmailInput.value = ''; // Clear email input
    console.log("UI: Displayed Forgot Password modal.");
});

closeResetModalBtn.addEventListener('click', () => {
    forgotPasswordModal.classList.add('hidden');
    console.log("UI: Closed Forgot Password modal.");
});

loginBtn.addEventListener('click', signInUser);
signupBtn.addEventListener('click', registerUser);
sendResetEmailBtn.addEventListener('click', sendPasswordReset);


// Handle user sign-in process
async function signInUser() {
    if (isProcessingAuth) { // Prevent multiple clicks/requests
        console.warn("Authentication process already ongoing. Please wait.");
        return;
    }
    isProcessingAuth = true; // Set flag
    loginBtn.disabled = true; // Disable button during process

    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value.trim();

    if (!email || !password) {
        updateAuthStatus(loginStatus, "Please enter both email and password.", 'error');
        isProcessingAuth = false; // Reset flag
        loginBtn.disabled = false; // Re-enable button
        return;
    }

    try {
        console.log("Attempting user sign-in for:", email);
        updateAuthStatus(loginStatus, "Logging in...", 'info');
        await auth.signInWithEmailAndPassword(email, password);
        // Success: `onAuthStateChanged` listener will pick this up and redirect UI.
        loginEmailInput.value = ''; // Clear inputs after successful attempt.
        loginPasswordInput.value = '';
    } catch (error) {
        console.error("Firebase Sign-in error:", error.code, error.message);
        let errorMessage = "Login failed. Please check your email and password.";
        // Friendly error messages based on Firebase error codes
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
            errorMessage = "Invalid email or password.";
        } else if (error.code === 'auth/too-many-requests') {
            errorMessage = "Too many failed login attempts. Please try again later.";
        } else if (error.code === 'auth/network-request-failed') {
            errorMessage = "Network error. Check your internet connection.";
        } else if (error.code === 'auth/user-disabled') {
            errorMessage = "Your account has been disabled.";
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = "Invalid email format.";
        } else if (error.code === 'auth/internal-error') {
            errorMessage = "Server error. Please try again later.";
        }
        updateAuthStatus(loginStatus, errorMessage, 'error');
    } finally {
        isProcessingAuth = false; // Always reset flag
        loginBtn.disabled = false; // Always re-enable button
    }
}

// Handle user registration process
async function registerUser() {
    if (isProcessingAuth) { // Prevent multiple clicks/requests
        console.warn("Authentication process already ongoing. Please wait.");
        return;
    }
    isProcessingAuth = true; // Set flag
    signupBtn.disabled = true; // Disable button

    const email = signupEmailInput.value.trim();
    const password = signupPasswordInput.value.trim();
    const confirmPassword = signupConfirmPasswordInput.value.trim();

    if (!email || !password || !confirmPassword) {
        updateAuthStatus(signupStatus, "All fields are required.", 'error');
        isProcessingAuth = false;
        signupBtn.disabled = false;
        return;
    }
    if (password.length < 6) {
        updateAuthStatus(signupStatus, "Password must be at least 6 characters long.", 'error');
        isProcessingAuth = false;
        signupBtn.disabled = false;
        return;
    }
    if (password !== confirmPassword) {
        updateAuthStatus(signupStatus, "Passwords do not match.", 'error');
        isProcessingAuth = false;
        signupBtn.disabled = false;
        return;
    }

    try {
        console.log("Attempting user registration for:", email);
        updateAuthStatus(signupStatus, "Registering user...", 'info');
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        await sendEmailVerification(userCredential.user); // Send verification email immediately

        // Create initial user document in Firestore with placeholder data.
        await db.collection('users').doc(userCredential.user.uid).set({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            username: "", // Will be set in profile edit
            name: "",     // Will be set in profile edit
            bio: "",
            whatsapp: "",
            instagram: "",
            profileLogo: getRandomLogoClass(), // Assign a random default logo
            profilePicUrl: "", // Empty for direct URL
            isPrivate: false,
            followers: [],
            following: [],
            followersCount: 0,
            followingCount: 0,
            postCount: 0,
            monetizedViewsCount: 0,
            unmonetizedViewsCount: 0,
            earnedAmount: 0.00,
            reposts: [],
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        console.log("User registered and profile doc created. Showing verification message.");
        updateAuthStatus(signupStatus, "Registration successful! Please verify your email.", 'success');
        signupEmailInput.value = '';
        signupPasswordInput.value = '';
        signupConfirmPasswordInput.value = '';
        // Automatically switch to login screen and update its status.
        loginScreen.classList.add('active');
        signupScreen.classList.remove('active');
        updateAuthStatus(loginStatus, "Registered! Check your inbox (or spam) to verify email, then login.", 'info');

    } catch (error) {
        console.error("Firebase Registration error:", error.code, error.message);
        let errorMessage = "Registration failed.";
        if (error.code === 'auth/email-already-in-use') {
            errorMessage = "This email is already in use. Please log in instead.";
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = "Invalid email format. Please check and retry.";
        } else if (error.code === 'auth/weak-password') {
            errorMessage = "Password is too weak (min 6 chars).";
        } else if (error.code === 'auth/network-request-failed') {
            errorMessage = "Network error during registration. Check internet.";
        }
        updateAuthStatus(signupStatus, errorMessage, 'error');
    } finally {
        isProcessingAuth = false; // Always reset flag
        signupBtn.disabled = false; // Always re-enable button
    }
}

// Send email verification link
async function sendEmailVerification(user) {
    try {
        console.log(`Sending verification email to: ${user.email}`);
        await user.sendEmailVerification();
        console.log("Verification email sent successfully.");
    } catch (error) {
        console.error("Error sending verification email:", error);
        showToast("Failed to send verification email. Try again later.", 'error');
    }
}

// Handle password reset request
async function sendPasswordReset() {
    if (isProcessingAuth) {
        console.warn("Authentication process already ongoing.");
        return;
    }
    isProcessingAuth = true;
    sendResetEmailBtn.disabled = true; // Disable button

    const email = resetEmailInput.value.trim();
    if (!email) {
        updateAuthStatus(resetStatus, "Please enter your email.", 'error');
        isProcessingAuth = false;
        sendResetEmailBtn.disabled = false;
        return;
    }

    try {
        console.log("Sending password reset email for:", email);
        await auth.sendPasswordResetEmail(email);
        updateAuthStatus(resetStatus, "Password reset link sent to your email!", 'success');
    } catch (error) {
        console.error("Firebase Forgot password error:", error.code, error.message);
        let errorMessage = "Failed to send reset link.";
        if (error.code === 'auth/user-not-found') {
            errorMessage = "No account found with that email address.";
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = "Invalid email format. Please check.";
        } else if (error.code === 'auth/network-request-failed') {
            errorMessage = "Network error. Check your internet connection.";
        }
        updateAuthStatus(resetStatus, errorMessage, 'error');
    } finally {
        isProcessingAuth = false;
        sendResetEmailBtn.disabled = false; // Re-enable button
    }
}

// Handle user logout
document.getElementById('logout-btn').addEventListener('click', async () => {
    try {
        console.log("Attempting user logout.");
        await auth.signOut();
        showToast("Logged out successfully.", 'info');

        // Clear input fields and reset state for new login/registration.
        loginEmailInput.value = '';
        loginPasswordInput.value = '';
        signupEmailInput.value = '';
        signupPasswordInput.value = '';
        signupConfirmPasswordInput.value = '';
        editUsernameInput.value = '';
        editNameInput.value = '';
        editBioInput.value = '';
        editWhatsappInput.value = '';
        editInstagramInput.value = '';
        profilePicUrlInput.value = '';
        
        // Reset flag so onAuthStateChanged will perform full check next time.
        hasRunInitialAuthCheck = false; 

        // UI redirection will be handled by `onAuthStateChanged` listener.
        // This ensures the correct UI (login/register) is shown based on Firebase's confirmed state.
    } catch (error) {
        console.error("Error during logout:", error);
        showToast("Failed to log out.", 'error');
    }
});


// --- Initial App Load Logic (Triggered on DOMContentLoaded) ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event fired. Initializing app UI states.");
    
    // 1. Initially hide main app and authentication UI elements to control visibility from JS.
    // CSS's .hidden class will ensure they are initially display:none.
    appContainer.classList.add('hidden'); 
    authContainer.classList.add('hidden'); 

    // 2. Make the load test message visible. If this is not seen on screen, JS is failing to load/execute.
    if (loadTestMessage) {
        loadTestMessage.style.display = 'block'; 
        console.log("Diagnostic: 'load-test-message' is now displayed. JavaScript should be running.");
    } else {
        console.warn("Diagnostic: 'load-test-message' element not found in DOM.");
    }


    // 3. Create a promise that resolves after a short, fixed delay (e.g., 50ms).
    // This provides a tiny buffer to allow browser rendering to catch up, improving smooth UI transitions.
    splashScreenMinTimePromise = new Promise(resolve => {
        setTimeout(() => {
            console.log("UI readiness buffer (50ms) resolved. Proceeding with auth check.");
            resolve();
        }, 50); // Minimal delay
    });

    // 4. Set a fallback timeout for onAuthStateChanged listener.
    // In rare cases (e.g., severe network issues, Firebase SDK failing), `onAuthStateChanged` might not fire quickly.
    // This ensures UI still proceeds after a fixed max delay, preventing a completely blank/stuck screen.
    splashScreenTimeout = setTimeout(() => {
        if (!hasRunInitialAuthCheck) { // Only force the check if it hasn't run already via the primary listener.
            console.warn("Fallback: Forced authentication check triggered due to timeout. Proceeding with UI.");
            // Explicitly call the `checkUserAndRedirect` handler.
            // At this point, `auth.currentUser` will represent whatever state Firebase was able to determine.
            checkUserAndRedirect(auth.currentUser);
        }
    }, 2000); // 2 seconds total max initial wait time for any UI to appear. (Adjust as needed, shorter if possible).
});


// --- Data Saver Toggle Functionality ---
document.getElementById('data-saver-checkbox').addEventListener('change', (e) => {
    dataSaverEnabled = e.target.checked;
    showToast(`Data Saver ${dataSaverEnabled ? 'Enabled' : 'Disabled'}`, 'info');
    // Future enhancement: Add logic here to load lower resolution images or prioritize text over media.
});


// --- Dark Mode Toggle Functionality ---
darkModeCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark'); // Save user preference
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light'); // Save user preference
    }
    showToast(`Dark Mode ${e.target.checked ? 'Enabled' : 'Disabled'}`, 'info');
});

// Load and apply initial theme setting from local storage.
document.addEventListener('DOMContentLoaded', () => { // Already in the primary DOMContentLoaded listener.
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        darkModeCheckbox.checked = false;
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        darkModeCheckbox.checked = true;
    }
});


// --- Sidebar Navigation Control ---
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('open');
});

closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

sidebar.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const screenId = e.currentTarget.dataset.screen;
        if (screenId) {
            showScreen(`${screenId}-screen`); // Switch to the selected main screen

            // Execute screen-specific loading functions
            if (screenId === 'profile') {
                loadUserProfile(currentUser.uid); // Load own profile for sidebar link
                currentProfileViewingId = currentUser.uid;
            } else if (screenId === 'messages') {
                loadRecentChats();
                messageListContainer.classList.remove('hidden');
                chatWindowContainer.classList.add('hidden'); // Ensure chat window is hidden when returning to chat list
            } else if (screenId === 'home') {
                 // On returning to home, clear feed and reload from beginning.
                 postsFeed.innerHTML = '';
                 lastVisiblePost = null;
                 loadPosts();
                 postCategoryFilter.value = 'all'; // Reset category filter
            } else if (screenId === 'feed') {
                 // On returning to immersive feed, clear feed and reload from beginning.
                 immersiveFeed.innerHTML = '';
                 lastVisibleImmersivePost = null;
                 loadImmersiveFeedPosts();
            } else if (screenId === 'earnings') {
                loadEarningsPage(); // Load earnings data.
            }
        }
        sidebar.classList.remove('open'); // Close sidebar after selection.
    });
});


// --- Bottom Navigation Control ---
bottomNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const screenId = e.currentTarget.dataset.screen;
        showScreen(`${screenId}-screen`); // Switch to the selected main screen

        // Execute screen-specific loading functions (similar to sidebar)
        if (screenId === 'profile') {
            loadUserProfile(currentUser.uid);
            currentProfileViewingId = currentUser.uid;
        } else if (screenId === 'messages') {
            loadRecentChats();
            messageListContainer.classList.remove('hidden');
            chatWindowContainer.classList.add('hidden');
        } else if (screenId === 'home') {
            postsFeed.innerHTML = '';
            lastVisiblePost = null;
            loadPosts();
            postCategoryFilter.value = 'all';
        } else if (screenId === 'search') {
            searchUserList.innerHTML = ''; // Clear search results on switch
            searchPostList.innerHTML = '';
            noSearchResults.classList.add('hidden');
            searchQueryInput.value = ''; // Clear search input
        } else if (screenId === 'upload') {
            // Reset upload form inputs
            postContentInput.value = '';
            // postImageInput.value = ''; // No direct image input anymore, replaced by rich text editor.
            monetizePostCheckbox.checked = false;
            uploadStatus.textContent = '';
        }
    });
});


// --- Post Loading and Infinite Scrolling (Home Feed) ---
postCategoryFilter.addEventListener('change', () => {
    postsFeed.innerHTML = ''; // Clear posts on category change
    lastVisiblePost = null; // Reset pagination for new filter
    loadPosts(); // Reload posts
});

async function loadPosts() {
    if (!currentUser) { // Ensure logged in
        console.log("loadPosts: Skipping, no current user.");
        return;
    }
    if (fetchingPosts) { // Prevent concurrent fetches
        console.log("loadPosts: Skipping, already fetching.");
        return;
    }

    fetchingPosts = true;
    loadingSpinner.classList.remove('hidden');
    console.log("loadPosts: Starting post fetch for home feed.");

    try {
        let postsBaseRef = db.collection('posts')
                                .where('expiryTime', '>', firebase.firestore.Timestamp.now()) // Only active posts
                                .orderBy('expiryTime', 'desc') // Newer expire dates first (effectively newer posts)
                                .orderBy('timestamp', 'desc'); // Then by creation timestamp


        const selectedCategory = postCategoryFilter.value;
        if (selectedCategory !== 'all') {
            postsBaseRef = postsBaseRef.where('category', '==', selectedCategory);
            console.log(`loadPosts: Filtering by category: ${selectedCategory}`);
        }

        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        const followedUsers = userDoc.data().following || [];
        console.log(`loadPosts: Current user following ${followedUsers.length} users.`);


        let fetchedPosts = []; // Collect all posts here

        // 1. Fetch posts from followed users (chunked if more than 10 followed users)
        if (followedUsers.length > 0) {
            const chunkSize = 10; // Firestore 'in' query limit
            for (let i = 0; i < followedUsers.length; i += chunkSize) {
                const chunk = followedUsers.slice(i, i + chunkSize);
                let currentFollowedQuery = postsBaseRef.where('userId', 'in', chunk);
                
                // For combined pagination, we're not using startAfter on chunked queries directly.
                // We'll collect all, sort, and then decide what to show/paginate.
                const followedSnapshot = await currentFollowedQuery.limit(postsToLoadPerScroll * 2).get(); // Fetch a bit more to ensure variety

                followedSnapshot.docs.forEach(doc => {
                    if (!fetchedPosts.some(p => p.id === doc.id)) { // Prevent duplicates
                         fetchedPosts.push({ id: doc.id, ...doc.data() });
                    }
                });
                console.log(`loadPosts: Fetched ${followedSnapshot.size} posts from followed users chunk.`);
            }
        }

        // 2. Fetch general public posts to fill up the feed or as main content if no followed users.
        let generalPostsRef = postsBaseRef.where('isPrivate', '==', false);
        
        // If it's the very first load or if no followed posts were retrieved, use general posts for pagination.
        // If lastVisiblePost exists and fetchedPosts are few, means previous pagination hit end for followed.
        // It's very complex to paginate across multiple WHERE clauses using Firestore directly this way.
        // For 'never-ending' and complex feeds, Cloud Functions would typically pre-generate / paginate feeds.
        
        // Simpler pagination fallback for general public posts if we didn't fill up from followed.
        // This will restart pagination for general posts only.
        if (lastVisiblePost && (followedUsers.length === 0 || fetchedPosts.length < postsToLoadPerScroll)) {
             generalPostsRef = generalPostsRef.startAfter(lastVisiblePost);
             console.log("loadPosts: Adding general posts with pagination.");
        } else if (!lastVisiblePost && fetchedPosts.length === 0) {
            // First load, no followed, just general
             console.log("loadPosts: First load, only general posts.");
        } else {
             // We have enough from followed, or just mixing without deep pagination across feed types
             // To ensure some general content is always loaded along side followed:
             generalPostsRef = generalPostsRef; // No startAfter for mixed content load if not strictly paginating
        }

        const generalPostsSnapshot = await generalPostsRef.limit(postsToLoadPerScroll).get();
        generalPostsSnapshot.docs.forEach(doc => {
            if (!fetchedPosts.some(p => p.id === doc.id)) { // Avoid adding duplicates that might already be from followed.
               fetchedPosts.push({ id: doc.id, ...doc.data() });
            }
        });
        if (!generalPostsSnapshot.empty) {
            // Only update lastVisiblePost if general posts were actually added in this round of fetching
            // And they contributed to advancing the pointer.
            if (!lastVisiblePost || generalPostsSnapshot.docs[generalPostsSnapshot.docs.length - 1].id !== lastVisiblePost.id) {
                lastVisiblePost = generalPostsSnapshot.docs[generalPostsSnapshot.docs.length - 1];
            }
        }
        console.log(`loadPosts: Added ${generalPostsSnapshot.size} posts from general feed.`);


        // 3. Post-fetch processing: Filter already-displayed posts and manage 'never-ending' logic.
        const alreadyDisplayedPostIds = new Set(Array.from(postsFeed.children).map(el => el.dataset.postId));
        let newPostsToRender = fetchedPosts.filter(post => !alreadyDisplayedPostIds.has(post.id));

        console.log(`loadPosts: Total fetched posts: ${fetchedPosts.length}, new posts to render: ${newPostsToRender.length}.`);

        if (newPostsToRender.length === 0 && fetchedPosts.length > 0 && postsFeed.children.length > 0) {
            // If we fetched posts, but they were all duplicates already on screen, or no new content to add, then loop.
            showToast("No new unique posts found. Looping feed to older content...", 'info', 3000);
            lastVisiblePost = null; // Reset pagination to loop back to the start.
            console.log("loadPosts: Resetting lastVisiblePost for feed loop.");
            
            // To immediately show looping, clear and reload if we couldn't add anything.
            postsFeed.innerHTML = ''; // Clear for fresh start of looped content.
            // Recurse to load the "new-loop" content. But prevent infinite recursion if database is truly empty.
            if (postsToLoadPerScroll > 0) { // Check to prevent infinite empty calls
                 fetchingPosts = false; // Release flag for recursive call.
                 return loadPosts(); // Recursively call to get first batch of new loop.
            }

        } else if (newPostsToRender.length === 0 && postsFeed.children.length === 0) {
            // Case where NO posts at all were ever loaded initially.
            showToast("No posts available in this feed. Start by uploading one!", 'info', 5000);
            postsFeed.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No posts available in this feed. Try uploading one!</p>';
            loadingSpinner.classList.add('hidden');
            fetchingPosts = false;
            return;
        } else if (newPostsToRender.length === 0) { // Fetched some, but all are already displayed AND feed is not empty. Just say nothing new.
             console.log("loadPosts: All fetched posts were already displayed.");
             showToast("No new posts at the moment.", 'info', 2000);
             loadingSpinner.classList.add('hidden');
             fetchingPosts = false;
             return;
        }


        // Clear feed only if it's explicitly the start of a full loop or initial empty state.
        if (lastVisiblePost === null && postsFeed.innerHTML.trim() !== '' && !newPostsToRender.some(p => !alreadyDisplayedPostIds.has(p.id))) {
             // This condition is for when the feed is implicitly resetting because of no new content from original order.
             postsFeed.innerHTML = ''; // Clear previous content if we are effectively starting fresh from top of looped data.
        }


        // Randomize and render the NEW posts
        let tempPostsForRendering = [...newPostsToRender];
        while (tempPostsForRendering.length > 0) {
            const randomLayout = Math.floor(Math.random() * 3); // 0: vertical, 1: horizontal, 2: table

            if (randomLayout === 0 || tempPostsForRendering.length < 4) { // Vertical or not enough for other layouts
                const post = tempPostsForRendering.shift();
                renderPost(post, postsFeed, 'vertical-post');
            } else if (randomLayout === 1 && tempPostsForRendering.length >= 2) { // Horizontal (2-3 posts)
                const numHorizontal = Math.min(tempPostsForRendering.length, Math.floor(Math.random() * 2) + 2); // 2 or 3
                const horizontalContainer = document.createElement('div');
                horizontalContainer.className = 'horizontal-post-container';
                for (let i = 0; i < numHorizontal; i++) {
                    const post = tempPostsForRendering.shift();
                    horizontalContainer.appendChild(createPostElement(post, 'horizontal-post'));
                }
                postsFeed.appendChild(horizontalContainer);
            } else if (randomLayout === 2 && tempPostsForRendering.length >= 4) { // Table (4-6 posts)
                const numTable = Math.min(tempPostsForRendering.length, Math.floor(Math.random() * 3) + 4); // 4, 5, or 6
                const tableContainer = document.createElement('div');
                tableContainer.className = 'table-post-container';
                for (let i = 0; i < numTable; i++) {
                    const post = tempPostsForRendering.shift();
                    tableContainer.appendChild(createPostElement(post, 'table-post'));
                }
                postsFeed.appendChild(tableContainer);
            } else { // Fallback to vertical if conditions not met
                const post = tempPostsForRendering.shift();
                renderPost(post, postsFeed, 'vertical-post');
            }
        }
        console.log(`loadPosts: Successfully rendered ${newPostsToRender.length} new posts.`);

    } catch (error) {
        console.error("Critical error loading posts for home feed:", error);
        showToast("Error loading posts. Please refresh your page or check console for details.", 'error', 7000);
    } finally {
        loadingSpinner.classList.add('hidden');
        fetchingPosts = false;
        console.log("loadPosts: Post fetching finished.");
    }
}


// Immersive Feed (Snap Scrolling) Loading Logic
async function loadImmersiveFeedPosts() {
    if (!currentUser) { // Ensure logged in
        console.log("loadImmersiveFeedPosts: Skipping, no current user.");
        return;
    }
    if (fetchingImmersivePosts) { // Prevent concurrent fetches
        console.log("loadImmersiveFeedPosts: Skipping, already fetching.");
        return;
    }

    fetchingImmersivePosts = true;
    feedLoadingSpinner.classList.remove('hidden');
    console.log("loadImmersiveFeedPosts: Starting fetch for immersive feed.");

    try {
        let postsRef = db.collection('posts')
                         .where('expiryTime', '>', firebase.firestore.Timestamp.now())
                         .where('isPrivate', '==', false) // Immersive feed only shows public posts
                         .orderBy('expiryTime', 'desc') // Newer expire dates first
                         .orderBy('timestamp', 'desc'); // Secondary sort for consistent ordering


        if (lastVisibleImmersivePost) {
            postsRef = postsRef.startAfter(lastVisibleImmersivePost);
            console.log("loadImmersiveFeedPosts: Starting after last visible post for pagination.");
        }

        const snapshot = await postsRef.limit(postsToLoadPerScroll).get();

        if (snapshot.empty) {
            console.log("loadImmersiveFeedPosts: No more posts found. Resetting for loop.");
            showToast("No more immersive posts. Looping back...", 'info', 3000);
            lastVisibleImmersivePost = null; // Reset to loop from the beginning
            fetchingImmersivePosts = false; // Release flag before recursion
            feedLoadingSpinner.classList.add('hidden');
            if (immersiveFeed.children.length === 0 || immersiveFeed.innerHTML.includes('No immersive posts available.')) {
                 immersiveFeed.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No immersive posts available. Try uploading a public post!</p>';
                 return; // Avoid infinite recursion if DB is truly empty.
            } else {
                 immersiveFeed.innerHTML = ''; // Clear for fresh start of looped content.
                 return loadImmersiveFeedPosts(); // Recursive call to get the first batch of the new loop.
            }
        }

        lastVisibleImmersivePost = snapshot.docs[snapshot.docs.length - 1]; // Update pagination cursor

        const fetchedPosts = [];
        snapshot.docs.forEach(doc => {
            fetchedPosts.push({ id: doc.id, ...doc.data() });
        });
        console.log(`loadImmersiveFeedPosts: Fetched ${fetchedPosts.length} posts.`);

        // Filter out posts that are already displayed to avoid duplicates.
        const alreadyDisplayedImmersivePostIds = new Set(Array.from(immersiveFeed.children).map(el => el.dataset.postId));
        const newPostsToRender = fetchedPosts.filter(post => !alreadyDisplayedImmersivePostIds.has(post.id));
        
        if (newPostsToRender.length === 0 && fetchedPosts.length > 0 && immersiveFeed.children.length > 0) {
            console.log("loadImmersiveFeedPosts: Fetched posts were all duplicates, attempting loop reset.");
            // All new fetched posts were already visible and there is content. Reset and re-loop.
            showToast("No new immersive posts. Looping feed...", 'info', 3000);
            lastVisibleImmersivePost = null; // Reset pagination.
            immersiveFeed.innerHTML = ''; // Clear for fresh content.
            fetchingImmersivePosts = false;
            return loadImmersiveFeedPosts(); // Recursive call to load from the beginning.
        } else if (newPostsToRender.length === 0 && immersiveFeed.children.length === 0) {
            console.log("loadImmersiveFeedPosts: No posts fetched and feed is empty.");
            showToast("No immersive posts available. Consider uploading a public post!", 'info', 5000);
            immersiveFeed.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No immersive posts available. Try uploading a public post!</p>';
            loadingSpinner.classList.add('hidden');
            fetchingImmersivePosts = false;
            return;
        }

        // Render posts
        newPostsToRender.forEach(post => {
            renderPost(post, immersiveFeed, 'immersive-post'); // Append directly to immersiveFeed
        });
        console.log(`loadImmersiveFeedPosts: Rendered ${newPostsToRender.length} new posts.`);


    } catch (error) {
        console.error("Critical error loading immersive feed posts:", error);
        showToast("Error loading immersive feed. Please refresh your page or check console for details.", 'error', 7000);
    } finally {
        feedLoadingSpinner.classList.add('hidden');
        fetchingImmersivePosts = false;
        console.log("loadImmersiveFeedPosts: Fetching finished.");
    }
}


function createPostElement(postData, layoutClass = 'vertical-post') {
    const postCard = document.createElement('div');
    postCard.className = `post-card ${layoutClass}`;
    postCard.dataset.postId = postData.id;
    postCard.dataset.userId = postData.userId; // Store userId on the card

    const isOwner = currentUser && postData.userId === currentUser.uid;

    let userAvatarHtml;
    if (postData.profilePicUrl) {
        // If direct picture URL is provided
        userAvatarHtml = `<div class="profile-avatar" style="background-image: url('${postData.profilePicUrl}');" data-user-id="${postData.userId}"></div>`;
    } else {
        // Fallback to emoji logo
        const userProfileClass = getLogoCssClass(postData.userProfileLogo || 'logo-1'); // Default to logo-1 if nothing defined
        userAvatarHtml = `<div class="profile-avatar ${userProfileClass}" data-user-id="${postData.userId}"></div>`;
    }


    postCard.innerHTML = `
        <div class="post-header">
            ${userAvatarHtml}
            <span class="username" data-user-id="${postData.userId}">@${postData.username || 'Unknown'}</span>
            <div class="post-options">
                <i class="fas fa-ellipsis-v"></i>
                <div class="options-dropdown hidden">
                    <span class="report-btn">Report</span>
                    <span class="repost-btn">Repost</span>
                    ${isOwner ? `<span class="delete-btn">Delete</span>` : ''}
                </div>
            </div>
        </div>
        <div class="post-content">
            ${formatPostContent(postData.content)}
        </div>
        <div class="post-footer">
            <div class="post-actions">
                <span class="like-button"><i class="far fa-heart"></i> <span class="like-count">${formatNumber(postData.likes || 0)}</span></span>
                <span class="comment-button"><i class="far fa-comment"></i> <span class="comment-count">${formatNumber(postData.commentCount || 0)}</span></span>
                <span class="views-count"><i class="fas fa-eye"></i> <span class="view-count-num">${formatNumber(postData.views || 0)}</span></span>
                <span class="speaker-button" title="Listen to Post"><i class="fas fa-volume-up"></i></span>
                <span class="translate-button" title="Translate Post"><i class="fas fa-language"></i></span>
            </div>
            <div class="post-reactions" data-post-id="${postData.id}">
                ${renderEmojiReactions(postData.reactions)}
                <span class="total-reactions">${formatNumber(Object.values(postData.reactions || {}).reduce((a, b) => a + b, 0))} reactions</span>
            </div>
        </div>
        <div class="emoji-picker hidden">
            <span class="emoji-option" data-emoji="👍">👍</span>
            <span class="emoji-option" data-emoji="❤️">❤️</span>
            <span class="emoji-option" data-emoji="😂">😂</span>
            <span class="emoji-option" data-emoji="😢">😢</span>
            <span class="emoji-option" data-emoji="🔥">🔥</span>
        </div>
    `;

    addPostEventListeners(postCard, postData);
    return postCard;
}

function renderPost(postData, container, layoutClass = 'vertical-post') {
    const postElement = createPostElement(postData, layoutClass);
    container.appendChild(postElement);
}

// Markdown-like content parsing
function formatPostContent(content) {
    if (!content) return '';

    let formattedContent = content;

    // Convert **bold**
    formattedContent = formattedContent.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    // Convert *italic*
    formattedContent = formattedContent.replace(/\*(.*?)\*/g, '<i>$1</i>');
    // Convert [link text](http://url.com)
    formattedContent = formattedContent.replace(/\[(.*?)\]\((https?:\/\/[^\s]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    // Convert ![image alt](http://image.url)
    formattedContent = formattedContent.replace(/!\[(.*?)\]\((https?:\/\/[^\s]+(\.gif|\.jpg|\.jpeg|\.png|\.webp))\)/gi, '<img src="$2" alt="$1">');
    // Convert ![youtube video](VIDEO_ID or full url)
    formattedContent = formattedContent.replace(/!\[youtube video\]\((?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|)([\w-]{11})(?:\S+)?\)/gi, '<iframe src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');


    // Convert plain URLs to clickable links if not already handled
    const urlRegex = /(?<!["'])((https?:\/\/[^\s<>"']+)|(www\.[^\s<>"']+))(?![])]/g; // Excludes URLs inside existing links or images
    formattedContent = formattedContent.replace(urlRegex, (match) => {
        // Ensure it's not part of an existing anchor tag
        if (match.startsWith('<a') || match.includes('src=')) {
            return match;
        }
        const href = match.startsWith('http') ? match : `http://${match}`;
        return `<a href="${href}" target="_blank">${match}</a>`;
    });

    // Wrap in paragraph tags if not already HTML
    if (!formattedContent.startsWith('<p>') && !formattedContent.startsWith('<div')) {
        formattedContent = `<p>${formattedContent.split('\n').join('<br>')}</p>`;
    } else {
        formattedContent = formattedContent.split('\n').join('<br>'); // Convert newlines to <br>
    }

    return formattedContent;
}


function renderEmojiReactions(reactions) {
    if (!reactions) return '';
    const topEmojis = Object.entries(reactions)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3);

    let html = '<span class="emoji-reaction-display">';
    topEmojis.forEach(([emoji, count]) => {
        html += `<span class="emoji">${emoji}</span><span class="count">${formatNumber(count)}</span>`;
    });
    html += '</span>';
    return html;
}

// Add event listeners for post elements
let lastClickTime = 0;
let clickTimer;
let longPressTimer;
let currentNeonPost = null;
let currentSpeechUtterance = null; // To keep track of the current speech

function addPostEventListeners(postElement, postData) {
    const postId = postData.id;
    const likeButton = postElement.querySelector('.like-button');
    const commentButton = postElement.querySelector('.comment-button');
    const speakerButton = postElement.querySelector('.speaker-button');
    const translateButton = postElement.querySelector('.translate-button');
    const postOptionsBtn = postElement.querySelector('.post-options .fa-ellipsis-v');
    const optionsDropdown = postElement.querySelector('.options-dropdown');
    const reportBtn = postElement.querySelector('.report-btn');
    const repostBtn = postElement.querySelector('.repost-btn');
    const deleteBtn = postElement.querySelector('.delete-btn');
    const profileAvatar = postElement.querySelector('.profile-avatar');
    const usernameSpan = postElement.querySelector('.username');
    const emojiPicker = postElement.querySelector('.emoji-picker');

    // Profile Click
    if (profileAvatar) {
        profileAvatar.addEventListener('click', () => openUserProfile(postData.userId));
    }
    if (usernameSpan) {
        usernameSpan.addEventListener('click', () => openUserProfile(postData.userId));
    }

    // Double-click for Like & Single Click for Neon Effect
    postElement.addEventListener('click', (e) => {
        // Exclude clicks on action buttons or dropdowns
        if (e.target.closest('.post-actions') || e.target.closest('.post-options') || e.target.closest('.emoji-picker')) {
            return;
        }

        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastClickTime;

        if (timeDiff < 300 && timeDiff > 0) { // Double click detected (within 300ms)
            clearTimeout(clickTimer);
            handleLike(postId, postElement);
            lastClickTime = 0; // Reset for next double click
        } else {
            // Single click for neon effect (unless a double click happens)
            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => {
                handleNeonEffect(postElement);
            }, 300); // Wait to see if it's a double click
        }
        lastClickTime = currentTime;
    });

    // Long press for emoji reactions
    postElement.addEventListener('touchstart', (e) => {
        // Exclude actions on interactive elements
        if (e.target.closest('.post-actions') || e.target.closest('.post-options') || e.target.closest('a')) {
            return;
        }
        e.preventDefault(); // Prevent default touch behavior like scrolling
        clearTimeout(clickTimer); // Clear potential single/double click
        longPressTimer = setTimeout(() => {
            emojiPicker.classList.remove('hidden');
        }, 800); // 800ms for long press (adjust as needed)
    });

    postElement.addEventListener('touchend', () => {
        clearTimeout(longPressTimer);
    });

    // Hide emoji picker if clicking outside (simple example)
    document.addEventListener('click', (e) => {
        if (!emojiPicker.contains(e.target) && !postElement.contains(e.target)) {
            emojiPicker.classList.add('hidden');
        }
    });

    // Emoji selection
    emojiPicker.querySelectorAll('.emoji-option').forEach(emojiOption => {
        emojiOption.addEventListener('click', (e) => {
            const selectedEmoji = e.target.dataset.emoji;
            handleEmojiReaction(postId, selectedEmoji, postElement);
            emojiPicker.classList.add('hidden');
        });
    });

    // Like Button explicit click
    if (likeButton) {
        likeButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent post's general click handler
            handleLike(postId, postElement);
        });
    }

    // Comment Button
    if (commentButton) {
        commentButton.addEventListener('click', (e) => {
            e.stopPropagation();
            openCommentsModal(postId);
        });
    }

    // Speaker Button (Text-to-Speech)
    if (speakerButton) {
        speakerButton.addEventListener('click', (e) => {
            e.stopPropagation();
            handleSpeakPost(postData.content);
        });
    }

    // Translate Button
    if (translateButton) {
        translateButton.addEventListener('click', (e) => {
            e.stopPropagation();
            handleTranslatePost(postData.content);
        });
    }

    // Post Options (Report/Delete/Repost)
    if (postOptionsBtn) {
        postOptionsBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent post click/neon effect
            optionsDropdown.classList.toggle('hidden');
        });

        // Close dropdown if clicking outside
        document.addEventListener('click', (e) => {
            if (!postOptionsBtn.contains(e.target) && !optionsDropdown.contains(e.target)) {
                optionsDropdown.classList.add('hidden');
            }
        });
    }

    if (reportBtn) {
        reportBtn.addEventListener('click', () => {
            handleReportPost(postId);
            optionsDropdown.classList.add('hidden');
        });
    }

    if (repostBtn) {
        repostBtn.addEventListener('click', () => {
            handleRepost(postId);
            optionsDropdown.classList.add('hidden');
        });
    }

    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            handleDeletePost(postId, postElement, postData.isMonetized);
            optionsDropdown.classList.add('hidden');
        });
    }

    // Views count - increment on first unique view per user per session (simplified client-side)
    // Only increment if the post is currently visible in the main content area for a minimum duration
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If it's a monetized post, start tracking view duration
                if (postData.isMonetized) {
                    postElement.viewStartTime = Date.now();
                }
                incrementViewCount(postId, postData.isMonetized);
            } else {
                // If post is monetized and scrolls out, check view duration
                if (postData.isMonetized && postElement.viewStartTime) {
                    const viewDuration = Date.now() - postElement.viewStartTime;
                    if (viewDuration >= 5000) { // 5 seconds threshold
                        incrementMonetizedView(postId); // Increment monetized view only if duration met
                    }
                    delete postElement.viewStartTime; // Reset
                }
            }
        });
    }, { threshold: 0.8 }); // Trigger when 80% of the post is visible

    observer.observe(postElement);
}

// Function to handle the neon effect
function handleNeonEffect(postElement) {
    // Remove neon from previously highlighted post
    if (currentNeonPost && currentNeonPost !== postElement) {
        currentNeonPost.classList.remove('neon-glow');
    }
    // Add neon to current post
    postElement.classList.add('neon-glow');
    currentNeonPost = postElement;

    // Remove neon after 3-4 seconds
    setTimeout(() => {
        postElement.classList.remove('neon-glow');
        if (currentNeonPost === postElement) {
            currentNeonPost = null;
        }
    }, 3500); // 3.5 seconds
}

// Like functionality
async function handleLike(postId, postElement) {
    if (!currentUser) {
        showToast("Please log in to like posts.", 'info');
        return;
    }

    const likeButtonIcon = postElement.querySelector('.like-button i');
    const likeCountSpan = postElement.querySelector('.like-button .like-count');

    try {
        const postRef = db.collection('posts').doc(postId);
        const postDoc = await postRef.get();
        if (!postDoc.exists) return;

        const postData = postDoc.data();
        const currentLikes = postData.likes || 0;
        const likedBy = postData.likedBy || [];

        let newLikes = currentLikes;
        let action = '';

        if (likedBy.includes(currentUser.uid)) {
            // Unlike
            newLikes--;
            likeButtonIcon.classList.remove('fas');
            likeButtonIcon.classList.add('far');
            action = 'remove';
        } else {
            // Like
            newLikes++;
            likeButtonIcon.classList.remove('far');
            likeButtonIcon.classList.add('fas');
            action = 'add';
        }

        await db.runTransaction(async (transaction) => {
            const updatedLikedBy = action === 'add'
                ? firebase.firestore.FieldValue.arrayUnion(currentUser.uid)
                : firebase.firestore.FieldValue.arrayRemove(currentUser.uid);

            transaction.update(postRef, {
                likes: newLikes,
                likedBy: updatedLikedBy
            });
        });

        likeCountSpan.textContent = formatNumber(newLikes);
        showToast(action === 'add' ? "Post liked!" : "Post unliked.", 'success');

    } catch (error) {
        console.error("Error liking post:", error);
        showToast("Failed to like/unlike post. Try again.", 'error');
    }
}

// Emoji Reaction functionality
async function handleEmojiReaction(postId, emoji, postElement) {
    if (!currentUser) {
        showToast("Please log in to react to posts.", 'info');
        return;
    }

    try {
        const postRef = db.collection('posts').doc(postId);

        await db.runTransaction(async (transaction) => {
            const postDoc = await transaction.get(postRef);
            if (!postDoc.exists) {
                showToast("Post not found.", 'error');
                return;
            }

            const postData = postDoc.data();
            const currentReactions = postData.reactions || {};
            const userReactions = postData.userReactions || {}; // Tracks what each user reacted with

            const existingReaction = userReactions[currentUser.uid];

            let updatedUserReactions = { ...userReactions };
            let updatedReactionsCount = { ...currentReactions };

            if (existingReaction) {
                // If user already reacted, decrement count of old emoji
                updatedReactionsCount[existingReaction] = (updatedReactionsCount[existingReaction] || 1) - 1;
                if (updatedReactionsCount[existingReaction] <= 0) {
                    delete updatedReactionsCount[existingReaction];
                }
            }

            if (existingReaction === emoji) {
                // User clicked the same emoji again, un-react
                delete updatedUserReactions[currentUser.uid];
            } else {
                // New reaction, or changing reaction
                updatedReactionsCount[emoji] = (updatedReactionsCount[emoji] || 0) + 1;
                updatedUserReactions[currentUser.uid] = emoji;
            }

            transaction.update(postRef, {
                reactions: updatedReactionsCount,
                userReactions: updatedUserReactions // Store user specific reaction
            });
        });

        // Update UI immediately (optimistic update)
        const totalReactionsElement = postElement.querySelector('.total-reactions');
        const emojiReactionDisplayElement = postElement.querySelector('.emoji-reaction-display');

        // Re-fetch and re-render reaction display (can be optimized with local state)
        const updatedPostDoc = await postRef.get();
        const updatedPostData = updatedPostDoc.data();
        emojiReactionDisplayElement.innerHTML = renderEmojiReactions(updatedPostData.reactions);
        totalReactionsElement.textContent = `${formatNumber(Object.values(updatedPostData.reactions || {}).reduce((a, b) => a + b, 0))} reactions`;

        showToast("Emoji reaction sent!", 'success');

    } catch (error) {
        console.error("Error sending emoji reaction:", error);
        showToast("Failed to send reaction. Try again.", 'error');
    }
}


// View Count functionality (overall views)
async function incrementViewCount(postId, isMonetized) {
    if (!currentUser) return; // Only count views from logged-in users

    const viewTrackerKey = `viewed_${postId}_${currentUser.uid}`;
    // Use session storage to prevent multiple increments during a single session
    if (sessionStorage.getItem(viewTrackerKey)) {
        return; // Already viewed in this session
    }

    sessionStorage.setItem(viewTrackerKey, 'true'); // Mark as viewed for this session

    const viewsRef = db.collection('postViews').doc(postId);
    const viewCountSpan = document.querySelector(`.post-card[data-post-id="${postId}"] .view-count-num`);

    try {
        await db.runTransaction(async (transaction) => {
            const viewsDoc = await transaction.get(viewsRef);
            let viewsData = viewsDoc.exists ? viewsDoc.data() : { totalViews: 0, viewedBy: {} };
            const viewedBy = viewsData.viewedBy || {};

            if (!viewedBy[currentUser.uid]) { // Only increment if this user hasn't viewed this post ever (persistent)
                // Increment total views on the dedicated views document
                transaction.set(viewsRef, {
                    totalViews: firebase.firestore.FieldValue.increment(1),
                    [`viewedBy.${currentUser.uid}`]: true // Mark this user as having viewed it
                }, { merge: true });

                // Also increment the main post's view count
                const postRef = db.collection('posts').doc(postId);
                transaction.update(postRef, {
                    views: firebase.firestore.FieldValue.increment(1)
                });

                // Update owner's unmonetized views if not monetized
                if (!isMonetized) {
                    const postDocData = (await transaction.get(postRef)).data(); // Get latest post data within transaction
                    const postOwnerId = postDocData.userId;
                    const postOwnerRef = db.collection('users').doc(postOwnerId);
                    transaction.update(postOwnerRef, {
                        unmonetizedViewsCount: firebase.firestore.FieldValue.increment(1)
                    });
                }
            }

            if (viewCountSpan) {
                // Update UI by fetching the latest count (more reliable than optimistic for views)
                const updatedPostDoc = await db.collection('posts').doc(postId).get();
                if (updatedPostDoc.exists) {
                    viewCountSpan.textContent = formatNumber(updatedPostDoc.data().views || 0);
                }
            }
        });
    } catch (error) {
        console.error("Error incrementing view count:", error);
    }
}

// Monetized View Count (after 5-10 seconds viewing)
async function incrementMonetizedView(postId) {
    if (!currentUser) return;

    const monetizedViewTrackerKey = `monetized_viewed_${postId}_${currentUser.uid}`;
    // Use local storage for persistent tracking of monetized views per user per post
    // to prevent multiple monetized view counts for same user/post even across sessions
    if (localStorage.getItem(monetizedViewTrackerKey)) {
        return; // Already counted as a monetized view for this user
    }

    localStorage.setItem(monetizedViewTrackerKey, 'true'); // Mark as monetized viewed

    try {
        const postRef = db.collection('posts').doc(postId);
        const postDoc = await postRef.get();
        if (!postDoc.exists) return;

        const postOwnerId = postDoc.data().userId;
        const postOwnerRef = db.collection('users').doc(postOwnerId);

        await db.runTransaction(async (transaction) => {
            const postOwnerDoc = await transaction.get(postOwnerRef);
            if (!postOwnerDoc.exists) return;

            const ownerData = postOwnerDoc.data();
            const currentMonetizedViews = ownerData.monetizedViewsCount || 0;
            const currentEarnedAmount = ownerData.earnedAmount || 0;

            const earningsPerThousandViews = 0.1; // Base earnings per 1000 views (0.1$ for 1k views)
            // You can make this dynamic or more complex. For example, higher for specific categories.
            const newEarnedAmount = currentEarnedAmount + (earningsPerThousandViews / 1000);

            transaction.update(postOwnerRef, {
                monetizedViewsCount: firebase.firestore.FieldValue.increment(1),
                earnedAmount: newEarnedAmount
            });
        });
        showToast("Monetized view counted!", 'success', 1500); // Short toast
    } catch (error) {
        console.error("Error incrementing monetized view:", error);
    }
}


// Refresh Posts Button
refreshPostsBtn.addEventListener('click', () => {
    postsFeed.innerHTML = ''; // Clear current posts
    lastVisiblePost = null; // Reset pagination
    loadPosts(); // Reload posts from the beginning
    showToast("Posts feed refreshed!", 'info');
});

// Infinite Scroll Listener for Home Feed
mainContent.addEventListener('scroll', () => {
    if (mainContent.scrollTop + mainContent.clientHeight >= mainContent.scrollHeight - 200 &&
        document.getElementById('home-screen').classList.contains('active') && !fetchingPosts) {
        loadPosts();
    }
});

// Infinite Scroll Listener for Immersive Feed
immersiveFeed.addEventListener('scroll', () => {
    if (immersiveFeed.scrollTop + immersiveFeed.clientHeight >= immersiveFeed.scrollHeight - 200 &&
        document.getElementById('feed-screen').classList.contains('active') && !fetchingImmersivePosts) {
        loadImmersiveFeedPosts();
    }
});


// --- Post Upload Functionality ---
// Rich text editor toolbar actions
editorToolbar.addEventListener('click', (e) => {
    const command = e.target.closest('.tool-btn')?.dataset.command;
    if (!command) return;

    const textarea = postContentInput;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    let newValue = textarea.value;

    switch (command) {
        case 'bold':
            newValue = newValue.substring(0, start) + `**${selectedText}**` + newValue.substring(end);
            break;
        case 'italic':
            newValue = newValue.substring(0, start) + `*${selectedText}*` + newValue.substring(end);
            break;
        case 'insertImage':
            const imageUrl = prompt("Enter direct image URL (e.g., from imgbb.com, postimages.org):");
            if (imageUrl) {
                newValue = newValue.substring(0, start) + `![Image Description](${imageUrl})` + newValue.substring(end);
            }
            break;
        case 'insertYoutube':
            const youtubeUrl = prompt("Enter YouTube video URL or ID:");
            if (youtubeUrl) {
                newValue = newValue.substring(0, start) + `![youtube video](${youtubeUrl})` + newValue.substring(end);
            }
            break;
        case 'insertLink':
            const linkText = prompt("Enter link text:", selectedText || "Click Here");
            if (!linkText) break;
            const url = prompt("Enter URL:");
            if (url) {
                newValue = newValue.substring(0, start) + `[${linkText}](${url})` + newValue.substring(end);
            }
            break;
        default:
            break;
    }
    textarea.value = newValue;
    // Set cursor position after insertion
    textarea.selectionStart = textarea.selectionEnd = start + newValue.length - (textarea.value.length - end);
    textarea.focus();
});


publishPostBtn.addEventListener('click', async () => {
    if (!currentUser) {
        showToast("Please log in to upload posts.", 'error');
        return;
    }

    const content = postContentInput.value.trim();
    const category = postCategorySelect.value;
    const isMonetized = monetizePostCheckbox.checked;

    if (content.length < 60) {
        showToast("Post content must be at least 60 characters long.", 'error');
        return;
    }
    if (content.length > 10000) {
        showToast("Post content cannot exceed 10000 characters.", 'error');
        return;
    }

    uploadStatus.textContent = "Uploading post...";
    publishPostBtn.disabled = true;

    try {
        const userDocRef = db.collection('users').doc(currentUser.uid);
        const userDoc = await userDocRef.get();
        const userData = userDoc.data(); // Get fresh user data for username/logo


        const newPostRef = db.collection('posts').doc(); // Auto-generated ID
        const boostHours = 24; // All posts are 24 hours now

        await newPostRef.set({
            userId: currentUser.uid,
            username: userData.username, // Use user's current username
            profilePicUrl: userData.profilePicUrl || "", // User's chosen direct pic URL
            userProfileLogo: userData.profilePicUrl ? "" : (userData.profileLogo || getRandomLogoClass()), // User's chosen logo (only if no direct URL)
            content: content,
            category: category,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            likes: 0,
            views: 0,
            commentCount: 0, // Initialize comment count
            reactions: {},
            userReactions: {},
            isMonetized: isMonetized,
            isPrivate: userData.isPrivate || false, // Post inherits user's privacy setting
            expiryTime: firebase.firestore.Timestamp.fromMillis(Date.now() + (boostHours * 60 * 60 * 1000))
        });

        // Increment user's post count
        await userDocRef.update({
            postCount: firebase.firestore.FieldValue.increment(1)
        });


        uploadStatus.textContent = "Post uploaded successfully!";
        showToast("Post uploaded successfully!", 'success');
        postContentInput.value = '';
        postCategorySelect.value = 'General';
        monetizePostCheckbox.checked = false;
        showScreen('home-screen'); // Navigate back to home feed
        postsFeed.innerHTML = ''; // Clear and reload posts
        lastVisiblePost = null;
        loadPosts();

    } catch (error) {
        console.error("Error publishing post:", error);
        if (error.code === 'permission-denied' || error.message.includes('Missing or insufficient permissions')) {
            uploadStatus.textContent = "Error: Permission denied. Check Firebase rules.";
            showToast("Error publishing post: Missing or insufficient permissions. Contact admin.", 'error', 5000);
        } else {
            uploadStatus.textContent = `Error: ${error.message}`;
            showToast("Failed to upload post. Try again.", 'error');
        }
    } finally {
        publishPostBtn.disabled = false;
    }
});

// Ad Modal Logic - Still for a cost system to implement later, now gives "rewards"
let currentAdPurpose = ''; // 'message-credit', 'withdrawal-credit', 'other-benefit'
let adRewardDetails = {};

function showAdModal(purpose, details = {}) {
    currentAdPurpose = purpose;
    adRewardDetails = details;
    adModal.classList.remove('hidden');
    // For ads that provide 'costs' (which are removed from UI) these would simulate that resource.
    // For now, it will just show success.
    showToast("This app has no real 'cost' currently. Simulating benefit...", 'info', 3000);
    closeAdModalBtn.disabled = true; // Disable close until ad "finishes"

    // Simulate ad playback
    const adPlaceholder = document.getElementById('ad-placeholder');
    adPlaceholder.innerHTML = '<p>Simulating Ad (5 seconds)...</p><div class="loader"></div>';

    setTimeout(() => {
        adPlaceholder.innerHTML = '<p>Ad Complete!</p>';
        closeAdModalBtn.disabled = false;
        showToast("Ad completed! No action required now.", 'success');
    }, 5000); // Simulate 5-second ad
}

closeAdModalBtn.addEventListener('click', () => {
    adModal.classList.add('hidden');
    // Reward logic, currently no "rewards" are given as per new request.
    // But keeping structure in case a future reward/cost system is implemented.
    showRewardPopup("Ad finished. Thank you for supporting!"); // Simplified for no current reward system
});

function showRewardPopup(message) {
    // Reward Popup logic can be reused for any success messages now
    const rewardPopupEl = document.getElementById('reward-popup');
    const rewardMessageEl = document.getElementById('reward-message');
    rewardMessageEl.textContent = message;
    rewardPopupEl.classList.remove('hidden');
    document.getElementById('close-reward-popup').addEventListener('click', () => {
        rewardPopupEl.classList.add('hidden');
    }, {once: true});
}


// --- Profile Management ---
async function loadUserProfile(userId) {
    if (!userId) return;
    currentProfileViewingId = userId; // Set the ID of the profile currently being viewed

    try {
        const userDoc = await db.collection('users').doc(userId).get();
        if (userDoc.exists) {
            const userData = userDoc.data();
            updateProfileDisplay(userData);
            loadProfilePosts(userId); // Load 'My Posts' by default

            // Update sidebar username and avatar
            sidebarUsername.textContent = userData.name || userData.username || "My User"; // Sidebar uses name if available
            if (userData.profilePicUrl) {
                sidebarProfileAvatar.style.backgroundImage = `url('${userData.profilePicUrl}')`;
                sidebarProfileAvatar.classList.remove('user-logo-1', 'user-logo-2'); // Clear any default emoji classes
                sidebarProfileAvatar.className = 'profile-avatar-small'; // Reset class and add direct URL style if exists
            } else {
                sidebarProfileAvatar.style.backgroundImage = 'none';
                sidebarProfileAvatar.className = `profile-avatar-small ${getLogoCssClass(userData.profileLogo || 'logo-1')}`;
            }

            // Show/hide follow/message buttons based on whose profile it is
            if (userId === currentUser.uid) {
                editProfileBtn.classList.remove('hidden');
                followUserBtn.classList.add('hidden');
                unfollowUserBtn.classList.add('hidden');
                messageUserBtn.classList.add('hidden');
                profileWhatsappLink.classList.add('hidden');
                profileInstagramLink.classList.add('hidden');
                profilePostTabs[0].textContent = 'My Posts';
                profilePostTabs[1].textContent = 'My Reposts';
            } else {
                editProfileBtn.classList.add('hidden');
                messageUserBtn.classList.remove('hidden'); // Always allow messaging
                // Check follow status
                const currentUserDoc = await db.collection('users').doc(currentUser.uid).get();
                const currentUserData = currentUserDoc.data();
                if (currentUserData.following && currentUserData.following.includes(userId)) {
                    followUserBtn.classList.add('hidden');
                    unfollowUserBtn.classList.remove('hidden');
                } else {
                    followUserBtn.classList.remove('hidden');
                    unfollowUserBtn.classList.add('hidden');
                }

                // Show social links if available
                if (userData.whatsapp) profileWhatsappLink.classList.remove('hidden'); else profileWhatsappLink.classList.add('hidden');
                if (userData.instagram) profileInstagramLink.classList.remove('hidden'); else profileInstagramLink.classList.add('hidden');

                profilePostTabs[0].textContent = `${userData.username}'s Posts`;
                profilePostTabs[1].textContent = `${userData.username}'s Reposts`;

                // If target user's account is private and current user is not following,
                // hide their posts and show a message.
                if (userData.isPrivate && !(currentUserData.following && currentUserData.following.includes(userId))) {
                    profilePostsFeed.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">This account is private. Follow to view posts.</p>';
                    profileRepostsFeed.innerHTML = '';
                    profilePostTabs[0].classList.add('hidden');
                    profilePostTabs[1].classList.add('hidden');
                } else {
                    profilePostTabs[0].classList.remove('hidden');
                    profilePostTabs[1].classList.remove('hidden');
                }

            }
        } else {
            showToast("User profile not found.", 'error');
        }
    } catch (error) {
        console.error("Error loading user profile:", error);
        showToast("Error loading profile. Try again.", 'error');
    }
}

function updateProfileDisplay(userData) {
    const isCurrentUserProfile = currentUser && userData.uid === currentUser.uid;

    myProfileUsername.textContent = `@${userData.username || 'NewUser'}`;
    myProfileName.textContent = userData.name || '';
    myProfileBio.textContent = userData.bio || '';
    currentProfileUsernamePosts.textContent = userData.username || 'Me';

    // Handle direct picture URL or emoji logo for large avatar
    if (userData.profilePicUrl) {
        myProfileAvatar.style.backgroundImage = `url('${userData.profilePicUrl}')`;
        myProfileAvatar.classList.remove('user-logo-1', 'user-logo-2'); // Clear any default emoji classes
        myProfileAvatar.className = 'profile-avatar-large'; // Ensure only core class
    } else {
        myProfileAvatar.style.backgroundImage = 'none'; // Clear previous image
        myProfileAvatar.className = `profile-avatar-large ${getLogoCssClass(userData.profileLogo || 'logo-1')}`;
    }

    myPostsCount.textContent = formatNumber(userData.postCount || 0);
    myFollowersCount.textContent = formatNumber(userData.followersCount || 0);
    myFollowingCount.textContent = formatNumber(userData.followingCount || 0);

    if (userData.whatsapp) {
        profileWhatsappLink.href = `https://wa.me/${userData.whatsapp.replace(/\D/g, '')}`; // Remove non-digits
        profileWhatsappLink.target = '_blank';
    } else {
        profileWhatsappLink.removeAttribute('href');
    }
    if (userData.instagram) {
        profileInstagramLink.href = `https://www.instagram.com/${userData.instagram}`;
        profileInstagramLink.target = '_blank';
    } else {
        profileInstagramLink.removeAttribute('href');
    }

    if (isCurrentUserProfile) {
        editUsernameInput.value = userData.username || '';
        editNameInput.value = userData.name || '';
        editBioInput.value = userData.bio || '';
        editWhatsappInput.value = userData.whatsapp || '';
        editInstagramInput.value = userData.instagram || '';
        profilePicUrlInput.value = userData.profilePicUrl || ''; // Populate direct pic URL
        accountPrivacyToggle.checked = userData.isPrivate || false;
        accountPrivacyStatus.textContent = userData.isPrivate ? 'Private' : 'Public';
        populateProfileLogoOptions(userData.profileLogo, userData.profilePicUrl);
    }
}

// Profile Posts & Reposts Tabs
profilePostTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        profilePostTabs.forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');

        const tabType = e.currentTarget.dataset.tab;
        if (tabType === 'posts') {
            profilePostsFeed.classList.remove('hidden');
            profileRepostsFeed.classList.add('hidden');
            loadProfilePosts(currentProfileViewingId);
        } else if (tabType === 'reposts') {
            profilePostsFeed.classList.add('hidden');
            profileRepostsFeed.classList.remove('hidden');
            loadProfileReposts(currentProfileViewingId);
        }
    });
});


async function loadProfilePosts(userId) {
    profilePostsFeed.innerHTML = '<div class="loader" style="margin: 20px auto;"></div>'; // Show loader
    try {
        const querySnapshot = await db.collection('posts')
            .where('userId', '==', userId)
            .where('expiryTime', '>', firebase.firestore.Timestamp.now()) // Only active posts
            .orderBy('timestamp', 'desc')
            .limit(10)
            .get();

        if (querySnapshot.empty) {
            profilePostsFeed.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No posts yet.</p>';
            return;
        }

        profilePostsFeed.innerHTML = ''; // Clear loader
        querySnapshot.docs.forEach(doc => {
            profilePostsFeed.appendChild(createPostElement({ id: doc.id, ...doc.data() }));
        });
    } catch (error) {
        console.error("Error loading profile posts:", error);
        profilePostsFeed.innerHTML = '<p style="text-align: center; color: red;">Error loading posts.</p>';
    }
}

async function loadProfileReposts(userId) {
    profileRepostsFeed.innerHTML = '<div class="loader" style="margin: 20px auto;"></div>'; // Show loader
    try {
        const userDoc = await db.collection('users').doc(userId).get();
        const userData = userDoc.data();
        const repostedPostIds = userData.reposts || [];

        if (repostedPostIds.length === 0) {
            profileRepostsFeed.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No reposts yet.</p>';
            return;
        }

        profileRepostsFeed.innerHTML = ''; // Clear loader
        // Fetch posts by their IDs (Firestore `in` query limit is 10)
        // For more than 10, you'd need multiple queries or a Cloud Function
        // Using Promise.allSettled to handle potential missing posts gracefully
        const postPromises = repostedPostIds.slice(0, 10).map(id => db.collection('posts').doc(id).get());
        const postResults = await Promise.allSettled(postPromises);

        postResults.forEach(result => {
            if (result.status === 'fulfilled' && result.value.exists && result.value.data().expiryTime.toMillis() > Date.now()) { // Check if not expired
                profileRepostsFeed.appendChild(createPostElement({ id: result.value.id, ...result.value.data() }));
            }
        });
        if (profileRepostsFeed.innerHTML === '') {
            profileRepostsFeed.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No active reposts.</p>';
        }

    } catch (error) {
        console.error("Error loading profile reposts:", error);
        profileRepostsFeed.innerHTML = '<p style="text-align: center; color: red;">Error loading reposts.</p>';
    }
}


// Edit Profile Modal Buttons
editProfileBtn.addEventListener('click', () => {
    editProfileModal.classList.remove('hidden');
    profileModalInstruction.textContent = "Edit your profile details:"; // General instruction when clicking 'Edit Profile'
    console.log("UI: Displayed Edit Profile modal.");
});

cancelEditProfileBtn.addEventListener('click', () => {
    editProfileModal.classList.add('hidden');
    console.log("UI: Closed Edit Profile modal.");
});

// Username Availability Check
let usernameCheckTimeout;
editUsernameInput.addEventListener('input', () => {
    clearTimeout(usernameCheckTimeout);
    usernameAvailability.textContent = ''; // Clear previous status
    usernameAvailability.className = '';

    const newUsername = editUsernameInput.value.trim();
    if (newUsername === '') {
        usernameAvailability.textContent = 'Username cannot be empty.';
        usernameAvailability.classList.add('error-text');
        return;
    }

    // Get current username from logged-in user's data for comparison
    let currentAuthUsername = (currentUser && currentUser.email) ? currentUser.email.split('@')[0] : "";
    if(myProfileUsername && myProfileUsername.textContent) {
        currentAuthUsername = myProfileUsername.textContent.replace('@', '');
    }

    if (newUsername === currentAuthUsername) {
        usernameAvailability.textContent = 'Username is available.';
        usernameAvailability.classList.add('success-text');
        return;
    }
     if (newUsername.includes(" ") || newUsername.includes("@") || newUsername.includes("#")) {
        usernameAvailability.textContent = "Username cannot contain spaces or special characters.";
        usernameAvailability.classList.add('error-text');
        return;
    }


    usernameCheckTimeout = setTimeout(async () => {
        try {
            const usersRef = db.collection('users');
            const snapshot = await usersRef.where('username', '==', newUsername).limit(1).get();

            if (snapshot.empty) {
                usernameAvailability.textContent = 'Username is available.';
                usernameAvailability.classList.add('success-text');
            } else {
                usernameAvailability.textContent = 'Username already taken.';
                usernameAvailability.classList.add('error-text');
            }
        } catch (error) {
            console.error("Error checking username availability:", error);
            usernameAvailability.textContent = 'Error checking username.';
            usernameAvailability.classList.add('error-text');
        }
    }, 500); // Debounce
});

// Privacy Toggle Status
accountPrivacyToggle.addEventListener('change', () => {
    accountPrivacyStatus.textContent = accountPrivacyToggle.checked ? 'Private' : 'Public';
});

// Populate Profile Logo Options (Now includes direct URL for selection display)
function populateProfileLogoOptions(currentLogoClass, currentProfilePicUrl) {
    profileLogoOptions.innerHTML = '';

    // If current user has a direct URL pic
    if (currentProfilePicUrl) {
        const directUrlOptionDiv = document.createElement('div');
        directUrlOptionDiv.className = `logo-option-item selected`; // Default selected
        directUrlOptionDiv.style.backgroundImage = `url('${currentProfilePicUrl}')`;
        directUrlOptionDiv.dataset.type = 'url';
        directUrlOptionDiv.dataset.value = currentProfilePicUrl;
        profileLogoOptions.appendChild(directUrlOptionDiv);
    }


    PROFILE_LOGOS.forEach(logo => {
        const logoItem = document.createElement('div');
        logoItem.className = `logo-option-item user-${logo.class}`;
        logoItem.dataset.type = 'emoji';
        logoItem.dataset.value = logo.class;

        // Select the emoji if it matches the currentLogoClass AND there is NO profilePicUrl
        if (!currentProfilePicUrl && currentLogoClass === logo.class) {
            logoItem.classList.add('selected');
        }
        // If currentProfilePicUrl exists, no emoji will be selected initially.


        logoItem.addEventListener('click', () => {
            profileLogoOptions.querySelectorAll('.logo-option-item').forEach(item => item.classList.remove('selected'));
            profilePicUrlInput.value = ''; // Clear direct URL input if an emoji is chosen
            logoItem.classList.add('selected');
        });
        profileLogoOptions.appendChild(logoItem);
    });

    // Handle clearing selection if user inputs direct URL after selecting an emoji
    profilePicUrlInput.addEventListener('input', () => {
        if (profilePicUrlInput.value.trim() !== '') {
            profileLogoOptions.querySelectorAll('.logo-option-item').forEach(item => item.classList.remove('selected'));
        }
    });

}

// Save Profile Changes
saveProfileBtn.addEventListener('click', async () => {
    if (!currentUser) return;

    const newUsername = editUsernameInput.value.trim();
    const newName = editNameInput.value.trim();
    const newBio = editBioInput.value.trim();
    const newWhatsapp = editWhatsappInput.value.trim();
    const newInstagram = editInstagramInput.value.trim();
    const newProfilePicUrl = profilePicUrlInput.value.trim(); // Get direct URL

    let finalProfilePicUrl = newProfilePicUrl; // Start with user-inputted URL
    let newProfileLogo = ''; // Initialize emoji logo to empty

    const selectedLogoElement = profileLogoOptions.querySelector('.logo-option-item.selected');

    if (finalProfilePicUrl) {
        // User entered a URL in the text field, this takes precedence
        newProfileLogo = ""; // Ensure emoji logo is empty if direct URL is present
    } else if (selectedLogoElement && selectedLogoElement.dataset.type === 'emoji') {
        // No direct URL, but an emoji logo is selected
        finalProfilePicUrl = ""; // Ensure direct URL is empty
        newProfileLogo = selectedLogoElement.dataset.value;
    } else {
        // Neither direct URL nor explicit emoji selected, use default 'logo-1'
        newProfileLogo = 'logo-1';
        finalProfilePicUrl = "";
    }


    const isPrivate = accountPrivacyToggle.checked;

    if (newUsername === '') {
        showToast("Username cannot be empty.", 'error');
        return;
    }
     if (newUsername.includes(" ") || newUsername.includes("@") || newUsername.includes("#")) {
        showToast("Username cannot contain spaces or special characters like @ or #.", "error");
        return;
    }

    // Name must be provided if it's currently empty, especially for new registrations
    const userDocRef = db.collection('users').doc(currentUser.uid);
    const userDoc = await userDocRef.get();
    const currentData = userDoc.data();
    
    if (currentData && (currentData.username === "" || currentData.name === "") && newName.length < 1) { // If it's first time profile fill and name is empty
         showToast("Display Name cannot be empty during initial profile setup.", 'error');
         return;
    }


    try {
        await userDocRef.update({
            username: newUsername,
            name: newName,
            bio: newBio,
            whatsapp: newWhatsapp,
            instagram: newInstagram,
            profileLogo: newProfileLogo,
            profilePicUrl: finalProfilePicUrl, // Save direct URL
            isPrivate: isPrivate,
            // Initialize earning/follower counts if they don't exist (important for new users saving profile for first time)
            // If they already exist, Firebase update will merge and use existing values.
            // These lines ensure values are set for NEWLY CREATED documents through initial registration flow.
            followersCount: currentData.followersCount !== undefined ? currentData.followersCount : 0,
            followingCount: currentData.followingCount !== undefined ? currentData.followingCount : 0,
            postCount: currentData.postCount !== undefined ? currentData.postCount : 0,
            monetizedViewsCount: currentData.monetizedViewsCount !== undefined ? currentData.monetizedViewsCount : 0,
            unmonetizedViewsCount: currentData.unmonetizedViewsCount !== undefined ? currentData.unmonetizedViewsCount : 0,
            earnedAmount: currentData.earnedAmount !== undefined ? currentData.earnedAmount : 0.00,
            reposts: currentData.reposts !== undefined ? currentData.reposts : []
        });

        // Update username and profile info in existing posts if changed (requires write permissions on posts too)
        if (newUsername !== (currentData.username || '') || finalProfilePicUrl !== (currentData.profilePicUrl || '') || newProfileLogo !== (currentData.profileLogo || '') || isPrivate !== currentData.isPrivate) {
            console.log("Updating username/profile info on posts via batch...");
            const postsSnapshot = await db.collection('posts').where('userId', '==', currentUser.uid).get();
            const batch = db.batch();
            postsSnapshot.docs.forEach(doc => {
                const postRef = db.collection('posts').doc(doc.id);
                batch.update(postRef, {
                    username: newUsername,
                    profilePicUrl: finalProfilePicUrl,
                    userProfileLogo: finalProfilePicUrl ? "" : newProfileLogo, // Only use emoji if no direct pic URL
                    isPrivate: isPrivate // Propagate post's privacy if user's overall privacy changed
                });
            });
            await batch.commit();
            console.log("Post updates batch committed successfully.");
        }

        editProfileModal.classList.add('hidden'); // This will now correctly hide the modal on save
        showToast("Profile updated successfully!", 'success');
        loadUserProfile(currentUser.uid); // Reload profile display
    } catch (error) {
        console.error("Error saving profile:", error);
        showToast("Failed to save profile. Please try again. Error: " + (error.message || 'Unknown error'), 'error', 6000);
    }
});

// Follow/Unfollow Logic
followUserBtn.addEventListener('click', () => handleFollow(currentProfileViewingId));
unfollowUserBtn.addEventListener('click', () => handleUnfollow(currentProfileViewingId));

async function handleFollow(targetUserId) {
    if (!currentUser) {
        showToast("Please log in to follow users.", 'info');
        return;
    }
    if (currentUser.uid === targetUserId) {
        showToast("Cannot follow yourself.", 'info');
        return;
    }

    try {
        const currentUserRef = db.collection('users').doc(currentUser.uid);
        const targetUserRef = db.collection('users').doc(targetUserId);

        await db.runTransaction(async (transaction) => {
            const currentUserDoc = await transaction.get(currentUserRef);
            const targetUserDoc = await transaction.get(targetUserRef);

            if (!currentUserDoc.exists || !targetUserDoc.exists) {
                throw new Error("User document not found during follow operation.");
            }

            const currentUserData = currentUserDoc.data();
            const targetUserData = targetUserDoc.data();

            if (currentUserData.following && currentUserData.following.includes(targetUserId)) {
                showToast("Already following this user.", 'info');
                return; // Exit transaction if already following.
            }

            // If target user is private, direct follow is not allowed (would need a follow request system).
            if (targetUserData.isPrivate) {
                showToast("This account is private. Cannot follow directly.", 'info', 4000);
                throw new Error("Private account, direct follow not allowed."); // Abort transaction.
            }

            // Perform the follow updates in the transaction.
            transaction.update(currentUserRef, {
                following: firebase.firestore.FieldValue.arrayUnion(targetUserId),
                followingCount: firebase.firestore.FieldValue.increment(1)
            });
            transaction.update(targetUserRef, {
                followers: firebase.firestore.FieldValue.arrayUnion(currentUser.uid),
                followersCount: firebase.firestore.FieldValue.increment(1)
            });
        });

        showToast(`Successfully followed @${currentProfileUsername.textContent.replace('@','')}`, 'success');
        followUserBtn.classList.add('hidden');
        unfollowUserBtn.classList.remove('hidden');
        loadUserProfile(currentProfileViewingId); // Refresh profile display to show updated counts.
    } catch (error) {
        console.error("Error following user:", error);
        if (error.message && error.message.includes("Private account")) {
             // Toast already handled by explicit throw above.
        } else {
            showToast(`Failed to follow: ${error.message || 'Unknown error'}`, 'error');
        }
    }
}

async function handleUnfollow(targetUserId) {
    if (!currentUser) {
        showToast("Please log in to unfollow users.", 'info');
        return;
    }
    if (currentUser.uid === targetUserId) {
        showToast("Cannot unfollow yourself.", 'info');
        return;
    }

    try {
        const currentUserRef = db.collection('users').doc(currentUser.uid);
        const targetUserRef = db.collection('users').doc(targetUserId);

        await db.runTransaction(async (transaction) => {
            const currentUserDoc = await transaction.get(currentUserRef);
            const targetUserDoc = await transaction.get(targetUserRef);

            if (!currentUserDoc.exists || !targetUserDoc.exists) {
                throw new Error("User document not found during unfollow operation.");
            }

            const currentUserData = currentUserDoc.data();
            // Check if this person is indeed a follower.
            if (!currentUserData.following || !currentUserData.following.includes(targetUserId)) {
                showToast("Not currently following this user.", 'info');
                return; // Exit transaction if not already following.
            }

            // Perform unfollow updates.
            transaction.update(currentUserRef, {
                following: firebase.firestore.FieldValue.arrayRemove(targetUserId),
                followingCount: firebase.firestore.FieldValue.increment(-1)
            });
            transaction.update(targetUserRef, {
                followers: firebase.firestore.FieldValue.arrayRemove(currentUser.uid),
                followersCount: firebase.firestore.FieldValue.increment(-1)
            });
        });

        showToast(`Successfully unfollowed @${currentProfileUsername.textContent.replace('@','')}`, 'success');
        followUserBtn.classList.remove('hidden');
        unfollowUserBtn.classList.add('hidden');
        loadUserProfile(currentProfileViewingId); // Refresh profile display to show updated counts.
    } catch (error) {
        console.error("Error unfollowing user:", error);
        showToast(`Failed to unfollow: ${error.message || 'Unknown error'}`, 'error');
    }
}


// Remove a follower (only if you are the user being unfollowed)
async function removeFollower(followerId) {
    if (!currentUser) {
        showToast("Please log in.", 'info');
        return;
    }

    try {
        const currentUserRef = db.collection('users').doc(currentUser.uid);
        const followerUserRef = db.collection('users').doc(followerId);

        await db.runTransaction(async (transaction) => {
            const currentUserDoc = await transaction.get(currentUserRef);
            const followerUserDoc = await transaction.get(followerUserRef);

            if (!currentUserDoc.exists || !followerUserDoc.exists) {
                throw new Error("User document not found.");
            }

            const currentUserData = currentUserDoc.data();
            // Check if this person is indeed a follower.
            if (!currentUserData.followers || !currentUserData.followers.includes(followerId)) {
                showToast("This user is not currently your follower.", 'info');
                return;
            }

            // Remove from current user's followers list.
            transaction.update(currentUserRef, {
                followers: firebase.firestore.FieldValue.arrayRemove(followerId),
                followersCount: firebase.firestore.FieldValue.increment(-1)
            });
            // Also update the removed follower's following list (remove current user from it).
            transaction.update(followerUserRef, {
                following: firebase.firestore.FieldValue.arrayRemove(currentUser.uid),
                followingCount: firebase.firestore.FieldValue.increment(-1)
            });
        });

        showToast("Follower removed successfully.", 'success');
        // Refresh the follow list modal if it's currently displaying followers.
        if (!followListModal.classList.contains('hidden') && followListTitle.textContent === 'Followers') {
            showFollowList(currentUser.uid, 'followers');
        }
        loadUserProfile(currentUser.uid); // Refresh profile counts.
    } catch (error) {
        console.error("Error removing follower:", error);
        showToast(`Failed to remove follower: ${error.message || 'Unknown error'}`, 'error');
    }
}


// Display followers/following lists in a modal
document.querySelectorAll('.clickable-stat').forEach(stat => {
    stat.addEventListener('click', (e) => {
        const statType = e.currentTarget.dataset.stat; // 'followers' or 'following'
        const userId = currentProfileViewingId; // Use the ID of the user whose profile is currently open
        if (userId) {
            showFollowList(userId, statType);
        }
    });
});

async function showFollowList(userId, type) {
    if (!currentUser) {
        showToast("Please log in to view this list.", 'info');
        return;
    }

    followListContent.innerHTML = '<div class="loader" style="margin: 20px auto;"></div>'; // Show loader
    followListTitle.textContent = type === 'followers' ? 'Followers' : 'Following';
    followListModal.classList.remove('hidden'); // Show modal

    try {
        const userDoc = await db.collection('users').doc(userId).get();
        if (!userDoc.exists) {
            followListContent.innerHTML = '<p style="text-align: center;">User not found.</p>';
            return;
        }

        const userRefs = userDoc.data()[type] || []; // Get array of UIDs for followers or following.
        if (userRefs.length === 0) {
            followListContent.innerHTML = `<p style="text-align: center;">No ${type} found.</p>`;
            return;
        }

        const usersData = [];
        // Fetch details for each user in the list (Firestore 'in' query limited to 10. Handle larger lists in batches).
        // For simplicity, here we'll just fetch first 10-20 to display.
        const fetchedUserDocs = await Promise.all(userRefs.slice(0, 20).map(id => db.collection('users').doc(id).get()));

        fetchedUserDocs.forEach(doc => {
            if (doc.exists) {
                usersData.push({ id: doc.id, ...doc.data() });
            }
        });

        usersData.sort((a,b) => (a.username || '').localeCompare(b.username || '')); // Sort display by username.


        followListContent.innerHTML = ''; // Clear loader and content.
        for (const user of usersData) { // Iterate over fetched user data to build list.
            const userItem = document.createElement('li');
            userItem.className = 'search-user-item';
            userItem.dataset.userId = user.id;

            // Determine user avatar (direct URL vs. emoji logo)
            let userAvatarHtml;
            if (user.profilePicUrl) {
                userAvatarHtml = `<div class="profile-avatar small" style="background-image: url('${user.profilePicUrl}');"></div>`;
            } else {
                const userLogoClass = getLogoCssClass(user.profileLogo || 'logo-1');
                userAvatarHtml = `<div class="profile-avatar small ${userLogoClass}"></div>`;
            }

            userItem.innerHTML = `
                ${userAvatarHtml}
                <span class="search-username">@${user.username || 'Unknown'}</span>
                <button class="btn small primary-btn follow-btn" data-target-id="${user.id}"></button>
            `;
            followListContent.appendChild(userItem);

            const actionBtn = userItem.querySelector('.follow-btn');
            // Logic to determine button text and action ('Follow', 'Following', 'Remove').
            if (currentUser.uid === user.id) { // Hide button if it's the current user themselves.
                actionBtn.classList.add('hidden');
            } else if (type === 'followers' && userId === currentUser.uid) { // If viewing own followers list.
                actionBtn.textContent = 'Remove';
                actionBtn.classList.add('danger-btn');
                actionBtn.classList.remove('primary-btn');
                actionBtn.addEventListener('click', async (e) => {
                    e.stopPropagation(); // Prevent opening profile when clicking button.
                    await removeFollower(user.id);
                });
            } else { // For other users in the list, determine follow/unfollow status.
                const currentUserFollowingDoc = await db.collection('users').doc(currentUser.uid).get();
                const followingList = currentUserFollowingDoc.data().following || [];
                if (followingList.includes(user.id)) {
                    actionBtn.textContent = 'Following';
                    actionBtn.classList.add('secondary-btn');
                    actionBtn.classList.remove('primary-btn');
                } else {
                    actionBtn.textContent = 'Follow';
                    actionBtn.classList.add('primary-btn');
                    actionBtn.classList.remove('secondary-btn');
                }
                actionBtn.addEventListener('click', async (e) => {
                    e.stopPropagation(); // Prevent opening profile when clicking button.
                    const targetId = e.target.dataset.targetId;
                    if (e.target.textContent === 'Follow') {
                        await handleFollow(targetId);
                        // Update button text/style without full list reload for performance.
                        e.target.textContent = 'Following';
                        e.target.classList.add('secondary-btn');
                        e.target.classList.remove('primary-btn');
                    } else {
                        await handleUnfollow(targetId);
                        e.target.textContent = 'Follow';
                        e.target.classList.add('primary-btn');
                        e.target.classList.remove('secondary-btn');
                    }
                });
            }

            // Make the entire list item clickable to open the user's profile.
            userItem.addEventListener('click', () => {
                followListModal.classList.add('hidden'); // Close current modal.
                openUserProfile(user.id); // Navigate to clicked user's profile.
            });
        }
    } catch (error) {
        console.error("Error loading follow list:", error);
        followListContent.innerHTML = '<p style="text-align: center; color: red;">Error loading list.</p>';
        showToast("Error loading follow list.", 'error');
    }
}

closeFollowListModalBtn.addEventListener('click', () => {
    followListModal.classList.add('hidden');
});

// Navigate to another user's profile (or own if userId matches)
function openUserProfile(userId) {
    if (userId === currentUser.uid) {
        showScreen('profile-screen'); // If clicking on own profile, just navigate.
        loadUserProfile(currentUser.uid); // Load own profile data.
    } else {
        showScreen('profile-screen'); // Go to profile screen to display others' profile.
        loadUserProfile(userId); // Load data for the specified user ID.
    }
}

// --- Messaging Feature ---
messageUserBtn.addEventListener('click', () => {
    if (!currentUser || !currentProfileViewingId) {
        showToast("Select a user to message or log in first.", 'info');
        return;
    }
    openChatWindow(currentProfileViewingId);
});

async function loadRecentChats() {
    if (!currentUser) return;
    recentChatsList.innerHTML = '<div class="loader" style="margin: 20px auto;"></div>';

    try {
        // Real-time listener for messages involving the current user to display recent chats.
        // It fetches messages where the current user is either the sender or receiver,
        // ordered by timestamp to get the latest conversations.
        db.collection('messages')
            .where('participants', 'array-contains', currentUser.uid)
            .orderBy('timestamp', 'desc')
            .onSnapshot(async (snapshot) => {
                const updatedChats = {}; // To store unique chat partners with their latest message.
                snapshot.docs.forEach(doc => {
                    const data = doc.data();
                    let partnerId;
                    // Determine the other participant's ID.
                    if (data.senderId === currentUser.uid) {
                        partnerId = data.receiverId;
                    } else {
                        partnerId = data.senderId;
                    }

                    // Keep only the latest message for each chat partner.
                    if (!updatedChats[partnerId] || data.timestamp.toMillis() > updatedChats[partnerId].timestamp) {
                        updatedChats[partnerId] = {
                            partnerId: partnerId,
                            lastMessage: data.content,
                            timestamp: data.timestamp.toMillis()
                        };
                    }
                });

                // Sort chat partners by their latest message timestamp.
                const chatPartners = Object.values(updatedChats).sort((a, b) => b.timestamp - a.timestamp);

                if (chatPartners.length === 0) {
                    recentChatsList.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No recent chats.</p>';
                    return;
                }

                recentChatsList.innerHTML = ''; // Clear previous chat list.
                // Fetch and display details for each chat partner.
                for (const chat of chatPartners) {
                    const partnerDoc = await db.collection('users').doc(chat.partnerId).get();
                    if (partnerDoc.exists) {
                        const partnerData = partnerDoc.data();
                        const chatItem = document.createElement('li');
                        chatItem.className = 'chat-item';
                        chatItem.dataset.userId = partnerData.uid;

                        // Determine partner's avatar (direct URL or emoji logo).
                        let partnerAvatarHtml;
                        if (partnerData.profilePicUrl) {
                            partnerAvatarHtml = `<div class="profile-avatar small" style="background-image: url('${partnerData.profilePicUrl}');"></div>`;
                        } else {
                            const partnerLogoClass = getLogoCssClass(partnerData.profileLogo || 'logo-1');
                            partnerAvatarHtml = `<div class="profile-avatar small ${partnerLogoClass}"></div>`;
                        }

                        chatItem.innerHTML = `
                            ${partnerAvatarHtml}
                            <div class="chat-info">
                                <span class="chat-username">@${partnerData.username}</span>
                                <span class="last-message">${chat.lastMessage}</span>
                            </div>
                        `;
                        chatItem.addEventListener('click', () => openChatWindow(partnerData.uid)); // Open chat window on click.
                        recentChatsList.appendChild(chatItem);
                    }
                }
            }, error => {
                console.error("Error loading recent chats listener:", error);
                showToast("Error loading chats. Please check console.", 'error');
                recentChatsList.innerHTML = '<p style="text-align: center; color: red;">Error loading chats.</p>';
            });
    } catch (error) {
        console.error("Error setting up recent chats listener:", error);
        showToast("Error setting up chat listener. Please try again.", 'error');
    }
}

async function openChatWindow(partnerId) {
    if (!currentUser) {
        showToast("Please log in to chat.", 'info');
        return;
    }
    currentChatPartnerId = partnerId;
    messageListContainer.classList.add('hidden'); // Hide chat list.
    chatWindowContainer.classList.remove('hidden'); // Show chat window.
    chatMessages.innerHTML = '<div class="loader" style="margin: 20px auto;"></div>'; // Show a loading spinner.

    try {
        const partnerDoc = await db.collection('users').doc(partnerId).get();
        if (partnerDoc.exists) {
            chatPartnerUsername.textContent = `@${partnerDoc.data().username}`; // Set chat partner's username.
            // Set chat partner's avatar.
            if (partnerDoc.data().profilePicUrl) {
                chatPartnerAvatar.style.backgroundImage = `url('${partnerDoc.data().profilePicUrl}')`;
                chatPartnerAvatar.className = 'profile-avatar small';
            } else {
                chatPartnerAvatar.style.backgroundImage = 'none';
                const partnerLogoClass = getLogoCssClass(partnerDoc.data().profileLogo || 'logo-1');
                chatPartnerAvatar.className = `profile-avatar small ${partnerLogoClass}`;
            }
        } else {
            chatPartnerUsername.textContent = "@UnknownUser";
            chatPartnerAvatar.style.backgroundImage = 'none';
            chatPartnerAvatar.className = `profile-avatar small ${getLogoCssClass('logo-1')}`;
        }

        // Real-time listener for messages between these two specific users.
        db.collection('messages')
            .where('participants', 'array-contains', currentUser.uid) // Query messages where current user is a participant.
            .orderBy('timestamp', 'asc') // Order messages chronologically.
            .onSnapshot(snapshot => {
                chatMessages.innerHTML = ''; // Clear previous messages.
                snapshot.docs.forEach(doc => {
                    const message = doc.data();
                    // Filter messages relevant *only* to the current chat partner in the UI
                    const isRelevant = (message.senderId === currentUser.uid && message.receiverId === partnerId) ||
                                       (message.senderId === partnerId && message.receiverId === currentUser.uid);
                    // Client-side expiry check for display (Firestore rules enforce true expiry on backend).
                    const isWithin12Hours = (Date.now() - message.timestamp.toMillis()) < (12 * 60 * 60 * 1000);

                    if (isRelevant && isWithin12Hours) {
                        const messageBubble = document.createElement('div');
                        messageBubble.className = `message-bubble ${message.senderId === currentUser.uid ? 'right' : 'left'}`; // Align bubbles.
                        messageBubble.textContent = message.content;
                        chatMessages.appendChild(messageBubble);
                    }
                });
                chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to latest message.
            }, error => {
                console.error("Error getting chat messages:", error);
                chatMessages.innerHTML = '<p style="text-align: center; color: red;">Error loading messages.</p>';
                showToast("Error loading messages.", 'error');
            });

        // Long press for emoji reactions in chat (similar to posts)
        const emojiPickerChat = chatWindowContainer.querySelector('.emoji-picker-chat');
        messageInput.addEventListener('touchstart', (e) => {
            clearTimeout(longPressTimer);
            longPressTimer = setTimeout(() => {
                emojiPickerChat.classList.remove('hidden');
            }, 800);
        }, { passive: true }); // Use passive to avoid blocking native scroll behavior.

        messageInput.addEventListener('touchend', () => {
            clearTimeout(longPressTimer);
        });

        // Hide emoji picker when clicking outside.
        const hideEmojiPickerChat = (e) => {
            if (!emojiPickerChat.contains(e.target) && !messageInput.contains(e.target) && !emojiPickerChat.classList.contains('hidden')) {
                emojiPickerChat.classList.add('hidden');
            }
        };
        document.addEventListener('click', hideEmojiPickerChat); // Listen for clicks on the document to hide picker.


        emojiPickerChat.querySelectorAll('.emoji-option').forEach(emojiOption => {
            emojiOption.addEventListener('click', (e) => {
                const selectedEmoji = e.target.dataset.emoji;
                messageInput.value += ` ${selectedEmoji} `; // Append emoji to input.
                emojiPickerChat.classList.add('hidden'); // Hide picker after selection.
                messageInput.focus(); // Keep focus on input.
            });
        });

    } catch (error) {
        console.error("Error opening chat window:", error);
        showToast("Failed to open chat. Please try again.", 'error');
    }
}

// Back button in chat window to return to recent chats list.
backToChatsBtn.addEventListener('click', () => {
    messageListContainer.classList.remove('hidden'); // Show chat list.
    chatWindowContainer.classList.add('hidden'); // Hide chat window.
    currentChatPartnerId = null; // Clear active chat partner.
    // Ideally, detach Firestore snapshot listener for performance, but requires storing its unsubscribe function.
});

// Send message button in chat window.
sendMessageBtn.addEventListener('click', async () => {
    if (!currentUser || !currentChatPartnerId) {
        showToast("You need to be logged in and select a recipient to send a message.", 'error');
        return;
    }

    const messageContent = messageInput.value.trim();
    if (messageContent === '') {
        showToast("Message cannot be empty.", 'info');
        return;
    }

    try {
        await db.collection('messages').add({
            senderId: currentUser.uid,
            receiverId: currentChatPartnerId,
            content: messageContent,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            participants: [currentUser.uid, currentChatPartnerId], // For efficient querying of conversations.
            read: false // Mark as unread for the receiver.
        });

        messageInput.value = ''; // Clear message input after sending.
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the bottom of the chat.
        showToast("Message sent!", 'success');
    } catch (error) {
        console.error("Error sending message:", error);
        // Provide user-friendly error feedback.
        if (error.code === 'permission-denied' || error.message.includes('Missing or insufficient permissions')) {
            showToast("Error sending message: Missing or insufficient permissions. Please check Firebase rules.", 'error', 5000);
        } else {
            showToast("Failed to send message. Please try again.", 'error');
        }
    }
});


// --- Comments Feature ---
// Open comments modal for a specific post.
function openCommentsModal(postId) {
    if (!currentUser) {
        showToast("Please log in to view or add comments.", 'info');
        return;
    }
    currentPostIdForComments = postId; // Store the ID of the post for which comments are being viewed.
    commentsModal.classList.remove('hidden'); // Display the comments modal.
    commentsList.innerHTML = '<div class="loader" style="margin: 20px auto;"></div>'; // Show a loading spinner.
    commentsModalTitle.textContent = 'Comments'; // Set modal title.

    // Real-time listener for comments related to this post.
    db.collection('comments')
        .where('postId', '==', postId)
        .orderBy('timestamp', 'asc') // Order comments chronologically.
        .onSnapshot(async (snapshot) => {
            commentsList.innerHTML = ''; // Clear existing comments.
            if (snapshot.empty) {
                commentsList.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No comments yet. Be the first to comment!</p>';
                return;
            }

            for (const doc of snapshot.docs) {
                const commentData = doc.data();
                const commentUserDoc = await db.collection('users').doc(commentData.userId).get();
                const username = commentUserDoc.exists ? commentUserDoc.data().username : 'Deleted User'; // Display username or 'Deleted User'.

                const commentItem = document.createElement('div');
                commentItem.className = 'comment-item';
                commentItem.innerHTML = `
                    <strong>@${username}</strong>: ${commentData.content}
                    <small>${new Date(commentData.timestamp.toMillis()).toLocaleString()}</small>
                `;
                commentsList.appendChild(commentItem);
            }
            commentsList.scrollTop = commentsList.scrollHeight; // Auto-scroll to the bottom of the comments list.
        }, error => {
            console.error("Error loading comments:", error);
            commentsList.innerHTML = '<p style="text-align: center; color: red;">Error loading comments.</p>';
            showToast("Error loading comments.", 'error');
        });
}

// Add a new comment to the current post.
addCommentBtn.addEventListener('click', async () => {
    if (!currentUser || !currentPostIdForComments) {
        showToast("You need to be logged in and viewing a post to comment.", 'error');
        return;
    }

    const commentContent = newCommentInput.value.trim();
    if (commentContent.length < 1 || commentContent.length > 100) {
        showToast("Comment must be between 1 and 100 characters.", 'error');
        return;
    }

    try {
        await db.collection('comments').add({
            postId: currentPostIdForComments,
            userId: currentUser.uid,
            content: commentContent,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        // Increment the comment count on the post document.
        await db.collection('posts').doc(currentPostIdForComments).update({
            commentCount: firebase.firestore.FieldValue.increment(1)
        });

        newCommentInput.value = ''; // Clear comment input field.
        showToast("Comment added!", 'success');
    } catch (error) {
        console.error("Error adding comment:", error);
        showToast("Failed to add comment. Please try again.", 'error');
    }
});

// Close comments modal.
closeCommentsModalBtn.addEventListener('click', () => {
    commentsModal.classList.add('hidden');
    currentPostIdForComments = null; // Clear the post ID.
});


// --- Search Functionality ---
searchBtn.addEventListener('click', () => performSearch()); // Trigger search on button click.
searchQueryInput.addEventListener('keypress', (e) => { // Trigger search on Enter key press.
    if (e.key === 'Enter') {
        performSearch();
    }
});

async function performSearch() {
    const query = searchQueryInput.value.trim().toLowerCase();
    searchUserList.innerHTML = ''; // Clear previous user results.
    searchPostList.innerHTML = ''; // Clear previous post results.
    noSearchResults.classList.add('hidden'); // Hide 'no results' message initially.

    if (query === '') {
        showToast("Please enter a search query.", 'info');
        return;
    }

    let foundResults = false;

    // Search Users by username.
    try {
        const userSnapshot = await db.collection('users')
            .where('username', '>=', query) // Starts with query
            .where('username', '<=', query + '\uf8ff') // Ends with query (approx)
            .limit(10) // Limit results.
            .get();

        if (!userSnapshot.empty) {
            foundResults = true;
            userSnapshot.docs.forEach(doc => {
                const userData = { id: doc.id, ...doc.data() };
                const userItem = document.createElement('li');
                userItem.className = 'search-user-item';
                userItem.dataset.userId = userData.id;

                // Determine user avatar.
                let userAvatarHtml;
                if (userData.profilePicUrl) {
                    userAvatarHtml = `<div class="profile-avatar small" style="background-image: url('${userData.profilePicUrl}');"></div>`;
                } else {
                    const userLogoClass = getLogoCssClass(userData.profileLogo || 'logo-1');
                    userAvatarHtml = `<div class="profile-avatar small ${userLogoClass}"></div>`;
                }

                userItem.innerHTML = `
                    ${userAvatarHtml}
                    <span class="search-username">@${userData.username}</span>
                    <button class="btn small primary-btn follow-btn" data-target-id="${userData.id}"></button>
                `;
                searchUserList.appendChild(userItem);

                const followBtn = userItem.querySelector('.follow-btn');
                if (currentUser.uid === userData.id) { // Hide button if it's current user's profile.
                    followBtn.classList.add('hidden');
                } else {
                    // Update follow button status (Follow/Following).
                    db.collection('users').doc(currentUser.uid).get().then(doc => {
                        const followingList = doc.data().following || [];
                        if (followingList.includes(userData.id)) {
                            followBtn.textContent = 'Following';
                            followBtn.classList.add('secondary-btn');
                            followBtn.classList.remove('primary-btn');
                        } else {
                            followBtn.textContent = 'Follow';
                            followBtn.classList.add('primary-btn');
                            followBtn.classList.remove('secondary-btn');
                        }
                    });
                }

                followBtn.addEventListener('click', async (e) => {
                    e.stopPropagation(); // Prevent opening profile when clicking button.
                    const targetId = e.target.dataset.targetId;
                    if (e.target.textContent === 'Follow') {
                        await handleFollow(targetId);
                        e.target.textContent = 'Following';
                        e.target.classList.add('secondary-btn');
                        e.target.classList.remove('primary-btn');
                    } else {
                        await handleUnfollow(targetId);
                        e.target.textContent = 'Follow';
                        e.target.classList.add('primary-btn');
                        e.target.classList.remove('secondary-btn');
                    }
                });
                userItem.addEventListener('click', () => openUserProfile(userData.id)); // Open user profile on click.
            });
        }
    } catch (error) {
        console.error("Error searching users:", error);
        showToast("Error searching users. Please check console.", 'error');
    }

    // Search Posts by content keyword (basic client-side match).
    // Note: For large scale full-text search, Firebase functions + Algolia or a similar solution is recommended.
    try {
        const postSnapshot = await db.collection('posts')
            .where('expiryTime', '>', firebase.firestore.Timestamp.now())
            .orderBy('expiryTime', 'desc')
            .limit(10)
            .get();

        postSnapshot.docs.forEach(doc => {
            const postData = { id: doc.id, ...doc.data() };
            // Security rules will ultimately decide if user can read the private posts found.
            if (postData.content && postData.content.toLowerCase().includes(query)) {
                foundResults = true;
                searchPostList.appendChild(createPostElement(postData));
            }
        });
    } catch (error) {
        console.error("Error searching posts:", error);
        showToast("Error searching posts. Please check console.", 'error');
    }

    if (!foundResults) {
        noSearchResults.classList.remove('hidden'); // Show 'No results' message if nothing found.
    }
}

// --- Post Options (Report, Delete, Repost) ---
async function handleReportPost(postId) {
    if (!currentUser) {
        showToast("Please log in to report posts.", 'info');
        return;
    }
    try {
        await db.collection('reports').add({
            postId: postId,
            reportedBy: currentUser.uid,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'pending' // Initial status
        });
        showToast("Post reported successfully. We will review it.", 'info');
    } catch (error) {
        console.error("Error reporting post:", error);
        showToast("Failed to report post. Please try again.", 'error');
    }
}

async function handleRepost(postId) {
    if (!currentUser) {
        showToast("Please log in to repost.", 'info');
        return;
    }
    try {
        const userDocRef = db.collection('users').doc(currentUser.uid);
        const userDoc = await userDocRef.get();
        const userData = userDoc.data();
        const currentReposts = userData.reposts || [];

        if (currentReposts.includes(postId)) {
            showToast("You have already reposted this.", 'info');
            return;
        }

        await userDocRef.update({
            reposts: firebase.firestore.FieldValue.arrayUnion(postId) // Add post ID to user's reposts array.
        });
        showToast("Post reposted to your profile!", 'success');
    } catch (error) {
        console.error("Error reposting:", error);
        showToast("Failed to repost. Please try again.", 'error');
    }
}


async function handleDeletePost(postId, postElement, isMonetized) {
    if (!currentUser) {
        showToast("Please log in to delete posts.", 'info');
        return;
    }

    try {
        const postRef = db.collection('posts').doc(postId);
        const postDoc = await postRef.get();

        if (postDoc.exists && postDoc.data().userId === currentUser.uid) { // Only owner can delete.
            if (confirm("Are you sure you want to delete this post? This cannot be undone.")) {
                // Perform deletion in a transaction to ensure atomicity for related data.
                await db.runTransaction(async (transaction) => {
                    transaction.delete(postRef); // Delete the main post document.

                    // Delete related comments (a Cloud Function is ideal for full cascade deletion).
                    const commentsSnapshot = await db.collection('comments').where('postId', '==', postId).get();
                    commentsSnapshot.docs.forEach(commentDoc => {
                        transaction.delete(db.collection('comments').doc(commentDoc.id));
                    });

                    // Delete the postViews record for this post.
                    const postViewsRef = db.collection('postViews').doc(postId);
                    const postViewsDoc = await transaction.get(postViewsRef);
                    if (postViewsDoc.exists) {
                         transaction.delete(postViewsRef);
                    }

                    // Decrement the user's total post count.
                    const userRef = db.collection('users').doc(currentUser.uid);
                    transaction.update(userRef, {
                        postCount: firebase.firestore.FieldValue.increment(-1)
                    });
                });

                postElement.remove(); // Remove post from UI.
                showToast("Post deleted successfully.", 'success');
            }
        } else {
            showToast("You can only delete your own posts.", 'error');
        }
    } catch (error) {
        console.error("Error deleting post:", error);
        showToast("Failed to delete post. Please try again.", 'error');
    }
}

// --- Text-to-Speech Feature ---
function handleSpeakPost(text) {
    if (!('speechSynthesis' in window)) { // Check if browser supports SpeechSynthesis API.
        showToast("Your browser does not support text-to-speech.", 'error');
        return;
    }

    if (synth.speaking) { // If speech is already ongoing, cancel it.
        synth.cancel();
        // If it was the same text, toggle off speech; otherwise, it will start new speech.
        if (currentSpeechUtterance && currentSpeechUtterance.text === text) {
            currentSpeechUtterance = null; // Stop current reading if it's a toggle.
            showToast("Speech stopped.", 'info');
            return;
        }
    }

    // Clean HTML tags and markdown links/images for clearer speech.
    const cleanText = text.replace(/<[^>]*>/g, '') // Remove HTML tags
                        .replace(/\[.*?\]\(.*?\)/g, '') // Remove markdown links
                        .replace(/!\[.*?\]\(.*?\)/g, ''); // Remove markdown images/videos

    const utterance = new SpeechSynthesisUtterance(cleanText); // Create a new speech utterance.
    utterance.lang = 'en-US'; // Set language (can be dynamic).
    utterance.pitch = 1; // Standard pitch.
    utterance.rate = 1; // Standard speed.

    synth.speak(utterance); // Start speech.
    currentSpeechUtterance = utterance; // Store for future reference (e.g., to stop it).

    utterance.onend = () => { // Reset when speech ends.
        currentSpeechUtterance = null;
    };
    showToast("Speaking post...", 'info');
}

// --- Post Translation Feature ---
function handleTranslatePost(text) {
    if (!currentUser) {
        showToast("Please log in to translate posts.", 'info');
        return;
    }
    // This functionality requires integration with a third-party translation API (e.g., Google Cloud Translation API).
    // Client-side translation is not practical without external API due to library size and complexity.
    showToast("Translation feature coming soon! (Requires external API integration)", 'info', 4000);

    /* Example of how you *might* call a Firebase Cloud Function for translation:
    // Make sure you have the Firebase Cloud Functions SDK initialized if using it in JS.
    // const functions = firebase.functions();
    // if (location.hostname === "localhost") {
    //     functions.useEmulator("localhost", 5001); // Use local emulator for development
    // }
    
    // functions.httpsCallable('translateText')({ text: text, targetLanguage: 'hi' }) // Target language can be user-selected.
    //     .then(result => {
    //         console.log('Translated text:', result.data.translatedText);
    //         showToast(`Translated to Hindi: ${result.data.translatedText}`, 'success', 5000);
    //         // Here, you would update the post's displayed content or open a translation modal.
    //     })
    //     .catch(error => {
    //         console.error("Translation error via Cloud Function:", error);
    //         showToast(`Failed to translate post: ${error.message}`, 'error');
    //     });
    */
}


// --- Earnings Screen Logic ---
async function loadEarningsPage() {
    if (!currentUser) {
        showToast("Please log in to view your earnings.", 'info');
        return;
    }
    try {
        // Fetch current user's earning data from Firestore.
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        if (userDoc.exists) {
            const userData = userDoc.data();
            const monetizedViews = userData.monetizedViewsCount || 0;
            const unmonetizedViews = userData.unmonetizedViewsCount || 0;
            const earnedAmount = userData.earnedAmount || 0.00;

            // Update UI elements with fetched data.
            totalMonetizedViewsSpan.textContent = formatNumber(monetizedViews);
            totalUnmonetizedViewsSpan.textContent = formatNumber(unmonetizedViews);
            estimatedEarningsSpan.textContent = `${earnedAmount.toFixed(2)} $`;

            const WITHDRAWAL_THRESHOLD = 100000; // Minimum monetized views for withdrawal (1 Lakh).
            if (monetizedViews >= WITHDRAWAL_THRESHOLD) {
                withdrawBtn.disabled = false;
                withdrawBtn.classList.add('primary-btn');
                withdrawBtn.classList.remove('secondary-btn');
                withdrawalStatusDiv.classList.add('hidden'); // Hide status if eligible.
            } else {
                withdrawBtn.disabled = true; // Disable button if not eligible.
                withdrawBtn.classList.add('secondary-btn');
                withdrawBtn.classList.remove('primary-btn');
                withdrawalStatusDiv.classList.remove('hidden'); // Show status message.
                withdrawalStatusDiv.textContent = `You need ${formatNumber(WITHDRAWAL_THRESHOLD)} monetized views to withdraw. You currently have ${formatNumber(monetizedViews)}.`;
            }
        } else {
            showToast("Your earning data is not available. Please try again.", 'error');
        }
    } catch (error) {
        console.error("Error loading earnings data:", error);
        showToast("Error loading earnings. Please try again.", 'error');
    }
}

// Open the withdrawal modal.
withdrawBtn.addEventListener('click', () => {
    if (!currentUser) { // Double check login status.
        showToast("Please log in to withdraw earnings.", 'info');
        return;
    }
    withdrawalModal.classList.remove('hidden'); // Show the modal.
    withdrawalDetailsReview.classList.add('hidden'); // Ensure review section is hidden initially.

    // Display current monetized views in the modal.
    const monetizedViews = parseInt(totalMonetizedViewsSpan.textContent.replace(/[^0-9.]/g, '')) || 0;
    withdrawalViewsDisplay.textContent = formatNumber(monetizedViews);

    // Reset withdrawal form fields.
    withdrawalMethodSelect.value = 'upi';
    withdrawalIdLabel.textContent = 'UPI ID:';
    withdrawalIdInput.value = '';
    withdrawalIdInput.placeholder = 'Enter UPI ID';
    confirmWithdrawalBtn.classList.remove('hidden'); // Show confirm button.
});

// Update input label and placeholder based on withdrawal method selection.
withdrawalMethodSelect.addEventListener('change', (e) => {
    if (e.target.value === 'upi') {
        withdrawalIdLabel.textContent = 'UPI ID:';
        withdrawalIdInput.placeholder = 'Enter UPI ID (e.g., example@bank)';
    } else {
        withdrawalIdLabel.textContent = 'PayPal Email:';
        withdrawalIdInput.placeholder = 'Enter PayPal Email';
    }
});

// Confirm withdrawal details entered by the user.
confirmWithdrawalBtn.addEventListener('click', () => {
    const method = withdrawalMethodSelect.value;
    const id = withdrawalIdInput.value.trim();
    const views = withdrawalViewsDisplay.textContent;

    if (!id) { // Validate if ID field is empty.
        showToast("Please enter your UPI ID or PayPal Email.", 'error');
        return;
    }

    // Populate the review section.
    reviewMethodSpan.textContent = method === 'upi' ? 'UPI' : 'PayPal';
    reviewIdSpan.textContent = id;
    reviewViewsSpan.textContent = views;

    withdrawalDetailsReview.classList.remove('hidden'); // Show review section.
    confirmWithdrawalBtn.classList.add('hidden'); // Hide the "Check Details" button.
});

// Allow user to edit details after review.
editWithdrawalBtn.addEventListener('click', () => {
    withdrawalDetailsReview.classList.add('hidden'); // Hide review section.
    confirmWithdrawalBtn.classList.remove('hidden'); // Show "Check Details" button again.
});

// Send withdrawal request to Firestore (simulated backend call).
sendWithdrawalRequestBtn.addEventListener('click', async () => {
    if (!currentUser) return; // Must be logged in.

    const method = withdrawalMethodSelect.value;
    const id = withdrawalIdInput.value.trim();
    // Re-fetch current monetized views and earnings to ensure accuracy before submitting.
    const userDoc = await db.collection('users').doc(currentUser.uid).get();
    const currentMonetizedViews = userDoc.exists ? (userDoc.data().monetizedViewsCount || 0) : 0;
    const estimatedEarnings = userDoc.exists ? (userDoc.data().earnedAmount || 0.00) : 0.00;

    if (!id) {
        showToast("Withdrawal ID cannot be empty.", 'error');
        return;
    }

    const WITHDRAWAL_THRESHOLD = 100000;
    if (currentMonetizedViews < WITHDRAWAL_THRESHOLD) {
        showToast(`Withdrawal requires ${formatNumber(WITHDRAWAL_THRESHOLD)} monetized views.`, 'error', 5000);
        return;
    }

    try {
        console.log("Simulating withdrawal request submission and saving to Firestore...");
        
        // Save the request in a 'withdrawalRequests' collection for admin to process.
        await db.collection('withdrawalRequests').add({
            userId: currentUser.uid,
            username: myProfileUsername.textContent.replace('@', ''), // Use the displayed username.
            method: method,
            id: id,
            monetizedViewsAtRequest: currentMonetizedViews, // Record views at the time of request.
            estimatedAmount: estimatedEarnings,
            requestTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'pending' // Initial status for admin processing.
        });

        // IMPORTANT: In a production app, the reset of `monetizedViewsCount` and `earnedAmount`
        // should happen *only after* an admin has successfully processed and sent the payment.
        // This is typically handled by a Firebase Cloud Function triggered by the admin marking a request as 'completed'.
        // For this client-side demo, we reset them immediately to simulate the process.
        await db.collection('users').doc(currentUser.uid).update({
            monetizedViewsCount: 0,
            earnedAmount: 0.00
        });

        withdrawalModal.classList.add('hidden'); // Hide the modal after submission.
        showToast("Withdrawal request sent! You will receive payment in 1-15 business days.", 'success', 8000);
        loadEarningsPage(); // Reload earnings data to reflect reset.
    } catch (error) {
        console.error("Error sending withdrawal request:", error);
        showToast("Failed to send withdrawal request. Please try again. Error: " + (error.message || 'Unknown error'), 'error', 6000);
    }
});

cancelWithdrawalBtn.addEventListener('click', () => {
    withdrawalModal.classList.add('hidden');
});
