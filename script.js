Zar, aapki baat samajh gaya. "Spanish screen" se aapka matlab splash screen se hai, jo shuru mein dikhti hai aur jaa nahi rahi. Iska matlab hai ki app load hone ya Firebase se connect hone mein koi dikkat aa rahi hai.

Aapko **browser console** mein dekhna hoga ki kya error aa rahi hai. Yeh sabse accha tarika hai problem ko samajhne ka.

**Browser Console Kaise Kholte Hain:**

1.  **Agar aap Android phone par Chrome mein test kar rahe hain (ya koi dusra browser jo debugging support karta hai):**
    *   Apne Android phone ko USB cable se computer se connect karein.
    *   Apne phone mein **USB Debugging** enable karein (yeh aam taur par Developer Options mein milta hai. Agar Developer Options nahi dikh raha, toh phone ki settings mein "About Phone" mein jaakar "Build Number" par 7 baar tap karein).
    *   Apne computer par Chrome browser kholein.
    *   Address bar mein `chrome://inspect/#devices` type karke Enter dabayein.
    *   Wahan aapko apna connected Android device dikhega aur usmein AddMint ka tab bhi dikhega. AddMint tab ke saamne "inspect" par click karein.
    *   Ek naya Chrome DevTools window khulega jismein aapke phone ke browser ka console dikhega.
2.  **Agar aap desktop ya laptop par browser mein test kar rahe hain:**
    *   Apne web page par kahin bhi **right-click** karein.
    *   "Inspect" ya "Inspect Element" (ya "Developer Tools") option ko chunein.
    *   Khuli hui window mein "Console" tab par click karein.

**Console mein kya dekhna hai:**
Console tab mein **lal (red) rang ke error messages** dhundein. Woh messages batayenge ki kya galati ho rahi hai. Kuch common errors ho sakte hain:
*   `Firebase: Error (auth/...)` (Matlab Firebase authentication mein dikkat hai)
*   `Firebase: Firestore (firestore/permission-denied)` (Matlab aapke Firebase Security Rules mein koi masla hai, jo data access ko rok raha hai)
*   `Uncaught TypeError: ...` (Matlab aapke JavaScript code mein koi syntax ya logic error hai)
*   `Failed to load resource: net::ERR_...` (Matlab network ki dikkat hai, shayad Firebase server tak pahunch nahi paa raha)

**Mujhe woh lal error messages yahan copy-paste karke bhejein.**

Maine aapke `script.js` mein kuch changes kiye hain, jo debugging mein madad karenge aur yeh ensure karenge ki splash screen 10 second baad apne aap hat jaaye, bhale hi koi error aaye.

**Kripya apne `script.js` file ko niche diye gaye naye code se replace karein aur phir se try karein.** Agar phir bhi problem aaye, toh console mein error messages check karein aur mujhe batayein.

---

### `script.js` (Updated for Debugging)

```javascript
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
const appContainer = document.getElementById('app-container');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');
const mainContent = document.querySelector('.main-content');
const bottomNavItems = document.querySelectorAll('.app-bottom-nav .nav-item');
const screenSections = document.querySelectorAll('.app-screen');
const headerCoins = document.getElementById('header-coins');
const headerCredits = document.getElementById('header-credits');
const headerLimit = document.getElementById('header-limit');
const giftClaimBtn = document.getElementById('gift-claim-btn');
const adModal = document.getElementById('ad-modal');
const closeAdModalBtn = document.getElementById('close-ad-modal');
const rewardPopup = document.getElementById('reward-popup');
const rewardMessage = document.getElementById('reward-message');
const closeRewardPopupBtn = document.getElementById('close-reward-popup');
const toastNotification = document.getElementById('toast-notification');
const refreshPostsBtn = document.getElementById('refresh-posts-btn');
const postsFeed = document.getElementById('posts-feed');
const loadingSpinner = document.getElementById('loading-spinner');

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
const editUsernameInput = document.getElementById('edit-username');
const usernameAvailability = document.getElementById('username-availability');
const editNameInput = document.getElementById('edit-name');
const editBioInput = document.getElementById('edit-bio');
const editWhatsappInput = document.getElementById('edit-whatsapp');
const editInstagramInput = document.getElementById('edit-instagram');
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

// Function to dynamically apply logo styles
function applyLogoStyles() {
    PROFILE_LOGOS.forEach(logo => {
        if (!document.head.querySelector(`style[data-logo-class="${logo.class}"]`)) {
            const style = document.createElement('style');
            style.setAttribute('data-logo-class', logo.class);
            style.innerHTML = `
                .profile-avatar.user-${logo.class}, .profile-avatar-large.user-${logo.class}, .profile-avatar-small.user-${logo.class} { background-color: ${logo.color}; }
                .profile-avatar.user-${logo.class}::before, .profile-avatar-large.user-${logo.class}::before, .profile-avatar-small.user-${logo.class}::before { content: '${logo.emoji}'; font-size: ${logo.class.includes('large') ? '60px' : logo.class.includes('small') ? '30px' : '24px'}; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: var(--button-primary-text); }
            `;
            document.head.appendChild(style);
        }
    });
}
applyLogoStyles(); // Call once on script load


// --- Firebase Authentication ---
let splashScreenTimeout; // Declare a variable to hold the splash screen timeout

// Set a fallback timeout for the splash screen in case auth fails or is slow
// This ensures the splash screen will eventually hide even if there's a problem with Firebase.
splashScreenTimeout = setTimeout(() => {
    console.warn("Splash screen fallback triggered: Hiding splash screen after 10 seconds.");
    hideSplashScreen();
}, 10000); // 10 seconds

auth.onAuthStateChanged(async (user) => {
    // Clear the fallback timeout if authentication proceeds normally
    clearTimeout(splashScreenTimeout);

    if (user) {
        currentUser = user;
        console.log("User authenticated:", currentUser.uid);

        try {
            // Check if user's profile exists in Firestore
            const userDocRef = db.collection('users').doc(currentUser.uid);
            const userDoc = await userDocRef.get();

            if (!userDoc.exists || !userDoc.data().username) {
                console.log("New user or incomplete profile. Redirecting to profile setup.");
                // New user or incomplete profile, redirect to profile setup
                showScreen('profile-screen');
                editProfileModal.classList.remove('hidden'); // Automatically open edit profile
                showToast("Welcome! Please complete your profile.", 'info', 5000);
                myProfileUsername.textContent = "@NewUser"; // Placeholder
                sidebarUsername.textContent = "New User";
                sidebarProfileAvatar.className = `profile-avatar-small ${getLogoCssClass('logo-1')}`; // Default for new users
            } else {
                console.log("Existing user. Loading profile and home feed.");
                // Existing user, load profile and show home feed
                loadUserProfile(currentUser.uid); // Also updates header and sidebar info
                loadUserCoinsCreditsLimits(currentUser.uid);
                showScreen('home-screen');
                loadPosts(); // Start loading posts for the home screen
            }
            hideSplashScreen(); // Always hide splash screen after auth/profile logic succeeds
        } catch (firestoreError) {
            console.error("Error during Firestore profile check:", firestoreError);
            showToast("Error loading user profile. Please try again.", 'error', 5000);
            hideSplashScreen(); // Ensure splash screen hides even on Firestore error
            // Optionally, prompt for re-login or show a limited UI
        }
    } else {
        currentUser = null;
        console.log("No user authenticated. Attempting anonymous sign-in (for demo).");
        // This is a placeholder for login/signup. In a real app, you'd show a dedicated login UI.
        showToast("Please log in or sign up to use the app.", 'info', 5000);
        auth.signInAnonymously().catch(error => {
            console.error("Error signing in anonymously:", error);
            showToast("Error logging in. Please refresh.", 'error');
            hideSplashScreen(); // Hide splash screen even if anonymous sign-in fails
        });
    }
});

// --- Splash Screen Transition ---
function hideSplashScreen() {
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.classList.add('hidden');
            appContainer.classList.remove('hidden');
        }, 500); // Wait for fade out to complete
    }, 1000); // Show splash for at least 1-3 seconds
}

// --- Header Coins/Credits/Limits Display ---
async function loadUserCoinsCreditsLimits(userId) {
    if (!userId) return;
    try {
        const userDocRef = db.collection('users').doc(userId);
        userDocRef.onSnapshot(doc => {
            if (doc.exists) {
                const data = doc.data();
                headerCoins.textContent = `${formatNumber(data.coins || 0)} C`;
                headerCredits.textContent = `${formatNumber(data.credits || 0)} Cr`;
                headerLimit.textContent = `${formatNumber(data.postLimit || 0)} L`;
                checkDailyRewardStatus(data.lastRewardClaim || 0);
                // Update sidebar username and avatar
                sidebarUsername.textContent = data.name || data.username || "My Name";
                sidebarProfileAvatar.className = `profile-avatar-small ${getLogoCssClass(data.profileLogo || 'logo-1')}`;
            }
        });
    } catch (error) {
        console.error("Error fetching user stats:", error);
        showToast("Error loading user stats.", 'error');
    }
}

// --- Daily Reward Logic ---
const DAILY_REWARD_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const DAILY_REWARD = { limit: 1, coins: 50, credits: 20 }; // Adjusted values

async function checkDailyRewardStatus(lastClaimTimestamp) {
    if (!currentUser) return;
    const now = Date.now();
    const lastClaimTime = lastClaimTimestamp; // Firestore timestamp to milliseconds

    if (now - lastClaimTime >= DAILY_REWARD_INTERVAL) {
        giftClaimBtn.classList.add('neon-glow'); // Visually indicate available reward
    } else {
        giftClaimBtn.classList.remove('neon-glow');
        const timeRemaining = DAILY_REWARD_INTERVAL - (now - lastClaimTime);
        console.log(`Next reward in: ${new Date(timeRemaining).toISOString().substr(11, 8)}`);
    }
}

giftClaimBtn.addEventListener('click', async () => {
    if (!currentUser) {
        showToast("Please log in to claim rewards.", 'info');
        return;
    }

    try {
        const userDocRef = db.collection('users').doc(currentUser.uid);
        const userDoc = await userDocRef.get();
        const userData = userDoc.data();
        const lastClaimTime = userData.lastRewardClaim || 0;
        const now = Date.now();

        if (now - lastClaimTime >= DAILY_REWARD_INTERVAL) {
            // Claim reward
            await userDocRef.update({
                coins: firebase.firestore.FieldValue.increment(DAILY_REWARD.coins),
                credits: firebase.firestore.FieldValue.increment(DAILY_REWARD.credits),
                postLimit: firebase.firestore.FieldValue.increment(DAILY_REWARD.limit),
                lastRewardClaim: now // Update last claim time
            });
            showRewardPopup(`You claimed your daily reward!\n+${DAILY_REWARD.coins} Coins, +${DAILY_REWARD.credits} Credits, +${DAILY_REWARD.limit} Limits.`);
            showToast("Daily reward claimed!", 'success');
        } else {
            const timeRemaining = DAILY_REWARD_INTERVAL - (now - lastClaimTime);
            showToast(`Next reward available in: ${new Date(timeRemaining).toISOString().substr(11, 8)}`, 'info', 5000);
        }
    } catch (error) {
        console.error("Error claiming daily reward:", error);
        showToast("Failed to claim reward. Please try again.", 'error');
    }
});

function showRewardPopup(message) {
    rewardMessage.textContent = message;
    rewardPopup.classList.remove('hidden');
}

closeRewardPopupBtn.addEventListener('click', () => {
    rewardPopup.classList.add('hidden');
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
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
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

// Logout Button
document.getElementById('logout-btn').addEventListener('click', async () => {
    try {
        await auth.signOut();
        showToast("Logged out successfully.", 'info');
        // Redirect to login page or show login UI (for this demo, it'll try to sign in anonymously again)
        location.reload(); // Simple reload to trigger onAuthStateChanged again
    } catch (error) {
        console.error("Error logging out:", error);
        showToast("Failed to log out.", 'error');
    }
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
    if (fetchingPosts || !currentUser) return;

    fetchingPosts = true;
    loadingSpinner.classList.remove('hidden');

    try {
        let postsRef = db.collection('posts')
                         .where('expiryTime', '>', firebase.firestore.Timestamp.now()) // Only active posts
                         .orderBy('expiryTime', 'desc') // Order by expiry to show newer relevant posts first
                         .orderBy('timestamp', 'desc'); // Secondary order by original timestamp for consistency

        const selectedCategory = postCategoryFilter.value;
        if (selectedCategory !== 'all') {
            postsRef = postsRef.where('category', '==', selectedCategory);
        }

        if (lastVisiblePost) {
            postsRef = postsRef.startAfter(lastVisiblePost);
        }

        const snapshot = await postsRef.limit(postsToLoadPerScroll).get();
        if (snapshot.empty) {
            showToast("No more posts to load. Looping back to beginning.", 'info', 3000);
            lastVisiblePost = null; // Reset to loop from the beginning
            fetchingPosts = false;
            loadingSpinner.classList.add('hidden');
            if (postsFeed.innerHTML === '') { // If no posts loaded initially, show message
                postsFeed.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No posts available in this category.</p>';
            }
            return;
        }

        lastVisiblePost = snapshot.docs[snapshot.docs.length - 1];

        let currentBatch = [];
        snapshot.docs.forEach(doc => {
            currentBatch.push({ id: doc.id, ...doc.data() });
        });

        // Apply random layout logic
        let tempPosts = [...currentBatch];
        while (tempPosts.length > 0) {
            const randomLayout = Math.floor(Math.random() * 3); // 0: vertical, 1: horizontal, 2: table

            if (randomLayout === 0 || tempPosts.length < 4) { // Vertical or not enough for other layouts
                const post = tempPosts.shift();
                renderPost(post, postsFeed, 'vertical-post');
            } else if (randomLayout === 1 && tempPosts.length >= 2) { // Horizontal (2-3 posts)
                const numHorizontal = Math.min(tempPosts.length, Math.floor(Math.random() * 2) + 2); // 2 or 3
                const horizontalContainer = document.createElement('div');
                horizontalContainer.className = 'horizontal-post-container';
                for (let i = 0; i < numHorizontal; i++) {
                    const post = tempPosts.shift();
                    horizontalContainer.appendChild(createPostElement(post, 'horizontal-post'));
                }
                postsFeed.appendChild(horizontalContainer);
            } else if (randomLayout === 2 && tempPosts.length >= 4) { // Table (4-6 posts)
                const numTable = Math.min(tempPosts.length, Math.floor(Math.random() * 3) + 4); // 4, 5, or 6
                const tableContainer = document.createElement('div');
                tableContainer.className = 'table-post-container';
                for (let i = 0; i < numTable; i++) {
                    const post = tempPosts.shift();
                    tableContainer.appendChild(createPostElement(post, 'table-post'));
                }
                postsFeed.appendChild(tableContainer);
            } else { // Fallback to vertical if conditions not met
                const post = tempPosts.shift();
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
    if (fetchingImmersivePosts || !currentUser) return;

    fetchingImmersivePosts = true;
    feedLoadingSpinner.classList.remove('hidden');

    try {
        let postsRef = db.collection('posts')
                         .where('expiryTime', '>', firebase.firestore.Timestamp.now())
                         .orderBy('expiryTime', 'desc')
                         .orderBy('timestamp', 'desc'); // For consistent ordering

        // If user follows people, prioritize their posts first
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        const followedUsers = userDoc.data().following || [];

        let snapshot;
        let posts = [];

        if (followedUsers.length > 0) {
            // Attempt to get posts from followed users (this can be complex with Firestore limits)
            // For simplicity, we'll fetch general posts and check if they are from followed users.
            // A more scalable solution for "following feed" involves denormalization or backend processing.
        }

        // Fetch general posts, mixing with followed if possible
        if (lastVisibleImmersivePost) {
            postsRef = postsRef.startAfter(lastVisibleImmersivePost);
        }
        snapshot = await postsRef.limit(postsToLoadPerScroll).get();

        if (snapshot.empty) {
            showToast("No more immersive posts. Looping back.", 'info', 3000);
            lastVisibleImmersivePost = null; // Reset to loop from the beginning
            fetchingImmersivePosts = false;
            feedLoadingSpinner.classList.add('hidden');
            if (immersiveFeed.innerHTML === '') {
                immersiveFeed.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">No immersive posts available.</p>';
            }
            return;
        }

        lastVisibleImmersivePost = snapshot.docs[snapshot.docs.length - 1];

        snapshot.docs.forEach(doc => {
            posts.push({ id: doc.id, ...doc.data() });
        });

        // Mix in followed users' posts if possible, or just add all fetched posts
        posts.forEach(post => {
            renderPost(post, immersiveFeed, 'immersive-post'); // Use immersive-post class
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

    const userProfileClass = getLogoCssClass(postData.userProfileLogo || getRandomLogoClass());

    const isOwner = currentUser && postData.userId === currentUser.uid;

    postCard.innerHTML = `
        <div class="post-header">
            <div class="profile-avatar ${userProfileClass}" data-user-id="${postData.userId}"></div>
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
                    const postOwnerId = postRef.data().userId; // Get owner from post data
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

    // Check coins and limits
    const userDocRef = db.collection('users').doc(currentUser.uid);
    const userDoc = await userDocRef.get();
    const userData = userDoc.data();

    const currentCoins = userData.coins || 0;
    const currentLimit = userData.postLimit || 0;

    const requiredCoins = 5;
    const requiredLimit = 1;

    if (currentCoins < requiredCoins || currentLimit < requiredLimit) {
        showToast(`You need ${requiredCoins} coins and ${requiredLimit} post limit to upload. Watch an ad to earn.`, 'error', 5000);
        showAdModal('post-upload', { coins: requiredCoins - currentCoins, limit: requiredLimit - currentLimit });
        return;
    }

    // Deduct coins and limit
    try {
        await userDocRef.update({
            coins: firebase.firestore.FieldValue.increment(-requiredCoins),
            postLimit: firebase.firestore.FieldValue.increment(-requiredLimit)
        });
    } catch (error) {
        console.error("Error deducting coins/limit:", error);
        showToast("Failed to deduct coins/limit. Please try again.", 'error');
        return;
    }

    uploadStatus.textContent = "Uploading post...";
    publishPostBtn.disabled = true;

    try {
        const newPostRef = db.collection('posts').doc(); // Auto-generated ID
        const boostHours = 24; // All posts are 24 hours now

        await newPostRef.set({
            userId: currentUser.uid,
            username: userData.username, // Use user's current username
            userProfileLogo: userData.profileLogo || getRandomLogoClass(), // User's chosen logo
            content: content,
            category: category,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            likes: 0,
            views: 0,
            commentCount: 0, // Initialize comment count
            reactions: {},
            userReactions: {},
            isMonetized: isMonetized,
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
        // Revert coins/limit if upload failed after deduction
        await userDocRef.update({
            coins: firebase.firestore.FieldValue.increment(requiredCoins),
            postLimit: firebase.firestore.FieldValue.increment(requiredLimit)
        });
    } finally {
        publishPostBtn.disabled = false;
    }
});

// Ad Modal Logic
let currentAdPurpose = ''; // 'post-upload', 'message-credit', 'limit', 'coins'
let adRewardDetails = {};

function showAdModal(purpose, details = {}) {
    currentAdPurpose = purpose;
    adRewardDetails = details;
    adModal.classList.remove('hidden');
    closeAdModalBtn.disabled = true; // Disable close until ad "finishes"

    // Simulate ad playback
    const adPlaceholder = document.getElementById('ad-placeholder');
    adPlaceholder.innerHTML = '<p>Simulating Ad (5 seconds)...</p><div class="loader"></div>';

    setTimeout(() => {
        adPlaceholder.innerHTML = '<p>Ad Complete!</p>';
        closeAdModalBtn.disabled = false;
        showToast("Ad completed! You can now claim your reward.", 'success');
    }, 5000); // Simulate 5-second ad
}

closeAdModalBtn.addEventListener('click', async () => {
    adModal.classList.add('hidden');
    // Reward logic based on currentAdPurpose and adRewardDetails
    await processAdReward();
});

async function processAdReward() {
    if (!currentUser) return;

    try {
        const userDocRef = db.collection('users').doc(currentUser.uid);
        let rewardMessageText = "Reward:";

        if (currentAdPurpose === 'post-upload') {
            await userDocRef.update({
                coins: firebase.firestore.FieldValue.increment(50),
                postLimit: firebase.firestore.FieldValue.increment(1)
            });
            rewardMessageText += "+50 Coins, +1 Limit";
            showToast("Post upload resources gained!", 'success');
        } else if (currentAdPurpose === 'message-credit') {
            await userDocRef.update({
                credits: firebase.firestore.FieldValue.increment(10)
            });
            rewardMessageText += "+10 Credits";
            showToast("Messaging credits gained!", 'success');
        } else if (currentAdPurpose === 'limit') {
            await userDocRef.update({
                postLimit: firebase.firestore.FieldValue.increment(1)
            });
            rewardMessageText += "+1 Post Limit";
            showToast("Post limit gained!", 'success');
        } else if (currentAdPurpose === 'coins') {
            await userDocRef.update({
                coins: firebase.firestore.FieldValue.increment(50)
            });
            rewardMessageText += "+50 Coins";
            showToast("Coins gained!", 'success');
        }

        showRewardPopup(rewardMessageText);

    } catch (error) {
        console.error("Error processing ad reward:", error);
        showToast("Failed to process ad reward. Try again.", 'error');
    } finally {
        currentAdPurpose = ''; // Reset
        adRewardDetails = {}; // Reset
    }
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

    const profileLogoClass = getLogoCssClass(userData.profileLogo || getRandomLogoClass());
    myProfileAvatar.className = `profile-avatar-large ${profileLogoClass}`;

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
        accountPrivacyToggle.checked = userData.isPrivate || false;
        accountPrivacyStatus.textContent = userData.isPrivate ? 'Private' : 'Public';
        populateProfileLogoOptions(userData.profileLogo);
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
        const postPromises = repostedPostIds.slice(0, 10).map(id => db.collection('posts').doc(id).get());
        const postDocs = await Promise.all(postPromises);

        postDocs.forEach(doc => {
            if (doc.exists && doc.data().expiryTime.toMillis() > Date.now()) { // Check if not expired
                profileRepostsFeed.appendChild(createPostElement({ id: doc.id, ...doc.data() }));
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


// Edit Profile Modal
editProfileBtn.addEventListener('click', () => {
    editProfileModal.classList.remove('hidden');
});

cancelEditProfileBtn.addEventListener('click', () => {
    editProfileModal.classList.add('hidden');
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

    // Get current username from sidebar, which reflects logged-in user
    const currentUsernameFromSidebar = sidebarUsername.textContent.replace('@', '');

    if (newUsername === currentUsernameFromSidebar) {
        usernameAvailability.textContent = 'Username is available.';
        usernameAvailability.classList.add('success-text');
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

// Populate Profile Logo Options
function populateProfileLogoOptions(currentLogoClass) {
    profileLogoOptions.innerHTML = '';
    PROFILE_LOGOS.forEach(logo => {
        const logoItem = document.createElement('div');
        logoItem.className = `logo-option-item profile-avatar user-${logo.class}`;
        logoItem.dataset.logoClass = logo.class;

        if (currentLogoClass === logo.class) {
            logoItem.classList.add('selected');
        }

        logoItem.addEventListener('click', () => {
            profileLogoOptions.querySelectorAll('.logo-option-item').forEach(item => item.classList.remove('selected'));
            logoItem.classList.add('selected');
        });
        profileLogoOptions.appendChild(logoItem);
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
    const selectedLogoElement = profileLogoOptions.querySelector('.logo-option-item.selected');
    const newProfileLogo = selectedLogoElement ? selectedLogoElement.dataset.logoClass : null;
    const isPrivate = accountPrivacyToggle.checked;

    if (newUsername === '') {
        showToast("Username cannot be empty.", 'error');
        return;
    }

    // Ensure at least one contact method is provided if profile is public
    if (!isPrivate && newWhatsapp === '' && newInstagram === '') {
        showToast("For a public profile, please provide at least a WhatsApp number or Instagram ID.", 'error');
        return;
    }

    try {
        const userDocRef = db.collection('users').doc(currentUser.uid);
        const userDoc = await userDocRef.get();
        const currentData = userDoc.data();

        // Check username uniqueness again before saving
        if (newUsername !== currentData.username) {
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
            isPrivate: isPrivate,
            // Initialize follower/following counts if they don't exist
            followersCount: currentData.followersCount || 0,
            followingCount: currentData.followingCount || 0,
            postCount: currentData.postCount || 0,
            monetizedViewsCount: currentData.monetizedViewsCount || 0,
            unmonetizedViewsCount: currentData.unmonetizedViewsCount || 0,
            earnedAmount: currentData.earnedAmount || 0.00,
            coins: currentData.coins || 100, // Starting bonus for new users
            credits: currentData.credits || 50,
            postLimit: currentData.postLimit || 5,
            lastRewardClaim: currentData.lastRewardClaim || 0
        });

        // Update username in existing posts if it changed
        if (newUsername !== currentData.username) {
            const postsSnapshot = await db.collection('posts').where('userId', '==', currentUser.uid).get();
            const batch = db.batch();
            postsSnapshot.docs.forEach(doc => {
                const postRef = db.collection('posts').doc(doc.id);
                batch.update(postRef, { username: newUsername });
            });
            await batch.commit();
        }

        editProfileModal.classList.add('hidden');
        showToast("Profile updated successfully!", 'success');
        loadUserProfile(currentUser.uid); // Reload profile display
    } catch (error) {
        console.error("Error saving profile:", error);
        showToast("Failed to save profile. Please try again.", 'error');
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
        showToast(`Failed to follow: ${error.message || error}`, 'error');
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

        followListContent.innerHTML = '';
        usersData.forEach(user => {
            const userItem = document.createElement('li');
            userItem.className = 'search-user-item';
            userItem.dataset.userId = user.id; // Store user ID

            const userLogoClass = getLogoCssClass(user.profileLogo || getRandomLogoClass());

            userItem.innerHTML = `
                <div class="profile-avatar small ${userLogoClass}"></div>
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
                db.collection('users').doc(currentUser.uid).get().then(doc => {
                    const followingList = doc.data().following || [];
                    if (followingList.includes(user.id)) {
                        actionBtn.textContent = 'Following';
                        actionBtn.classList.add('secondary-btn');
                        actionBtn.classList.remove('primary-btn');
                    } else {
                        actionBtn.textContent = 'Follow';
                        actionBtn.classList.add('primary-btn');
                        actionBtn.classList.remove('secondary-btn');
                    }
                });
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
        });
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
    if (!currentProfileViewingId) return;
    openChatWindow(currentProfileViewingId);
});

async function loadRecentChats() {
    if (!currentUser) return;
    recentChatsList.innerHTML = '<div class="loader" style="margin: 20px auto;"></div>';

    try {
        const chats = {};

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

                        const partnerLogoClass = getLogoCssClass(partnerData.profileLogo || getRandomLogoClass());

                        chatItem.innerHTML = `
                            <div class="profile-avatar small ${partnerLogoClass}"></div>
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
            const partnerLogoClass = getLogoCssClass(partnerDoc.data().profileLogo || getRandomLogoClass());
            chatPartnerAvatar.className = `profile-avatar small ${partnerLogoClass}`;
        } else {
            chatPartnerUsername.textContent = "@UnknownUser";
            chatPartnerAvatar.className = `profile-avatar small ${getLogoCssClass('logo-1')}`;
        }

        // Real-time listener for messages between these two users
        db.collection('messages')
            .where('participants', 'array-contains-any', [currentUser.uid, partnerId]) // Ensure either party is a participant
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => {
                chatMessages.innerHTML = ''; // Clear existing messages
                snapshot.docs.forEach(doc => {
                    const message = doc.data();
                    // Filter messages relevant to the current chat partner and within 12 hours
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
        chatWindowContainer.removeEventListener('click', hideEmojiPickerChat); // Prevent double listeners


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
    if (!currentUser || !currentChatPartnerId) return;

    const messageContent = messageInput.value.trim();
    if (messageContent === '') return;

    // Check credits
    const userDocRef = db.collection('users').doc(currentUser.uid);
    const userDoc = await userDocRef.get();
    const userData = userDoc.data();
    const currentCredits = userData.credits || 0;

    if (currentCredits < 1) {
        showToast("You need 1 credit to send a message. Watch an ad to earn.", 'error', 5000);
        showAdModal('message-credit', { requiredCredits: 1 });
        return;
    }

    try {
        await userDocRef.update({
            credits: firebase.firestore.FieldValue.increment(-1)
        });

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
        // Revert credit if failed
        await userDocRef.update({
            credits: firebase.firestore.FieldValue.increment(1)
        });
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
                const commentUser = await db.collection('users').doc(commentData.userId).get();
                const username = commentUser.exists ? commentUser.data().username : 'Deleted User';

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

                const userLogoClass = getLogoCssClass(userData.profileLogo || getRandomLogoClass());

                userItem.innerHTML = `
                    <div class="profile-avatar small ${userLogoClass}"></div>
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
                    transaction.delete(db.collection('postViews').doc(postId));

                    // Decrement user's post count (if needed, this could also be a cloud function trigger)
                    const userRef = db.collection('users').doc(currentUser.uid);
                    const userDoc = await transaction.get(userRef);
                    if (userDoc.exists) {
                        const userData = userDoc.data();
                        let updates = {
                            postCount: firebase.firestore.FieldValue.increment(-1)
                        };
                        // No direct decrement of monetized views on post deletion, as earnings are recorded at time of view
                        // If you need to "undo" earnings, it's a more complex admin-side task.
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

    const monetizedViews = parseInt(totalMonetizedViewsSpan.textContent.replace('k', '000').replace('M', '000000')) || 0;
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

    if (id === '') {
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
    const views = parseInt(totalMonetizedViewsSpan.textContent.replace('k', '000').replace('M', '000000')) || 0;
    const estimatedEarnings = parseFloat(estimatedEarningsSpan.textContent.replace('$', '').trim());

    if (id === '') {
        showToast("Withdrawal ID cannot be empty.", 'error');
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
            views: views,
            amount: estimatedEarnings,
            timestamp: new Date().toISOString()
        });

        // Store request in Firestore for admin to see
        await db.collection('withdrawalRequests').add({
            userId: currentUser.uid,
            username: myProfileUsername.textContent.replace('@', ''),
            method: method,
            id: id,
            monetizedViewsAtRequest: views,
            estimatedAmount: estimatedEarnings,
            requestTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'pending' // pending, approved, rejected, completed
        });

        // Reset user's monetized views and earnings after request (admin panel would confirm payment first in real app)
        // This is done here for immediate UI feedback, but in a real app,
        // this reset would happen AFTER the admin marks the payment as "completed" in the admin panel.
        await db.collection('users').doc(currentUser.uid).update({
            monetizedViewsCount: 0,
            earnedAmount: 0.00
        });

        withdrawalModal.classList.add('hidden');
        showToast("Withdrawal request sent! You will receive payment in 1-15 business days.", 'success', 8000);
        loadEarningsPage(); // Refresh earnings
    } catch (error) {
        console.error("Error sending withdrawal request:", error);
        showToast("Failed to send withdrawal request. Try again.", 'error');
    }
});

cancelWithdrawalBtn.addEventListener('click', () => {
    withdrawalModal.classList.add('hidden');
});

// --- Initial Loads ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial screen setup if user is already authenticated (handled by onAuthStateChanged)
    // If not authenticated, login/signup flow will handle initial screen.
    splashScreen.classList.remove('hidden');
    appContainer.classList.add('hidden'); // Hide app container initially
});
```
