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
const splashScreen = document.getElementById('splash-screen');
const authContainer = document.getElementById('auth-container'); // New
const appContainer = document.getElementById('app-container');

// Auth Screens
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
// Coins, Credits, Limits removed from header elements
const refreshPostsBtn = document.getElementById('refresh-posts-btn');
const postsFeed = document.getElementById('posts-feed');
const loadingSpinner = document.getElementById('loading-spinner');
// Gift Claim Button removed


// Post Upload Screen
const uploadScreen = document.getElementById('upload-screen');
const postCategorySelect = document.getElementById('post-category');
const postContentInput = document.getElementById('post-content');
const postBoostSelect = document.getElementById('post-boost');
const monetizePostCheckbox = document.getElementById('monetize-post-checkbox');
const publishPostBtn = document.getElementById('publish-post-btn');
const uploadStatus = document.getElementById('upload-status');
const editorToolbar = document.querySelector('.editor-toolbar');

// Profile Screen
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
const profileModalInstruction = document.getElementById('profile-modal-instruction'); // New instruction element
const editUsernameInput = document.getElementById('edit-username');
const usernameAvailability = document.getElementById('username-availability');
const editNameInput = document.getElementById('edit-name');
const editBioInput = document.getElementById('edit-bio');
const editWhatsappInput = document.getElementById('edit-whatsapp');
const editInstagramInput = document.getElementById('edit-instagram');
const profilePicUrlInput = document.getElementById('profile-pic-url-input'); // New direct URL input
const profileLogoOptions = document.getElementById('profile-logo-options');
const accountPrivacyToggle = document.getElementById('account-privacy-toggle');
const accountPrivacyStatus = document.getElementById('account-privacy-status');
const saveProfileBtn = document.getElementById('save-profile-btn');
const cancelEditProfileBtn = document.getElementById('cancel-edit-profile-btn');

const followListModal = document.getElementById('follow-list-modal');
const followListTitle = document.getElementById('follow-list-title');
const followListContent = document.getElementById('follow-list-content');
const closeFollowListModalBtn = document.getElementById('close-follow-list-modal');

// Messaging Screen
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

// Search Screen
const searchScreen = document.getElementById('search-screen');
const searchQueryInput = document.getElementById('search-query');
const searchBtn = document.getElementById('search-btn');
const searchUserList = document.getElementById('search-user-list');
const searchPostList = document.getElementById('search-post-list');
const noSearchResults = document.getElementById('no-search-results');

// Earnings Screen
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


// Comments Modal
const commentsModal = document.getElementById('comments-modal');
const commentsModalTitle = document.getElementById('comments-modal-title');
const commentsList = document.getElementById('comments-list');
const newCommentInput = document.getElementById('new-comment-input');
const addCommentBtn = document.getElementById('add-comment-btn');
const closeCommentsModalBtn = document.getElementById('close-comments-modal');

// Immersive Feed
const immersiveFeed = document.getElementById('immersive-feed');
const feedLoadingSpinner = document.getElementById('feed-loading-spinner');

// Sidebar user info
const sidebarProfileAvatar = document.getElementById('sidebar-profile-avatar');
const sidebarUsername = document.getElementById('sidebar-username');

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
const body = document.body;
const postCategoryFilter = document.getElementById('post-category-filter');

// --- Global Variables ---
let currentUser = null;
let currentProfileViewingId = null; // To differentiate between viewing own profile vs. other's
let currentChatPartnerId = null;
let lastVisiblePost = null; // For infinite scrolling pagination on home feed
let lastVisibleImmersivePost = null; // For infinite scrolling pagination on immersive feed
let fetchingPosts = false;
let fetchingImmersivePosts = false;
let postsToLoadPerScroll = 10;
let dataSaverEnabled = false; // For data saver feature
let currentPostIdForComments = null; // To store the post ID for comments modal

let isProcessingAuth = false; // NEW FLAG: To prevent multiple auth operations / UI conflicts
let hasRunInitialAuthCheck = false; // NEW FLAG: Ensures initial onAuthStateChanged only performs full logic once

// Text-to-Speech API
const synth = window.speechSynthesis;

const PROFILE_LOGOS = [
    { class: 'logo-1', emoji: '🧑', color: '#ff6347' }, // Tomato
    { class: 'logo-2', emoji: '👩', color: '#6a5acd' }, // SlateBlue
    { class: 'logo-3', emoji: '🚀', color: '#32cd32' }, // LimeGreen
    { class: 'logo-4', emoji: '💡', color: '#ff8c00' }, // DarkOrange
    { class: 'logo-5', emoji: '🌟', color: '#ffd700' }, // Gold
    { class: 'logo-6', emoji: '🌈', color: '#9932cc' }, // DarkOrchid
    { class: 'logo-7', emoji: '🦊', color: '#d2691e' }, // Chocolate
    { class: 'logo-8', emoji: '🐼', color: '#6495ed' }, // CornflowerBlue
    { class: 'logo-9', emoji: '🦋', color: '#dda0dd' }, // Plum
    { class: 'logo-10', emoji: '🐢', color: '#20b2aa' }, // LightSeaGreen
    { class: 'logo-11', emoji: '🤖', color: '#87ceeb' }, // SkyBlue
    { class: 'logo-12', emoji: '👽', color: '#7cfc00' }, // LawnGreen
    { class: 'logo-13', emoji: '🦄', color: '#ee82ee' }, // Violet
    { class: 'logo-14', emoji: '🐉', color: '#48d1cc' }, // MediumTurquoise
    { class: 'logo-15', emoji: '🌊', color: '#4682b4' }, // SteelBlue
    { class: 'logo-16', emoji: '🔥', color: '#dc143c' }, // Crimson
    { class: 'logo-17', emoji: '👑', color: '#f0e68c' }, // Khaki
    { class: 'logo-18', emoji: '💎', color: '#00ced1' }, // DarkTurquoise
    { class: 'logo-19', emoji: '🔑', color: '#b0e0e6' }, // PowderBlue
    { class: 'logo-20', emoji: '⚡', color: '#ffff00' }, // Yellow
    { class: 'logo-21', emoji: '🎵', color: '#ff69b4' }, // HotPink
    { class: 'logo-22', emoji: '🎨', color: '#7b68ee' }, // MediumSlateBlue
    { class: 'logo-23', emoji: '🧩', color: '#ffa07a' }, // LightSalmon
    { class: 'logo-24', emoji: '🍔', color: '#cd853f' }, // Peru
    { class: 'logo-25', emoji: '🍕', color: '#f08080' }, // LightCoral
    { class: 'logo-26', emoji: '🎮', color: '#c0c0c0' }, // Silver
    { class: 'logo-27', emoji: '✈️', color: '#afeeee' }, // PaleTurquoise
    { class: 'logo-28', emoji: '🌳', color: '#228b22' }, // ForestGreen
    { class: 'logo-29', emoji: '🌸', color: '#ffb6c1' }, // LightPink
    { class: 'logo-30', emoji: '⚽', color: '#b0c4de' }, // LightSteelBlue
    { class: 'logo-31', emoji: '🎸', color: '#8b4513' }, // SaddleBrown
    { class: 'logo-32', emoji: '🚲', color: '#00fa9a' }, // MediumSpringGreen
    { class: 'logo-33', emoji: '📚', color: '#deb887' }, // BurlyWood
    { class: 'logo-34', emoji: '☕', color: '#d2b48c' }, // Tan
    { class: 'logo-35', emoji: '🎁', color: '#f4a460' }, // SandyBrown
    { class: 'logo-36', emoji: '🎉', color: '#ba55d3' }, // MediumOrchid
    { class: 'logo-37', emoji: '🌍', color: '#87cefa' }, // LightSkyBlue
    { class: 'logo-38', emoji: '🔬', color: '#778899' }, // LightSlateGray
    { class: 'logo-39', emoji: '🔭', color: '#696969' }, // DimGray
    { class: 'logo-40', emoji: '🛠️', color: '#d3d3d3' }, // LightGray
    { class: 'logo-41', emoji: '⚖️', color: '#add8e6' }, // LightBlue
    { class: 'logo-42', emoji: '💰', color: '#b8860b' }, // DarkGoldenRod
    { class: 'logo-43', emoji: '🛡️', color: '#5f9ea0' }, // CadetBlue
    { class: 'logo-44', emoji: '🔔', color: '#f0f8ff' }, // AliceBlue
    { class: 'logo-45', emoji: '⏳', color: '#fa8072' }, // Salmon
    { class: 'logo-46', emoji: '💾', color: '#3cb371' }, // MediumSeaGreen
    { class: 'logo-47', emoji: '⚙️', color: '#4682b4' }, // SteelBlue
    { class: 'logo-48', emoji: '📡', color: '#2e8b57' }, // SeaGreen
    { class: 'logo-49', emoji: '🌐', color: '#a52a2a' }, // Brown
    { class: 'logo-50', emoji: '📈', color: '#c71585' }  // MediumVioletRed
];


// --- Utility Functions ---

function showToast(message, type = 'info', duration = 3000) {
    toastNotification.textContent = message;
    toastNotification.className = `toast-notification show ${type}`; // Add type for styling (e.g., 'error', 'success')
    setTimeout(() => {
        toastNotification.className = 'toast-notification';
    }, duration);
}

// Function to update status messages on auth screens
function updateAuthStatus(element, message, type) {
    element.textContent = message;
    element.className = `status-message ${type}`;
    element.classList.remove('hidden'); // Ensure it's visible
}


function formatNumber(num) {
    if (num === undefined || num === null) return 0;
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return num;
}

function showScreen(screenId) {
    screenSections.forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    // Update bottom nav active state
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

// Function to generate a random logo class (e.g., for new users, search results)
function getRandomLogoClass() {
    const randomIndex = Math.floor(Math.random() * PROFILE_LOGOS.length);
    return PROFILE_LOGOS[randomIndex].class; // Return just the class name
}

function getLogoCssClass(logoName) {
    const logo = PROFILE_LOGOS.find(l => l.class === logoName);
    return logo ? `user-${logo.class}` : 'user-logo-1'; // Default to logo-1 if not found
}

// Function to dynamically apply logo styles (for emoji based logos)
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
applyLogoStyles(); // Call once on script load


// --- Firebase Authentication Flow ---
let splashScreenTimeout; // Variable to hold splash screen timeout ID
let authInitialCheckComplete = false; // Flag: Ensures `onAuthStateChanged`'s logic runs fully only once per app load cycle
let splashScreenMinTimePromise; // Promise for minimum splash screen display duration


// Show authentication container (Login/Signup) UI
function showAuthContainerUI() {
    splashScreen.style.display = 'none'; // Ensure splash is hidden
    appContainer.classList.add('hidden'); // Ensure app is hidden
    authContainer.classList.remove('hidden'); // Show auth container
    loginScreen.classList.add('active'); // Default to login screen
    signupScreen.classList.remove('active');
    console.log("UI: Displaying Authentication screens.");
}

// Show main app container (Home Feed, Profile, etc.) UI
function showAppContainerUI() {
    splashScreen.style.display = 'none'; // Ensure splash is hidden
    authContainer.classList.add('hidden'); // Ensure auth is hidden
    appContainer.classList.remove('hidden'); // Show app container
    console.log("UI: Displaying Main App screens.");
}


// Central function to handle authentication state and UI redirection
async function checkUserAndRedirect(user) {
    // This `onAuthStateChanged` handler can fire multiple times (on load, login, logout).
    // `authInitialCheckComplete` flag ensures that the heavy lifting for initial UI setup
    // only happens once per full page load, regardless of subsequent quick state changes.
    if (authInitialCheckComplete && user === auth.currentUser) {
        console.log("onAuthStateChanged: Secondary fire, user state unchanged. Skipping initial redirect logic.");
        return;
    }
    // Set flag immediately to prevent re-entry.
    authInitialCheckComplete = true;

    // Ensure minimum splash screen time has passed before changing UI.
    console.log("onAuthStateChanged: Waiting for minimum splash screen time...");
    await splashScreenMinTimePromise; // This pauses execution until the promise resolves.
    clearTimeout(splashScreenTimeout); // Clear any splash screen auto-hide fallback.


    if (user && user.emailVerified) {
        currentUser = user;
        console.log(`User logged in: ${user.uid}, Email verified: ${user.emailVerified}. Attempting profile load.`);
        try {
            const userDocRef = db.collection('users').doc(currentUser.uid);
            const userDoc = await userDocRef.get();
            const userData = userDoc.data();

            // Check if profile is complete (username and name must be non-empty)
            if (!userDoc.exists || !userData.username || !userData.name || userData.username === "" || userData.name === "") {
                console.log("User profile incomplete. Displaying Profile setup modal.");
                showAppContainerUI(); // Display the main app container (where profile modal resides)
                showScreen('profile-screen'); // Navigate to profile tab
                editProfileModal.classList.remove('hidden'); // Force open the edit profile modal
                profileModalInstruction.textContent = "Welcome! Please complete your profile (Username and Display Name are required) to continue using the app.";
                myProfileUsername.textContent = "@NewUser"; // Default placeholders
                sidebarUsername.textContent = "New User";
                sidebarProfileAvatar.className = `profile-avatar-small ${getLogoCssClass('logo-1')}`;
                showToast("Welcome! Please complete your profile.", 'info', 5000);
            } else {
                console.log("User profile complete. Proceeding to main app.");
                loadUserProfile(currentUser.uid); // Load user specific data and update sidebar/header
                showAppContainerUI(); // Show the full main app UI
                showScreen('home-screen'); // Default to home feed
                loadPosts(); // Load initial posts
                showToast("Logged in successfully!", 'success');
            }
        } catch (error) {
            console.error("Firebase Firestore profile fetch error during redirection:", error);
            showToast("Failed to load user profile data. Please try logging in again.", 'error', 5000);
            auth.signOut(); // Critical error, force sign out.
            showAuthContainerUI(); // Redirect to login/register.
        }
    } else { // No user, or user's email is not verified
        currentUser = null; // Ensure currentUser is null if not fully authenticated
        console.log("No authenticated and verified user found. Showing Auth UI.");
        showAuthContainerUI(); // Show login/register UI

        if (user && !user.emailVerified) { // If there's a user object but not verified
            console.log("User is authenticated but email not verified.");
            updateAuthStatus(loginStatus, "Please verify your email to continue. Check your inbox.", 'info');
            auth.signOut(); // Force sign out to make the user explicitly log in after verification.
        } else {
            console.log("No user is logged in.");
            updateAuthStatus(loginStatus, "", 'hidden'); // Clear previous messages
        }
    }
    // Regardless of the path, hide the splash screen now.
    // If AuthUI/AppUI are hidden from checkUserAndRedirect, they take over immediately after this.
    hideSplashScreenProperly();
}


auth.onAuthStateChanged(user => {
    // This handler initiates the full redirection logic once Firebase state is known.
    // console.log("onAuthStateChanged event fired. User:", user ? user.uid : "None");
    checkUserAndRedirect(user);
});


// Login/Signup/Forgot Password UI handlers
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginScreen.classList.remove('active');
    signupScreen.classList.add('active');
    updateAuthStatus(loginStatus, '', 'hidden'); // Clear status messages on switch
    updateAuthStatus(signupStatus, '', 'hidden');
    console.log("UI: Switched to Signup screen.");
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupScreen.classList.remove('active');
    loginScreen.classList.add('active');
    updateAuthStatus(loginStatus, '', 'hidden'); // Clear status messages on switch
    updateAuthStatus(signupStatus, '', 'hidden');
    console.log("UI: Switched to Login screen.");
});

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    forgotPasswordModal.classList.remove('hidden');
    updateAuthStatus(resetStatus, '', 'hidden'); // Clear previous status
    resetEmailInput.value = '';
    console.log("UI: Displayed Forgot Password modal.");
});

closeResetModalBtn.addEventListener('click', () => {
    forgotPasswordModal.classList.add('hidden');
    console.log("UI: Closed Forgot Password modal.");
});

loginBtn.addEventListener('click', signInUser);
signupBtn.addEventListener('click', registerUser);
sendResetEmailBtn.addEventListener('click', sendPasswordReset);


// Login User
async function signInUser() {
    if (isProcessingAuth) { // Prevent multiple clicks
        console.warn("Auth process already ongoing. Please wait.");
        return;
    }
    isProcessingAuth = true;
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
        console.log("Attempting user sign-in...");
        await auth.signInWithEmailAndPassword(email, password);
        // `onAuthStateChanged` listener will handle redirection on successful sign-in.
        updateAuthStatus(loginStatus, "Logging in...", 'info');
        // Clear inputs immediately, as they will be re-used/checked by `onAuthStateChanged`.
        loginEmailInput.value = '';
        loginPasswordInput.value = '';
    } catch (error) {
        console.error("Firebase Sign-in error:", error.code, error.message);
        let errorMessage = "Login failed. Please check your email and password.";
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
        isProcessingAuth = false; // Ensure flag is reset
        loginBtn.disabled = false; // Ensure button is re-enabled
    }
}

// Register User
async function registerUser() {
    if (isProcessingAuth) { // Prevent multiple clicks
        console.warn("Auth process already ongoing. Please wait.");
        return;
    }
    isProcessingAuth = true;
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
        console.log("Attempting user registration...");
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        await sendEmailVerification(userCredential.user);

        // Create initial user document in Firestore with placeholder username/name
        await db.collection('users').doc(userCredential.user.uid).set({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            username: "", // Will be set during first profile edit
            name: "",     // Will be set during first profile edit
            bio: "",
            whatsapp: "",
            instagram: "",
            profileLogo: getRandomLogoClass(), // Default random logo
            profilePicUrl: "", // Default empty direct pic URL
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

        updateAuthStatus(signupStatus, "Registration successful! Please verify your email.", 'success');
        signupEmailInput.value = '';
        signupPasswordInput.value = '';
        signupConfirmPasswordInput.value = '';
        // After successful registration, automatically switch to login screen for verification instructions.
        loginScreen.classList.add('active');
        signupScreen.classList.remove('active');
        updateAuthStatus(loginStatus, "Registered! Check your email to verify and then login.", 'info');

    } catch (error) {
        console.error("Firebase Registration error:", error.code, error.message);
        let errorMessage = "Registration failed.";
        if (error.code === 'auth/email-already-in-use') {
            errorMessage = "This email is already in use. Please login.";
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = "Invalid email format.";
        } else if (error.code === 'auth/weak-password') {
            errorMessage = "Password is too weak (min 6 chars).";
        } else if (error.code === 'auth/network-request-failed') {
            errorMessage = "Network error. Check your internet connection.";
        }
        updateAuthStatus(signupStatus, errorMessage, 'error');
    } finally {
        isProcessingAuth = false; // Reset flag
        signupBtn.disabled = false; // Re-enable button
    }
}

// Send Email Verification
async function sendEmailVerification(user) {
    try {
        await user.sendEmailVerification();
        console.log("Verification email sent to:", user.email);
    } catch (error) {
        console.error("Error sending verification email:", error);
        showToast("Failed to send verification email. Try again later.", 'error');
    }
}

// Send Password Reset
async function sendPasswordReset() {
    if (isProcessingAuth) {
        console.warn("Auth process already ongoing.");
        return;
    }
    isProcessingAuth = true;
    sendResetEmailBtn.disabled = true;

    const email = resetEmailInput.value.trim();
    if (!email) {
        updateAuthStatus(resetStatus, "Please enter your email.", 'error');
        isProcessingAuth = false;
        sendResetEmailBtn.disabled = false;
        return;
    }

    try {
        console.log("Sending password reset email to:", email);
        await auth.sendPasswordResetEmail(email);
        updateAuthStatus(resetStatus, "Password reset link sent to your email!", 'success');
    } catch (error) {
        console.error("Firebase Forgot password error:", error.code, error.message);
        let errorMessage = "Failed to send reset link.";
        if (error.code === 'auth/user-not-found') {
            errorMessage = "No account found with that email.";
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = "Invalid email format.";
        } else if (error.code === 'auth/network-request-failed') {
            errorMessage = "Network error. Check your internet connection.";
        }
        updateAuthStatus(resetStatus, errorMessage, 'error');
    } finally {
        isProcessingAuth = false;
        sendResetEmailBtn.disabled = false;
    }
}

// Logout Button
document.getElementById('logout-btn').addEventListener('click', async () => {
    try {
        console.log("Attempting user logout.");
        await auth.signOut();
        showToast("Logged out successfully.", 'info');
        // Clear login/signup input fields for next use
        loginEmailInput.value = '';
        loginPasswordInput.value = '';
        signupEmailInput.value = '';
        signupPasswordInput.value = '';
        signupConfirmPasswordInput.value = '';
        // Clear profile edit fields just in case.
        editUsernameInput.value = '';
        editNameInput.value = '';
        editBioInput.value = '';
        editWhatsappInput.value = '';
        editInstagramInput.value = '';
        profilePicUrlInput.value = '';

        // Reset the flag for `onAuthStateChanged` to run full logic on next state change
        authInitialCheckComplete = false;

        // No explicit hide/show here, as auth.onAuthStateChanged will be triggered automatically
        // and it will handle the redirect to the authentication screens.
    } catch (error) {
        console.error("Error logging out:", error);
        showToast("Failed to log out.", 'error');
    }
});


// --- Initial App Load Logic (Triggered on DOMContentLoaded) ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded. Starting initial app setup.");
    // 1. Hide all main app and auth UI elements initially.
    appContainer.classList.add('hidden');
    authContainer.classList.add('hidden');

    // 2. Ensure splash screen is visible immediately for initial visual.
    splashScreen.classList.remove('hidden');
    splashScreen.style.display = 'flex'; // Important: Ensure it's display flex for centering

    // 3. Set a minimum display time for the splash screen (e.g., 3 seconds).
    // This creates a Promise that resolves after the minimum time.
    splashScreenMinTimePromise = new Promise(resolve => {
        setTimeout(() => {
            console.log("Splash screen minimum display time (3s) elapsed.");
            resolve(); // Resolve the promise, signaling it's safe to change UI
        }, 3000); // Minimum 3 seconds
    });

    // 4. Set a fallback timeout for onAuthStateChanged.
    // If Firebase auth state resolution takes too long (or fails silently in complex scenarios),
    // this ensures the app still attempts to proceed after a max timeout (e.g., 5 seconds total wait time for auth).
    splashScreenTimeout = setTimeout(() => {
        if (!authInitialCheckComplete) { // Only act if the `onAuthStateChanged` handler hasn't processed its initial check.
            console.warn("Splash screen hard timeout (5s) triggered. Forcing UI transition based on current auth state.");
            // Explicitly call the redirection logic. auth.currentUser might be null or valid.
            checkUserAndRedirect(auth.currentUser);
        }
    }, 5000); // Max total time including `splashScreenMinTimePromise`
    // Note: The `checkUserAndRedirect` function itself manages hiding splash and showing subsequent UI.
});


// --- Data Saver Toggle ---
document.getElementById('data-saver-checkbox').addEventListener('change', (e) => {
    dataSaverEnabled = e.target.checked;
    showToast(`Data Saver ${dataSaverEnabled ? 'Enabled' : 'Disabled'}`, 'info');
    // Implement logic to reduce image quality or lazy load more aggressively
    // when dataSaverEnabled is true during post loading.
    // (This would typically involve modifying image URLs or loading smaller versions)
});

// --- Dark Mode Toggle ---
darkModeCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    }
    showToast(`Dark Mode ${e.target.checked ? 'Enabled' : 'Disabled'}`, 'info');
});

// Set initial theme based on local storage or default
// This runs on DOMContentLoaded already (included in initial event listener logic above)
// document.addEventListener('DOMContentLoaded', () => { /* ... existing code here ... */ });


// --- Sidebar Navigation ---
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
            showScreen(`${screenId}-screen`);
            // Specific actions for screens
            if (screenId === 'profile') {
                loadUserProfile(currentUser.uid); // Load own profile
                currentProfileViewingId = currentUser.uid;
            } else if (screenId === 'messages') {
                loadRecentChats();
                messageListContainer.classList.remove('hidden');
                chatWindowContainer.classList.add('hidden');
            } else if (screenId === 'home') {
                 postsFeed.innerHTML = '';
                 lastVisiblePost = null;
                 loadPosts();
                 postCategoryFilter.value = 'all'; // Reset filter
            } else if (screenId === 'feed') {
                 immersiveFeed.innerHTML = '';
                 lastVisibleImmersivePost = null;
                 loadImmersiveFeedPosts();
            } else if (screenId === 'earnings') {
                loadEarningsPage();
            }
        }
        sidebar.classList.remove('open');
    });
});


// --- Bottom Navigation ---
bottomNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const screenId = e.currentTarget.dataset.screen;
        showScreen(`${screenId}-screen`);
        // Specific actions for screens
        if (screenId === 'profile') {
            loadUserProfile(currentUser.uid); // Load own profile
            currentProfileViewingId = currentUser.uid;
        } else if (screenId === 'messages') {
            loadRecentChats();
            messageListContainer.classList.remove('hidden');
            chatWindowContainer.classList.add('hidden');
        } else if (screenId === 'home') {
            postsFeed.innerHTML = ''; // Clear existing posts
            lastVisiblePost = null; // Reset pagination
            loadPosts(); // Reload posts
            postCategoryFilter.value = 'all'; // Reset filter
        } else if (screenId === 'search') {
            searchUserList.innerHTML = '';
            searchPostList.innerHTML = '';
            noSearchResults.classList.add('hidden');
            searchQueryInput.value = '';
        } else if (screenId === 'upload') {
            // Reset upload form
            postContentInput.value = '';
            postContentInput.textContent = ''; // Clear content
            monetizePostCheckbox.checked = false;
            uploadStatus.textContent = '';
        }
    });
});


// --- Post Loading and Infinite Scrolling (Home Feed) ---
postCategoryFilter.addEventListener('change', () => {
    postsFeed.innerHTML = '';
    lastVisiblePost = null;
    loadPosts();
});

async function loadPosts() {
    if (fetchingPosts || !currentUser) return; // Must be logged in

    fetchingPosts = true;
    loadingSpinner.classList.remove('hidden');

    try {
        let postsRef = db.collection('posts')
                         .where('expiryTime', '>', firebase.firestore.Timestamp.now()) // Only active (not expired) posts
                         .orderBy('expiryTime', 'desc') // Order by expiry to show newer relevant posts first
                         .orderBy('timestamp', 'desc'); // Secondary order by original timestamp for consistency

        const selectedCategory = postCategoryFilter.value;
        if (selectedCategory !== 'all') {
            postsRef = postsRef.where('category', '==', selectedCategory);
        }

        // Apply follower-based filtering for home feed (display only posts from followed users or public posts)
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        const followedUsers = userDoc.data().following || [];

        let snapshot;
        let fetchedPosts = [];

        // Fetch followed users' posts
        if (followedUsers.length > 0) {
            // Firestore 'in' query limitation (max 10) means we need to chunk UIDs if > 10.
            const chunkSize = 10;
            for (let i = 0; i < followedUsers.length; i += chunkSize) {
                const chunk = followedUsers.slice(i, i + chunkSize);
                // Create a temporary query for each chunk
                let currentChunkQuery = db.collection('posts')
                                   .where('userId', 'in', chunk)
                                   .where('expiryTime', '>', firebase.firestore.Timestamp.now())
                                   .orderBy('timestamp', 'desc'); // Ordering important for pagination consistency

                if (lastVisiblePost) { // Apply pagination only if starting from somewhere
                    currentChunkQuery = currentChunkQuery.startAfter(lastVisiblePost);
                }
                const chunkSnapshot = await currentChunkQuery.limit(postsToLoadPerScroll).get();

                chunkSnapshot.forEach(doc => {
                    // Prevent duplicates (especially if a user appears in multiple chunks or is followed/public)
                    if (!fetchedPosts.some(p => p.id === doc.id)) {
                         fetchedPosts.push({ id: doc.id, ...doc.data() });
                    }
                });

                if (!chunkSnapshot.empty) {
                    // Important: If we get posts from chunks, update lastVisiblePost
                    // However, directly using last doc of a chunk might break next query of general posts if it was ordered differently.
                    // A better approach is to collect ALL potential posts first, then sort/filter for pagination.
                    lastVisiblePost = chunkSnapshot.docs[chunkSnapshot.docs.length - 1];
                }
                if (fetchedPosts.length >= postsToLoadPerScroll) break; // Break early if we've gathered enough posts
            }
        }


        // Fill up remaining slots with general public posts if not enough from followed users
        if (fetchedPosts.length < postsToLoadPerScroll) {
             let generalPostsRef = db.collection('posts')
                                        .where('isPrivate', '==', false) // Only public posts for general feed
                                        .where('expiryTime', '>', firebase.firestore.Timestamp.now())
                                        .orderBy('expiryTime', 'desc')
                                        .orderBy('timestamp', 'desc');

             // Only apply pagination start after if NO followed posts were found OR if general feed is truly paginating
             if (!lastVisiblePost || fetchedPosts.length === 0) { // If starting fresh for general feed or if no followed posts from pagination
                 if (lastVisiblePost && fetchedPosts.length === 0) {
                     generalPostsRef = generalPostsRef.startAfter(lastVisiblePost);
                 }
                 // Else, if first load, it starts from beginning by default
             } else { // If we got some followed posts, general posts should complement
                 // It's tricky to continue precise pagination while combining. Simplification:
                 // Fetch general posts and let client filter duplicates
             }


             const generalPostsSnapshot = await generalPostsRef.limit(postsToLoadPerScroll - fetchedPosts.length).get();
             generalPostsSnapshot.forEach(doc => {
                 if (!fetchedPosts.some(p => p.id === doc.id)) { // Avoid duplicates from followed feed if user is also public
                    fetchedPosts.push({ id: doc.id, ...doc.data() });
                 }
             });
             if (!generalPostsSnapshot.empty) {
                lastVisiblePost = generalPostsSnapshot.docs[generalPostsSnapshot.docs.length - 1]; // Update for next query
             }
        }

        // If after combining, no new posts were found, reset for looping.
        if (fetchedPosts.length === 0 || fetchedPosts.every(p => postsFeed.querySelector(`[data-post-id="${p.id}"]`))) {
            if (postsFeed.children.length > 0) { // Only show toast if feed isn't completely empty already
                showToast("No more new posts. Looping feed...", 'info', 3000);
            }
            lastVisiblePost = null; // Reset to loop from the beginning on next load
            fetchingPosts = false;
            loadingSpinner.classList.add('hidden');
            if (postsFeed.innerHTML === '') { // If feed is completely empty
                 postsFeed.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No posts available.</p>';
            }
            return;
        }

        // Randomize the layout of new posts
        let postsToRenderInBatch = [];
        // Only add posts that are not already in the feed
        fetchedPosts.forEach(post => {
            if (!postsFeed.querySelector(`[data-post-id="${post.id}"]`)) {
                postsToRenderInBatch.push(post);
            }
        });


        // If it's a completely fresh load or explicit refresh, clear existing.
        // Otherwise, append.
        if (!lastVisiblePost && postsFeed.innerHTML.trim() !== '') { // If just initialized and content exists
            postsFeed.innerHTML = '';
        } else if (lastVisiblePost && postsFeed.innerHTML.trim() === '') { // If lastVisible was set but page is empty
             postsFeed.innerHTML = '';
        }


        // Apply random layout for the current batch of posts to render
        while (postsToRenderInBatch.length > 0) {
            const randomLayout = Math.floor(Math.random() * 3); // 0: vertical, 1: horizontal, 2: table

            if (randomLayout === 0 || postsToRenderInBatch.length < 4) { // Vertical or not enough for other layouts
                const post = postsToRenderInBatch.shift();
                renderPost(post, postsFeed, 'vertical-post');
            } else if (randomLayout === 1 && postsToRenderInBatch.length >= 2) { // Horizontal (2-3 posts)
                const numHorizontal = Math.min(postsToRenderInBatch.length, Math.floor(Math.random() * 2) + 2); // 2 or 3
                const horizontalContainer = document.createElement('div');
                horizontalContainer.className = 'horizontal-post-container';
                for (let i = 0; i < numHorizontal; i++) {
                    const post = postsToRenderInBatch.shift();
                    horizontalContainer.appendChild(createPostElement(post, 'horizontal-post'));
                }
                postsFeed.appendChild(horizontalContainer);
            } else if (randomLayout === 2 && postsToRenderInBatch.length >= 4) { // Table (4-6 posts)
                const numTable = Math.min(postsToLoadPerScroll.length, Math.floor(Math.random() * 3) + 4); // 4, 5, or 6
                const tableContainer = document.createElement('div');
                tableContainer.className = 'table-post-container';
                for (let i = 0; i < numTable; i++) {
                    const post = postsToRenderInBatch.shift();
                    tableContainer.appendChild(createPostElement(post, 'table-post'));
                }
                postsFeed.appendChild(tableContainer);
            } else { // Fallback to vertical if conditions not met
                const post = postsToRenderInBatch.shift();
                renderPost(post, postsFeed, 'vertical-post');
            }
        }

    } catch (error) {
        console.error("Error loading posts:", error);
        showToast("Error loading posts. Please refresh.", 'error');
    } finally {
        loadingSpinner.classList.add('hidden');
        fetchingPosts = false;
    }
}


// Immersive Feed (Snap Scrolling)
async function loadImmersiveFeedPosts() {
    if (fetchingImmersivePosts || !currentUser) return; // Must be logged in

    fetchingImmersivePosts = true;
    feedLoadingSpinner.classList.remove('hidden');

    try {
        let postsRef = db.collection('posts')
                         .where('expiryTime', '>', firebase.firestore.Timestamp.now())
                         .where('isPrivate', '==', false) // Only public posts in immersive feed
                         .orderBy('expiryTime', 'desc')
                         .orderBy('timestamp', 'desc');

        if (lastVisibleImmersivePost) {
            postsRef = postsRef.startAfter(lastVisibleImmersivePost);
        }

        const snapshot = await postsRef.limit(postsToLoadPerScroll).get();

        if (snapshot.empty) {
            showToast("No more immersive posts. Looping back...", 'info', 3000);
            lastVisibleImmersivePost = null; // Reset to loop from the beginning
            fetchingImmersivePosts = false;
            feedLoadingSpinner.classList.add('hidden');
            if (immersiveFeed.innerHTML === '') {
                immersiveFeed.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No immersive posts available.</p>';
            }
            return;
        }

        lastVisibleImmersivePost = snapshot.docs[snapshot.docs.length - 1];

        const fetchedPosts = [];
        snapshot.docs.forEach(doc => {
            fetchedPosts.push({ id: doc.id, ...doc.data() });
        });

        // Clear existing immersive feed if we looped or starting fresh
        if (immersiveFeed.innerHTML.includes('<p>No immersive posts available.</p>') || (snapshot.size < postsToLoadPerScroll) && immersiveFeed.children.length > 0) {
             immersiveFeed.innerHTML = '';
        } else if (!lastVisibleImmersivePost && immersiveFeed.innerHTML.trim() !== '') {
            immersiveFeed.innerHTML = ''; // Initial load but had some prior content
        }

        fetchedPosts.forEach(post => {
            if (!immersiveFeed.querySelector(`[data-post-id="${post.id}"]`)) { // Prevent rendering duplicates in a dynamic refresh scenario
                renderPost(post, immersiveFeed, 'immersive-post'); // Use immersive-post class
            }
        });


    } catch (error) {
        console.error("Error loading immersive posts:", error);
        showToast("Error loading immersive posts. Please refresh.", 'error');
    } finally {
        feedLoadingSpinner.classList.add('hidden');
        fetchingImmersivePosts = false;
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

    // Name also must be provided to proceed beyond registration-profile
    if (newName.length < 1 && editProfileModal.classList.contains('hidden')) { // This checks if it's the *initial* forced profile completion
         showToast("Display Name cannot be empty.", 'error');
         return;
    }

    try {
        const userDocRef = db.collection('users').doc(currentUser.uid);
        const userDoc = await userDocRef.get();
        const currentData = userDoc.data();

        // Check username uniqueness again before saving
        if (newUsername !== (currentData.username || '')) { // Compare with currentData.username (can be empty string)
            const usernameSnapshot = await db.collection('users').where('username', '==', newUsername).limit(1).get();
            if (!usernameSnapshot.empty) {
                showToast("Username already taken. Please choose another.", 'error');
                return;
            }
        }

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
            followersCount: currentData.followersCount !== undefined ? currentData.followersCount : 0,
            followingCount: currentData.followingCount !== undefined ? currentData.followingCount : 0,
            postCount: currentData.postCount !== undefined ? currentData.postCount : 0,
            monetizedViewsCount: currentData.monetizedViewsCount !== undefined ? currentData.monetizedViewsCount : 0,
            unmonetizedViewsCount: currentData.unmonetizedViewsCount !== undefined ? currentData.unmonetizedViewsCount : 0,
            earnedAmount: currentData.earnedAmount !== undefined ? currentData.earnedAmount : 0.00,
            reposts: currentData.reposts !== undefined ? currentData.reposts : []
        });

        // Update username and profile info in existing posts if changed
        if (newUsername !== (currentData.username || '') || finalProfilePicUrl !== (currentData.profilePicUrl || '') || newProfileLogo !== (currentData.profileLogo || '') || isPrivate !== currentData.isPrivate) {
            console.log("Updating username/profile info on posts...");
            const postsSnapshot = await db.collection('posts').where('userId', '==', currentUser.uid).get();
            const batch = db.batch();
            postsSnapshot.docs.forEach(doc => {
                const postRef = db.collection('posts').doc(doc.id);
                batch.update(postRef, {
                    username: newUsername,
                    profilePicUrl: finalProfilePicUrl,
                    userProfileLogo: finalProfilePicUrl ? "" : newProfileLogo, // Only use emoji if no direct pic URL
                    isPrivate: isPrivate // Update post's privacy if user's privacy changed
                });
            });
            await batch.commit();
            console.log("Post updates batch committed.");
        }

        editProfileModal.classList.add('hidden'); // This will now correctly hide the modal on save
        showToast("Profile updated successfully!", 'success');
        loadUserProfile(currentUser.uid); // Reload profile display
    } catch (error) {
        console.error("Error saving profile:", error);
        showToast("Failed to save profile. Please try again. " + (error.message || ''), 'error');
    }
});

// Follow/Unfollow Logic
followUserBtn.addEventListener('click', () => handleFollow(currentProfileViewingId));
unfollowUserBtn.addEventListener('click', () => handleUnfollow(currentProfileViewingId));

async function handleFollow(targetUserId) {
    if (!currentUser || currentUser.uid === targetUserId) {
        showToast("Cannot follow yourself or not logged in.", 'info');
        return;
    }

    try {
        const currentUserRef = db.collection('users').doc(currentUser.uid);
        const targetUserRef = db.collection('users').doc(targetUserId);

        await db.runTransaction(async (transaction) => {
            const currentUserDoc = await transaction.get(currentUserRef);
            const targetUserDoc = await transaction.get(targetUserRef);

            if (!currentUserDoc.exists || !targetUserDoc.exists) {
                throw "User not found.";
            }

            const currentUserData = currentUserDoc.data();
            const targetUserData = targetUserDoc.data();

            if (currentUserData.following && currentUserData.following.includes(targetUserId)) {
                showToast("Already following.", 'info');
                return; // Already following, no action needed
            }

            // If target user is private, cannot follow directly. Need a request system.
            if (targetUserData.isPrivate) {
                showToast("This account is private. Cannot follow directly.", 'info', 4000);
                throw "Private account."; // Stop transaction
            }


            // Update current user's following list and count
            transaction.update(currentUserRef, {
                following: firebase.firestore.FieldValue.arrayUnion(targetUserId),
                followingCount: firebase.firestore.FieldValue.increment(1)
            });

            // Update target user's followers list and count
            transaction.update(targetUserRef, {
                followers: firebase.firestore.FieldValue.arrayUnion(currentUser.uid),
                followersCount: firebase.firestore.FieldValue.increment(1)
            });
        });

        showToast("Followed user!", 'success');
        followUserBtn.classList.add('hidden');
        unfollowUserBtn.classList.remove('hidden');
        loadUserProfile(currentProfileViewingId); // Refresh counts
    } catch (error) {
        console.error("Error following user:", error);
        if (error === "Private account.") {
             // Toast already handled above.
        } else {
            showToast(`Failed to follow: ${error.message || error}`, 'error');
        }
    }
}

async function handleUnfollow(targetUserId) {
    if (!currentUser || currentUser.uid === targetUserId) {
        showToast("Cannot unfollow yourself or not logged in.", 'info');
        return;
    }

    try {
        const currentUserRef = db.collection('users').doc(currentUser.uid);
        const targetUserRef = db.collection('users').doc(targetUserId);

        await db.runTransaction(async (transaction) => {
            const currentUserDoc = await transaction.get(currentUserRef);
            const targetUserDoc = await transaction.get(targetUserRef);

            if (!currentUserDoc.exists || !targetUserDoc.exists) {
                throw "User not found.";
            }

            const currentUserData = currentUserDoc.data();
            if (!currentUserData.following || !currentUserData.following.includes(targetUserId)) {
                showToast("Not currently following.", 'info');
                return; // Not following, no action needed
            }

            // Update current user's following list and count
            transaction.update(currentUserRef, {
                following: firebase.firestore.FieldValue.arrayRemove(targetUserId),
                followingCount: firebase.firestore.FieldValue.increment(-1)
            });

            // Update target user's followers list and count
            transaction.update(targetUserRef, {
                followers: firebase.firestore.FieldValue.arrayRemove(currentUser.uid),
                followersCount: firebase.firestore.FieldValue.increment(-1)
            });
        });

        showToast("Unfollowed user.", 'info');
        followUserBtn.classList.remove('hidden');
        unfollowUserBtn.classList.add('hidden');
        loadUserProfile(currentProfileViewingId); // Refresh counts
    } catch (error) {
        console.error("Error unfollowing user:", error);
        showToast(`Failed to unfollow: ${error.message || error}`, 'error');
    }
}

// Remove Follower (Only for current user's profile)
async function removeFollower(followerId) {
    if (!currentUser) return;

    try {
        const currentUserRef = db.collection('users').doc(currentUser.uid);
        const followerUserRef = db.collection('users').doc(followerId);

        await db.runTransaction(async (transaction) => {
            const currentUserDoc = await transaction.get(currentUserRef);
            const followerUserDoc = await transaction.get(followerUserRef);

            if (!currentUserDoc.exists || !followerUserDoc.exists) {
                throw "User not found.";
            }

            const currentUserData = currentUserDoc.data();
            if (!currentUserData.followers || !currentUserData.followers.includes(followerId)) {
                showToast("This user is not a follower.", 'info');
                return;
            }

            // Remove from current user's followers list and count
            transaction.update(currentUserRef, {
                followers: firebase.firestore.FieldValue.arrayRemove(followerId),
                followersCount: firebase.firestore.FieldValue.increment(-1)
            });

            // Remove current user from follower's following list and count
            transaction.update(followerUserRef, {
                following: firebase.firestore.FieldValue.arrayRemove(currentUser.uid),
                followingCount: firebase.firestore.FieldValue.increment(-1)
            });
        });

        showToast("Follower removed.", 'info');
        // Refresh the follow list modal if it's open
        if (!followListModal.classList.contains('hidden') && followListTitle.textContent === 'Followers') {
            showFollowList(currentUser.uid, 'followers');
        }
        loadUserProfile(currentUser.uid); // Refresh counts on main profile
    } catch (error) {
        console.error("Error removing follower:", error);
        showToast(`Failed to remove follower: ${error.message || error}`, 'error');
    }
}


// View Followers/Following Lists
document.querySelectorAll('.clickable-stat').forEach(stat => {
    stat.addEventListener('click', (e) => {
        const statType = e.currentTarget.dataset.stat; // 'followers' or 'following'
        const userId = currentProfileViewingId; // The user whose profile is currently open
        if (userId) {
            showFollowList(userId, statType);
        }
    });
});

async function showFollowList(userId, type) {
    followListContent.innerHTML = '<div class="loader" style="margin: 20px auto;"></div>';
    followListTitle.textContent = type === 'followers' ? 'Followers' : 'Following';
    followListModal.classList.remove('hidden');

    try {
        const userDoc = await db.collection('users').doc(userId).get();
        if (!userDoc.exists) {
            followListContent.innerHTML = '<p style="text-align: center;">User not found.</p>';
            return;
        }

        const userRefs = userDoc.data()[type] || []; // Array of UIDs
        if (userRefs.length === 0) {
            followListContent.innerHTML = `<p style="text-align: center;">No ${type} found.</p>`;
            return;
        }

        const usersData = [];
        for (const uid of userRefs) {
            const refDoc = await db.collection('users').doc(uid).get();
            if (refDoc.exists) {
                usersData.push({ id: refDoc.id, ...refDoc.data() });
            }
        }

        usersData.sort((a,b) => (a.username || '').localeCompare(b.username || '')); // Sort by username


        followListContent.innerHTML = '';
        for (const user of usersData) {
            const userItem = document.createElement('li');
            userItem.className = 'search-user-item';
            userItem.dataset.userId = user.id; // Store user ID

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
            if (currentUser.uid === user.id) { // If it's the current user themselves
                actionBtn.classList.add('hidden');
            } else if (type === 'followers' && userId === currentUser.uid) { // If viewing OWN followers list
                actionBtn.textContent = 'Remove';
                actionBtn.classList.add('danger-btn');
                actionBtn.classList.remove('primary-btn');
                actionBtn.addEventListener('click', async (e) => {
                    e.stopPropagation();
                    await removeFollower(user.id);
                });
            } else { // Standard follow/unfollow for other users in the list
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
                    e.stopPropagation();
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
            }

            // Make the entire list item clickable to open profile
            userItem.addEventListener('click', () => {
                followListModal.classList.add('hidden'); // Close modal
                openUserProfile(user.id); // Open clicked user's profile
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

// Navigate to another user's profile
function openUserProfile(userId) {
    if (userId === currentUser.uid) {
        showScreen('profile-screen'); // If clicking on own profile, just navigate
        loadUserProfile(currentUser.uid);
    } else {
        showScreen('profile-screen');
        loadUserProfile(userId); // Load specific user's profile
    }
}

// --- Messaging ---
messageUserBtn.addEventListener('click', () => {
    if (!currentUser || !currentProfileViewingId) { // Check both logged in and a target profile
        showToast("Select a user to message or log in first.", 'info');
        return;
    }
    openChatWindow(currentProfileViewingId);
});

async function loadRecentChats() {
    if (!currentUser) return;
    recentChatsList.innerHTML = '<div class="loader" style="margin: 20px auto;"></div>';

    try {
        // Listen for messages involving the current user
        db.collection('messages')
            .where('participants', 'array-contains', currentUser.uid)
            .orderBy('timestamp', 'desc')
            .onSnapshot(async (snapshot) => {
                const updatedChats = {};
                snapshot.docs.forEach(doc => {
                    const data = doc.data();
                    let partnerId;
                    if (data.senderId === currentUser.uid) {
                        partnerId = data.receiverId;
                    } else {
                        partnerId = data.senderId;
                    }

                    if (!updatedChats[partnerId] || data.timestamp.toMillis() > updatedChats[partnerId].timestamp) {
                        updatedChats[partnerId] = {
                            partnerId: partnerId,
                            lastMessage: data.content,
                            timestamp: data.timestamp.toMillis()
                        };
                    }
                });

                const chatPartners = Object.values(updatedChats).sort((a, b) => b.timestamp - a.timestamp);

                if (chatPartners.length === 0) {
                    recentChatsList.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No recent chats.</p>';
                    return;
                }

                recentChatsList.innerHTML = '';
                for (const chat of chatPartners) {
                    const partnerDoc = await db.collection('users').doc(chat.partnerId).get();
                    if (partnerDoc.exists) {
                        const partnerData = partnerDoc.data();
                        const chatItem = document.createElement('li');
                        chatItem.className = 'chat-item';
                        chatItem.dataset.userId = partnerData.uid;

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
                        chatItem.addEventListener('click', () => openChatWindow(partnerData.uid));
                        recentChatsList.appendChild(chatItem);
                    }
                }
            }, error => {
                console.error("Error loading recent chats listener:", error);
                showToast("Error loading chats.", 'error');
                recentChatsList.innerHTML = '<p style="text-align: center; color: red;">Error loading chats.</p>';
            });
    } catch (error) {
        console.error("Error setting up recent chats listener:", error);
        showToast("Error setting up chat listener.", 'error');
    }
}


async function openChatWindow(partnerId) {
    if (!currentUser) return;
    currentChatPartnerId = partnerId;
    messageListContainer.classList.add('hidden');
    chatWindowContainer.classList.remove('hidden');
    chatMessages.innerHTML = '<div class="loader" style="margin: 20px auto;"></div>';

    try {
        const partnerDoc = await db.collection('users').doc(partnerId).get();
        if (partnerDoc.exists) {
            chatPartnerUsername.textContent = `@${partnerDoc.data().username}`;

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

        // Real-time listener for messages between these two users
        db.collection('messages')
            .where('participants', 'array-contains', currentUser.uid) // Filter to messages involving current user
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => {
                chatMessages.innerHTML = ''; // Clear existing messages
                snapshot.docs.forEach(doc => {
                    const message = doc.data();
                    // Filter messages relevant *only* to the current chat partner in the UI
                    const isRelevant = (message.senderId === currentUser.uid && message.receiverId === partnerId) ||
                                       (message.senderId === partnerId && message.receiverId === currentUser.uid);
                    // Client-side expiry check for display only (Firestore rules handle backend expiry)
                    const isWithin12Hours = (Date.now() - message.timestamp.toMillis()) < (12 * 60 * 60 * 1000);

                    if (isRelevant && isWithin12Hours) {
                        const messageBubble = document.createElement('div');
                        messageBubble.className = `message-bubble ${message.senderId === currentUser.uid ? 'right' : 'left'}`;
                        messageBubble.textContent = message.content;
                        chatMessages.appendChild(messageBubble);
                    }
                });
                chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
            }, error => {
                console.error("Error getting messages:", error);
                chatMessages.innerHTML = '<p style="text-align: center; color: red;">Error loading messages.</p>';
                showToast("Error loading messages.", 'error');
            });

        // Long press emoji picker for chat messages (similar to posts)
        const emojiPickerChat = chatWindowContainer.querySelector('.emoji-picker-chat');
        messageInput.addEventListener('touchstart', (e) => {
            clearTimeout(longPressTimer);
            longPressTimer = setTimeout(() => {
                emojiPickerChat.classList.remove('hidden');
            }, 800);
        }, { passive: true }); // Use passive to avoid blocking scroll

        messageInput.addEventListener('touchend', () => {
            clearTimeout(longPressTimer);
        });

        // Hide emoji picker if clicking outside
        const hideEmojiPickerChat = (e) => {
            if (!emojiPickerChat.contains(e.target) && !messageInput.contains(e.target) && !emojiPickerChat.classList.contains('hidden')) {
                emojiPickerChat.classList.add('hidden');
            }
        };
        document.addEventListener('click', hideEmojiPickerChat);
        // Important: Detach previous click listener when opening a new chat window to prevent duplicates
        // (This would need a proper cleanup mechanism in a production app for each listener)


        emojiPickerChat.querySelectorAll('.emoji-option').forEach(emojiOption => {
            emojiOption.addEventListener('click', (e) => {
                const selectedEmoji = e.target.dataset.emoji;
                messageInput.value += ` ${selectedEmoji} `; // Append emoji to input
                emojiPickerChat.classList.add('hidden');
                messageInput.focus();
            });
        });

    } catch (error) {
        console.error("Error opening chat window:", error);
        showToast("Failed to open chat. Try again.", 'error');
    }
}

backToChatsBtn.addEventListener('click', () => {
    messageListContainer.classList.remove('hidden');
    chatWindowContainer.classList.add('hidden');
    currentChatPartnerId = null;
    // Potentially detach previous message listener to avoid memory leaks if you have multiple chat windows
    // (This requires storing the listener's unsubscribe function, more advanced Firebase usage)
});

sendMessageBtn.addEventListener('click', async () => {
    if (!currentUser || !currentChatPartnerId) {
        showToast("You need to be logged in and select a recipient.", 'error');
        return;
    }

    const messageContent = messageInput.value.trim();
    if (messageContent === '') return;

    try {
        await db.collection('messages').add({
            senderId: currentUser.uid,
            receiverId: currentChatPartnerId,
            content: messageContent,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            participants: [currentUser.uid, currentChatPartnerId], // For easier querying
            read: false // Can be used for read receipts
        });

        messageInput.value = ''; // Clear input
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
        showToast("Message sent!", 'success');

    } catch (error) {
        console.error("Error sending message:", error);
        if (error.code === 'permission-denied' || error.message.includes('Missing or insufficient permissions')) {
            showToast("Error sending message: Missing or insufficient permissions. Check Firebase rules.", 'error', 5000);
        } else {
            showToast("Failed to send message. Try again.", 'error');
        }
    }
});


// --- Comments Functionality ---
function openCommentsModal(postId) {
    if (!currentUser) {
        showToast("Please log in to view/add comments.", 'info');
        return;
    }
    currentPostIdForComments = postId;
    commentsModal.classList.remove('hidden');
    commentsList.innerHTML = '<div class="loader" style="margin: 20px auto;"></div>';
    commentsModalTitle.textContent = 'Comments';

    // Real-time listener for comments on this post
    db.collection('comments')
        .where('postId', '==', postId)
        .orderBy('timestamp', 'asc')
        .onSnapshot(async (snapshot) => {
            commentsList.innerHTML = ''; // Clear existing comments
            if (snapshot.empty) {
                commentsList.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No comments yet. Be the first to comment!</p>';
                return;
            }

            for (const doc of snapshot.docs) {
                const commentData = doc.data();
                const commentUserDoc = await db.collection('users').doc(commentData.userId).get();
                const username = commentUserDoc.exists ? commentUserDoc.data().username : 'Deleted User';

                const commentItem = document.createElement('div');
                commentItem.className = 'comment-item';
                commentItem.innerHTML = `
                    <strong>@${username}</strong>: ${commentData.content}
                    <small>${new Date(commentData.timestamp.toMillis()).toLocaleString()}</small>
                `;
                commentsList.appendChild(commentItem);
            }
            commentsList.scrollTop = commentsList.scrollHeight; // Scroll to bottom
        }, error => {
            console.error("Error loading comments:", error);
            commentsList.innerHTML = '<p style="text-align: center; color: red;">Error loading comments.</p>';
            showToast("Error loading comments.", 'error');
        });
}

addCommentBtn.addEventListener('click', async () => {
    if (!currentUser || !currentPostIdForComments) return;

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

        // Increment comment count on the post
        await db.collection('posts').doc(currentPostIdForComments).update({
            commentCount: firebase.firestore.FieldValue.increment(1)
        });

        newCommentInput.value = ''; // Clear input
        showToast("Comment added!", 'success');
    } catch (error) {
        console.error("Error adding comment:", error);
        showToast("Failed to add comment. Try again.", 'error');
    }
});

closeCommentsModalBtn.addEventListener('click', () => {
    commentsModal.classList.add('hidden');
    currentPostIdForComments = null;
});


// --- Search Functionality ---
searchBtn.addEventListener('click', () => performSearch());
searchQueryInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

async function performSearch() {
    const query = searchQueryInput.value.trim().toLowerCase();
    searchUserList.innerHTML = '';
    searchPostList.innerHTML = '';
    noSearchResults.classList.add('hidden');

    if (query === '') {
        showToast("Please enter a search query.", 'info');
        return;
    }

    let foundResults = false;

    // Search Users
    try {
        const userSnapshot = await db.collection('users')
            .where('username', '>=', query)
            .where('username', '<=', query + '\uf8ff')
            .limit(10)
            .get();

        if (!userSnapshot.empty) {
            foundResults = true;
            userSnapshot.docs.forEach(doc => {
                const userData = { id: doc.id, ...doc.data() };
                const userItem = document.createElement('li');
                userItem.className = 'search-user-item';
                userItem.dataset.userId = userData.id;

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
                if (currentUser.uid === userData.id) {
                    followBtn.classList.add('hidden');
                } else {
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
                    e.stopPropagation();
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
                userItem.addEventListener('click', () => openUserProfile(userData.id));
            });
        }
    } catch (error) {
        console.error("Error searching users:", error);
        showToast("Error searching users.", 'error');
    }

    // Search Posts (by content, basic matching)
    try {
        const postSnapshot = await db.collection('posts')
            .where('expiryTime', '>', firebase.firestore.Timestamp.now())
            .orderBy('expiryTime', 'desc')
            .limit(10)
            .get();

        postSnapshot.docs.forEach(doc => {
            const postData = { id: doc.id, ...doc.data() };
            // Security rules handle exact read permissions based on privacy.
            // Client-side simply attempts to match content.
            if (postData.content && postData.content.toLowerCase().includes(query)) {
                foundResults = true;
                searchPostList.appendChild(createPostElement(postData));
            }
        });
    } catch (error) {
        console.error("Error searching posts:", error);
        showToast("Error searching posts.", 'error');
    }

    if (!foundResults) {
        noSearchResults.classList.remove('hidden');
    }
}

// --- Post Options (Report/Delete/Repost) ---
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
            status: 'pending'
        });
        showToast("Post reported successfully. We will review it.", 'info');
    } catch (error) {
        console.error("Error reporting post:", error);
        showToast("Failed to report post.", 'error');
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
            reposts: firebase.firestore.FieldValue.arrayUnion(postId)
        });
        showToast("Post reposted to your profile!", 'success');
    } catch (error) {
        console.error("Error reposting:", error);
        showToast("Failed to repost. Try again.", 'error');
    }
}


async function handleDeletePost(postId, postElement, isMonetized) {
    if (!currentUser) return;

    try {
        const postRef = db.collection('posts').doc(postId);
        const postDoc = await postRef.get();

        if (postDoc.exists && postDoc.data().userId === currentUser.uid) {
            if (confirm("Are you sure you want to delete this post? This cannot be undone.")) {
                // Delete post and associated data (likes, reactions, comments)
                await db.runTransaction(async (transaction) => {
                    transaction.delete(postRef);

                    // Delete comments related to this post (client-side cascade is not ideal, Cloud Functions better)
                    const commentsSnapshot = await db.collection('comments').where('postId', '==', postId).get();
                    commentsSnapshot.docs.forEach(commentDoc => {
                        transaction.delete(db.collection('comments').doc(commentDoc.id));
                    });

                    // Delete post views record
                    const postViewsRef = db.collection('postViews').doc(postId);
                    const postViewsDoc = await transaction.get(postViewsRef);
                    if (postViewsDoc.exists) { // Only attempt delete if it exists
                         transaction.delete(postViewsRef);
                    }

                    // Decrement user's post count
                    const userRef = db.collection('users').doc(currentUser.uid);
                    const userDoc = await transaction.get(userRef);
                    if (userDoc.exists) {
                        let updates = {
                            postCount: firebase.firestore.FieldValue.increment(-1)
                        };
                        transaction.update(userRef, updates);
                    }
                });

                postElement.remove(); // Remove from UI
                showToast("Post deleted successfully.", 'success');
            }
        } else {
            showToast("You can only delete your own posts.", 'error');
        }
    } catch (error) {
        console.error("Error deleting post:", error);
        showToast("Failed to delete post. Try again.", 'error');
    }
}

// --- Text-to-Speech ---
function handleSpeakPost(text) {
    if (!('speechSynthesis' in window)) {
        showToast("Your browser does not support text-to-speech.", 'error');
        return;
    }

    if (synth.speaking) {
        synth.cancel(); // Stop current speech if any
        if (currentSpeechUtterance && currentSpeechUtterance.text === text) {
            currentSpeechUtterance = null; // Toggle off if it's the same text
            showToast("Speech stopped.", 'info');
            return;
        }
    }

    // Remove HTML tags for cleaner speech
    const cleanText = text.replace(/<[^>]*>/g, '').replace(/\[.*?\]\(.*?\)/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US'; // Default language, you can allow user to select
    utterance.pitch = 1;
    utterance.rate = 1;
    synth.speak(utterance);
    currentSpeechUtterance = utterance; // Store the current utterance

    utterance.onend = () => {
        currentSpeechUtterance = null;
    };
    showToast("Speaking post...", 'info');
}

// --- Post Translation ---
function handleTranslatePost(text) {
    if (!currentUser) {
        showToast("Please log in to translate posts.", 'info');
        return;
    }
    // This requires a translation API (e.g., Google Cloud Translation API)
    // Client-side translation without an API is limited or requires large libraries.
    // For demonstration, we'll just show a message.
    showToast("Translation feature coming soon! (Requires external API integration)", 'info', 4000);

    // Example of how you *might* call a Cloud Function for translation:
    /*
    firebase.functions().httpsCallable('translateText')({ text: text, targetLanguage: 'hi' })
        .then(result => {
            console.log('Translated text:', result.data.translatedText);
            showToast(`Translated to Hindi: ${result.data.translatedText}`, 'info', 5000);
            // Update post content in UI or show in a separate modal
        })
        .catch(error => {
            console.error("Translation error:", error);
            showToast("Failed to translate post.", 'error');
        });
    */
}

// --- Earnings Screen Logic ---
async function loadEarningsPage() {
    if (!currentUser) {
        showToast("Please log in to view earnings.", 'info');
        return;
    }
    try {
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        if (userDoc.exists) {
            const userData = userDoc.data();
            const monetizedViews = userData.monetizedViewsCount || 0;
            const unmonetizedViews = userData.unmonetizedViewsCount || 0;
            const earnedAmount = userData.earnedAmount || 0.00;

            totalMonetizedViewsSpan.textContent = formatNumber(monetizedViews);
            totalUnmonetizedViewsSpan.textContent = formatNumber(unmonetizedViews);
            estimatedEarningsSpan.textContent = `${earnedAmount.toFixed(2)} $`;

            const WITHDRAWAL_THRESHOLD = 100000; // 1 Lakh views
            if (monetizedViews >= WITHDRAWAL_THRESHOLD) { // Withdrawal threshold
                withdrawBtn.disabled = false;
                withdrawBtn.classList.add('primary-btn');
                withdrawBtn.classList.remove('secondary-btn');
                withdrawalStatusDiv.classList.add('hidden');
            } else {
                withdrawBtn.disabled = true;
                withdrawBtn.classList.add('secondary-btn');
                withdrawBtn.classList.remove('primary-btn');
                withdrawalStatusDiv.classList.remove('hidden');
                withdrawalStatusDiv.textContent = `You need ${formatNumber(WITHDRAWAL_THRESHOLD)} monetized views to withdraw. You have ${formatNumber(monetizedViews)}.`;
            }
        }
    } catch (error) {
        console.error("Error loading earnings:", error);
        showToast("Error loading earnings. Try again.", 'error');
    }
}

withdrawBtn.addEventListener('click', () => {
    if (!currentUser) return;
    withdrawalModal.classList.remove('hidden');
    withdrawalDetailsReview.classList.add('hidden'); // Hide review section initially

    const monetizedViews = parseInt(totalMonetizedViewsSpan.textContent.replace(/[^0-9.]/g, '')) || 0; // Remove non-numeric, allow dot for thousands if used. Convert to Int.
    withdrawalViewsDisplay.textContent = formatNumber(monetizedViews);

    // Reset input fields
    withdrawalMethodSelect.value = 'upi';
    withdrawalIdLabel.textContent = 'UPI ID:';
    withdrawalIdInput.value = '';
    withdrawalIdInput.placeholder = 'Enter UPI ID';
    confirmWithdrawalBtn.classList.remove('hidden');
});

withdrawalMethodSelect.addEventListener('change', (e) => {
    if (e.target.value === 'upi') {
        withdrawalIdLabel.textContent = 'UPI ID:';
        withdrawalIdInput.placeholder = 'Enter UPI ID (e.g., example@bank)';
    } else {
        withdrawalIdLabel.textContent = 'PayPal Email:';
        withdrawalIdInput.placeholder = 'Enter PayPal Email';
    }
});

confirmWithdrawalBtn.addEventListener('click', () => {
    const method = withdrawalMethodSelect.value;
    const id = withdrawalIdInput.value.trim();
    const views = withdrawalViewsDisplay.textContent;

    if (!id) { // Check for empty string correctly
        showToast("Please enter your UPI ID or PayPal Email.", 'error');
        return;
    }

    reviewMethodSpan.textContent = method === 'upi' ? 'UPI' : 'PayPal';
    reviewIdSpan.textContent = id;
    reviewViewsSpan.textContent = views;

    withdrawalDetailsReview.classList.remove('hidden');
    confirmWithdrawalBtn.classList.add('hidden'); // Hide confirm button
});

editWithdrawalBtn.addEventListener('click', () => {
    withdrawalDetailsReview.classList.add('hidden');
    confirmWithdrawalBtn.classList.remove('hidden'); // Show confirm button again
});

sendWithdrawalRequestBtn.addEventListener('click', async () => {
    if (!currentUser) return;

    const method = withdrawalMethodSelect.value;
    const id = withdrawalIdInput.value.trim();
    // Re-parse the current monetized views directly from data for accuracy before sending request
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
        // IMPORTANT: Here you would typically call a Firebase Cloud Function to handle this
        // securely, as direct client-side email sending is not secure or feasible.
        // For this demo, we'll simulate the request and save to Firestore.
        // The Cloud Function would then trigger an email to apknixy@gmail.com

        // --- Simulated Backend Action for Demo ---
        console.log("Simulating withdrawal request submission...");
        console.log({
            userId: currentUser.uid,
            username: myProfileUsername.textContent,
            method: method,
            id: id,
            views: currentMonetizedViews,
            amount: estimatedEarnings,
            timestamp: new Date().toISOString()
        });

        // Store request in Firestore for admin to see
        await db.collection('withdrawalRequests').add({
            userId: currentUser.uid,
            username: myProfileUsername.textContent.replace('@', ''),
            method: method,
            id: id,
            monetizedViewsAtRequest: currentMonetizedViews,
            estimatedAmount: estimatedEarnings,
            requestTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'pending' // pending, approved, rejected, completed
        });

        // Reset user's monetized views and earnings AFTER the request is successfully lodged
        // (In a real app, this reset would happen AFTER the admin marks the payment as "completed" in the admin panel,
        // often through a Cloud Function triggered by the admin action)
        await db.collection('users').doc(currentUser.uid).update({
            monetizedViewsCount: 0,
            earnedAmount: 0.00
        });

        withdrawalModal.classList.add('hidden');
        showToast("Withdrawal request sent! You will receive payment in 1-15 business days.", 'success', 8000);
        loadEarningsPage(); // Refresh earnings
    } catch (error) {
        console.error("Error sending withdrawal request:", error);
        showToast("Failed to send withdrawal request. Try again. " + (error.message || ''), 'error');
    }
});

cancelWithdrawalBtn.addEventListener('click', () => {
    withdrawalModal.classList.add('hidden');
});
```

---

### **`firebase.rules` (Minor update, if needed - your last error was in `script.js` not rules)**

`Firebase.rules` में मुझे पिछले round में बताई गई Line 156-159 की कोई सीधे `Unexpected` parenthesis error नहीं दिख रही है क्योंकि वो `script.js` की समस्या थी। हालांकि, मैंने `reports` collection के `create` rules में एक मामूली टाइपो ठीक किया है (request.auth.data.reportedBy -> request.resource.data.reportedBy)।

**यह महत्वपूर्ण है कि आप इस version को deploy करें ताकि यह Admin UID के साथ-साथ latest debugging और validation logic को प्रतिबिंबित करे।**

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Helper function for admin role check
    // REPLACE 'YOUR_ADMIN_UID_HERE' with the actual UID of your designated admin user from Firebase Auth
    function isAdmin() {
      return request.auth.uid == "TK8Cpv0eW7aanAiSDe6w5YAv1tD2"; // <---- IMPORTANT: Admin UID provided: TK8Cpv0eW7aanAiSDe6w5YAv1tD2
    }

    // Helper function to check if a document exists.
    function userExists(userId) {
        return exists(/databases/$(database)/documents/users/$(userId));
    }
    
    // --- Users Collection ---
    // Users can create their own profile, and read profiles of any authenticated user.
    // Users can update specific fields of their own. Admin can delete.
    match /users/{userId} {
      // Read access: Any authenticated user can read user profiles.
      // Private profiles require the requesting user to be following.
      allow read: if request.auth != null && (
        resource.data.isPrivate == false ||
        request.auth.uid == userId ||
        // Check if the current user exists and is following this resource's owner
        (userExists(request.auth.uid) && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.following.hasAny([userId]))
      );

      // Create access: A user can create their own document on signup.
      // Initial values must be strict to prevent malicious data.
      allow create: if request.auth != null
                    && request.auth.uid == userId
                    && request.resource.data.keys().hasAll(['username', 'email', 'createdAt', 'bio', 'followers', 'following', 'followersCount', 'followingCount', 'postCount', 'monetizedViewsCount', 'unmonetizedViewsCount', 'earnedAmount', 'reposts', 'isPrivate', 'name', 'whatsapp', 'instagram', 'profileLogo', 'profilePicUrl', 'uid']) // Ensure all required fields are present and initialize correctly
                    && request.resource.data.username is string && request.resource.data.username.size() >= 1 && request.resource.data.username.size() <= 30
                    && request.resource.data.username.matches("^[a-zA-Z0-9_.]+$") // Valid username characters
                    && request.resource.data.email == request.auth.token.email
                    && request.resource.data.uid == request.auth.uid
                    && request.resource.data.get('followersCount', 0) == 0
                    && request.resource.data.get('followingCount', 0) == 0
                    && request.resource.data.get('postCount', 0) == 0
                    && request.resource.data.get('monetizedViewsCount', 0) == 0
                    && request.resource.data.get('unmonetizedViewsCount', 0) == 0
                    && request.resource.data.get('earnedAmount', 0.0) == 0.0
                    && request.resource.data.get('reposts', []).size() == 0 // Reposts is empty array
                    && request.resource.data.isPrivate is bool // Should be bool
                    && (request.resource.data.profilePicUrl is string || request.resource.data.profilePicUrl == null || request.resource.data.profilePicUrl == '')
                    && (request.resource.data.profileLogo is string || request.resource.data.profileLogo == null || request.resource.data.profileLogo == '')
                    && request.resource.data.name is string // Default or empty string
                    && request.resource.data.bio is string // Default or empty string
                    && request.resource.data.whatsapp is string // Default or empty string
                    && request.resource.data.instagram is string // Default or empty string
                    && request.resource.data.createdAt is timestamp;


      // Update access: Users can update their own profile, with specific field validations.
      allow update: if request.auth != null && request.auth.uid == userId && (
        // 1. Username field validation (must be string, valid format, unique if changed)
        (request.resource.data.username is string && request.resource.data.username.size() >= 1 && request.resource.data.username.size() <= 30 &&
           request.resource.data.username.matches("^[a-zA-Z0-9_.]+$") &&
           (resource.data.username == request.resource.data.username || !exists(get(/databases/$(database)/documents/users).where('username', '==', request.resource.data.username).limit(1)))
        )
        // 2. Other simple string/boolean fields can be updated (type checking ensures data validity)
        && ((request.resource.data.get('name', null) is string) || (request.resource.data.name == null)) // name can be string or null
        && ((request.resource.data.get('bio', null) is string) || (request.resource.data.bio == null))
        && ((request.resource.data.get('whatsapp', null) is string) || (request.resource.data.whatsapp == null))
        && ((request.resource.data.get('instagram', null) is string) || (request.resource.data.instagram == null))
        && ((request.resource.data.get('profileLogo', null) is string) || (request.resource.data.profileLogo == null))
        && ((request.resource.data.get('profilePicUrl', null) is string) || (request.resource.data.profilePicUrl == null))
        && (request.resource.data.isPrivate is bool)

        // 3. System-controlled counters. These are generally managed via specific write ops.
        // Client can only cause them to increase (+1) or decrease (-1 for postCount on deletion)
        && (request.resource.data.postCount >= resource.data.postCount -1) // allows decrease of 1 on delete or stays same/increase
        && (request.resource.data.monetizedViewsCount >= resource.data.monetizedViewsCount) // allows only increases
        && (request.resource.data.unmonetizedViewsCount >= resource.data.unmonetizedViewsCount) // allows only increases
        && (request.resource.data.earnedAmount >= resource.data.earnedAmount - 0.001) // allows increases for earned amount (float comparison tolerance)

        // 4. Reposts array. Client can only add or remove elements, not overwrite the whole list arbitrarily.
        // Assuming client uses FieldValue.arrayUnion / arrayRemove.
        && (request.resource.data.reposts is list)

        // 5. Followers/Following lists: Updated through separate transactional logic by `arrayUnion`/`arrayRemove`.
        // Validate type for safe access.
        && (request.resource.data.following is list)
        && (request.resource.data.followers is list)
      );


      // Deny direct deletion of user profiles from client-side for security.
      allow delete: if isAdmin();
    }


    // --- Posts Collection ---
    // Anyone authenticated can read active posts. Users can create, update, and delete their own posts.
    // Other users can like/react to posts.
    match /posts/{postId} {
      // Read access: Allow read if user is authenticated AND post is not expired AND (post is public OR requesting user is owner OR requesting user is follower if private)
      allow read: if request.auth != null
                  && request.time < resource.data.expiryTime // Post must not be expired (24-hour limit in this case)
                  && (resource.data.isPrivate == false || // Public post can always be read
                      request.auth.uid == resource.data.userId || // Owner of private post can always read
                      // If private, reader must exist and be following the owner of this post
                      (userExists(request.auth.uid) && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.following.hasAny([resource.data.userId]))
                    );


      // Create access: Only post owner can create, with initial values locked down and required fields.
      allow create: if request.auth != null
                    && request.resource.data.userId == request.auth.uid
                    && request.resource.data.get('likes', 0) == 0
                    && request.resource.data.get('views', 0) == 0
                    && request.resource.data.get('commentCount', 0) == 0
                    && request.resource.data.get('reactions', {}).size() == 0 // Check if map is empty
                    && request.resource.data.get('userReactions', {}).size() == 0 // Check if map is empty
                    && request.resource.data.username is string && request.resource.data.username.size() > 0 // Username required
                    && (request.resource.data.userProfileLogo is string || request.resource.data.userProfileLogo == '') // Either logo class or empty
                    && (request.resource.data.profilePicUrl is string || request.resource.data.profilePicUrl == '') // Either URL or empty
                    && request.resource.data.content is string && request.resource.data.content.size() >= 60 && request.resource.data.content.size() <= 10000
                    && request.resource.data.category is string
                    && request.resource.data.isMonetized is bool
                    && request.resource.data.isPrivate is bool // Post inherits privacy from user profile at creation
                    && request.resource.data.timestamp is timestamp
                    && request.resource.data.expiryTime is timestamp;


      // Update access: Strict rules for specific updates. Content is largely immutable once created.
      allow update: if request.auth != null && (
        // Scenario 1: Post owner updates their own post. Limited fields only.
        (request.auth.uid == resource.data.userId &&
         // Check that ONLY allowed fields are being modified by the owner.
         request.resource.data.keys().hasOnly(['commentCount', 'isPrivate', 'username', 'userProfileLogo', 'profilePicUrl']) &&
         // `commentCount` must be incrementing or unchanged
         (request.resource.data.commentCount == resource.data.commentCount || request.resource.data.commentCount == resource.data.commentCount + 1) &&
         // `isPrivate` must be boolean (updated from user profile, if user changes their overall profile private status)
         (request.resource.data.isPrivate is bool) &&
         // Propagated profile info from user document
         (request.resource.data.username is string || request.resource.data.username == null) &&
         (request.resource.data.userProfileLogo is string || request.resource.data.userProfileLogo == null) &&
         (request.resource.data.profilePicUrl is string || request.resource.data.profilePicUrl == null)
        )
        // Scenario 2: Another authenticated user (not the owner) interacts (likes, reacts, views).
        || (request.auth.uid != resource.data.userId &&
            (
                // For likes and unlikes
                (request.resource.data.keys().hasOnly(['likes', 'likedBy']) &&
                 request.resource.data.likes >= 0 &&
                 request.resource.data.likedBy is list
                )
                // For emoji reactions
                || (request.resource.data.keys().hasOnly(['reactions', 'userReactions']) &&
                    request.resource.data.reactions is map &&
                    request.resource.data.userReactions is map
                )
                // For view count increments (often paired with postViews transaction)
                || (request.resource.data.keys().hasOnly(['views']) &&
                    request.resource.data.views == resource.data.views + 1 && // Must strictly increment by 1
                    request.resource.data.views > resource.data.views // And new value must be greater
                )
            )
           )
      );

      // Delete access: Only post owner or Admin can delete a post.
      allow delete: if request.auth != null && resource.data.userId == request.auth.uid || isAdmin();
    }

    // --- Comments Collection ---
    // Users can read all comments on a post. Users can add comments, and delete their own. Admin can delete.
    match /comments/{commentId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null
                    && request.resource.data.userId == request.auth.uid
                    && request.resource.data.postId is string
                    && request.resource.data.content is string && request.resource.data.content.size() >= 1 && request.resource.data.content.size() <= 100
                    && request.resource.data.timestamp is timestamp;

      allow update: if false; // Comments are immutable.
      allow delete: if request.auth != null && resource.data.userId == request.auth.uid || isAdmin();
    }

    // --- Messages Collection ---
    // Users can only read/write messages in conversations they are part of.
    // Messages also have a client-side expiration. Firestore rule enforces 12h visibility.
    match /messages/{messageId} {
      // Read access: Sender or receiver can read if message is still within 12 hours.
      allow read: if request.auth != null
                  && (resource.data.senderId == request.auth.uid || resource.data.receiverId == request.auth.uid)
                  && (request.time < resource.data.timestamp + duration('12h')); // Messages visible for 12 hours from timestamp

      // Create access: Only if sender is the current authenticated user and both parties are in 'participants' array.
      allow create: if request.auth != null
                    && request.resource.data.senderId == request.auth.uid
                    && request.resource.data.receiverId is string
                    && request.resource.data.content is string
                    && request.resource.data.timestamp is timestamp
                    && request.resource.data.participants is list
                    && request.resource.data.participants.size() == 2
                    && request.resource.data.participants.hasAll([request.auth.uid, request.resource.data.receiverId])
                    && request.resource.data.get('read', false) == false; // New messages start as unread

      // No direct updates or deletes via client. Messages are immutable after creation.
      allow update: if false;
      allow delete: if false;
    }

    // --- Post Views Collection ---
    // This collection is used internally to track unique views per user per post.
    // It should only be updated in a specific transactional way.
    match /postViews/{postId} {
        // Read access: No direct public read of internal view records. These are system managed.
        allow read: if false;

        // Write access: Allows creation or update for logging views.
        // Requires authentication, ensures totalViews increments by 1, and the current user's ID is set to true in viewedBy.
        allow write: if request.auth != null && (
          // Creation (first view for this post ID)
          (request.resource.data.keys().hasAll(['totalViews', 'viewedBy']) &&
           request.resource.data.totalViews == 1 && // Initial totalViews must be 1
           request.resource.data.viewedBy is map &&
           request.resource.data.viewedBy.keys().size() == 1 && // Only one key, the current user
           request.resource.data.viewedBy.get(request.auth.uid) == true
          )
          ||
          // Update (subsequent views for this post ID)
          (request.resource.data.keys().hasAll(['totalViews', 'viewedBy']) && // Only these keys should be affected
           request.resource.data.totalViews == resource.data.totalViews + 1 && // totalViews increments by 1
           resource.data.viewedBy.get(request.auth.uid) != true && // User has NOT viewed before (must be false or non-existent)
           request.resource.data.viewedBy.get(request.auth.uid) == true && // Now user's viewedBy is true
           request.resource.data.viewedBy is map // Must remain a map
          )
        );

        // Delete access: Only by admin, usually in conjunction with post deletion.
        allow delete: if isAdmin();
    }

    // --- Reports Collection ---
    // Authenticated users can create reports. Read/Update/Delete only for admin.
    match /reports/{reportId} {
      allow read: if isAdmin(); // Only Admin can read reports.
      allow create: if request.auth != null
                    && request.resource.data.reportedBy == request.auth.uid // User reports their own UID
                    && request.resource.data.postId is string // Report linked to a postId
                    && request.resource.data.timestamp is timestamp
                    && request.resource.data.get('status', 'pending') == 'pending'; // New reports always start as 'pending'

      allow update: if isAdmin(); // Only Admin can update (e.g., status: resolved)
      allow delete: if isAdmin(); // Only Admin can delete reports.
    }

    // --- Withdrawal Requests Collection ---
    // Users can create their own withdrawal requests. Read/Update/Delete only for admin.
    match /withdrawalRequests/{requestId} {
      allow read: if isAdmin(); // Only Admin can read withdrawal requests.
      allow create: if request.auth != null
                    && request.resource.data.userId == request.auth.uid // Request from current user
                    && request.resource.data.username is string
                    && request.resource.data.method is string
                    && request.resource.data.id is string
                    && request.resource.data.monetizedViewsAtRequest is int
                    && request.resource.data.monetizedViewsAtRequest >= 100000 // Enforce withdrawal threshold at request time
                    && request.resource.data.estimatedAmount is float
                    && request.resource.data.estimatedAmount >= 0 // Should be non-negative
                    && request.resource.data.requestTimestamp is timestamp
                    && request.resource.data.get('status', 'pending') == 'pending'; // New requests start as 'pending'

      allow update: if isAdmin(); // Only Admin can update (e.g., status: completed/rejected)
      allow delete: if isAdmin(); // Only Admin can delete.
    }
  }
}

