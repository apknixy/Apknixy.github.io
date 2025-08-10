// Firebase Configuration (same as main app)
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

// Admin DOM Elements
const adminLoginSection = document.getElementById('admin-login-section');
const adminDashboardSection = document.getElementById('admin-dashboard-section');
const adminEmailInput = document.getElementById('admin-email');
const adminPasswordInput = document.getElementById('admin-password');
const adminLoginBtn = document.getElementById('admin-login-btn');
const adminLoginStatus = document.getElementById('admin-login-status');
const adminLogoutBtn = document.getElementById('admin-logout-btn');

// Dashboard Stats
const totalUsersStat = document.getElementById('total-users');
const totalPostsStat = document.getElementById('total-posts');
const pendingReportsCount = document.getElementById('pending-reports-count');
const pendingWithdrawalsCount = document.getElementById('pending-withdrawals-count');

// Tabs
const adminTabs = document.querySelectorAll('.admin-tabs .tab-btn');
const reportsTabContent = document.getElementById('reports-tab');
const withdrawalsTabContent = document.getElementById('withdrawals-tab');
const usersTabContent = document.getElementById('users-tab');

// Lists
const reportsList = document.getElementById('reports-list');
const noReports = document.getElementById('no-reports');
const withdrawalsList = document.getElementById('withdrawals-list');
const noWithdrawals = document.getElementById('no-withdrawals');
const usersList = document.getElementById('users-list');
const noUsers = document.getElementById('no-users');

const adminToast = document.getElementById('admin-toast-notification');

// --- Utility Functions ---
function showAdminToast(message, type = 'info', duration = 3000) {
    adminToast.textContent = message;
    adminToast.className = `toast-notification show ${type}`;
    setTimeout(() => {
        adminToast.className = 'toast-notification';
    }, duration);
}

function formatTimestamp(timestamp) {
    if (timestamp && timestamp.toDate) {
        return timestamp.toDate().toLocaleString();
    }
    return 'N/A';
}

// --- Admin Authentication ---
// IMPORTANT: For a production admin panel, DO NOT use simple email/password auth
// for administrators like this without additional security measures (e.g., role-based access control
// enforced via Firebase Security Rules and Cloud Functions, or Firebase Auth custom claims).
// This is for demonstration ONLY.
const ADMIN_UID = "YOUR_ADMIN_UID_HERE"; // Replace with the actual UID of your admin user

auth.onAuthStateChanged(user => {
    if (user && user.uid === ADMIN_UID) {
        showDashboard();
        loadDashboardStats();
        loadReports(); // Load default tab content
    } else {
        showLogin();
    }
});

adminLoginBtn.addEventListener('click', async () => {
    const email = adminEmailInput.value.trim();
    const password = adminPasswordInput.value.trim();

    if (!email || !password) {
        adminLoginStatus.textContent = "Please enter email and password.";
        return;
    }

    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        if (userCredential.user.uid === ADMIN_UID) {
            showAdminToast("Logged in as Admin!", 'success');
            // If you use custom claims for admin roles, check them here.
            // await userCredential.user.getIdTokenResult(true); // Force refresh token to get claims
            showDashboard();
            loadDashboardStats();
            loadReports();
        } else {
            auth.signOut(); // Log out non-admin user
            adminLoginStatus.textContent = "Access Denied: Not an admin user.";
            showAdminToast("Access Denied.", 'error');
        }
    } catch (error) {
        console.error("Admin login error:", error);
        adminLoginStatus.textContent = `Login failed: ${error.message}`;
        showAdminToast("Login failed.", 'error');
    }
});

adminLogoutBtn.addEventListener('click', async () => {
    try {
        await auth.signOut();
        showAdminToast("Logged out.", 'info');
        showLogin();
    } catch (error) {
        console.error("Admin logout error:", error);
        showAdminToast("Logout failed.", 'error');
    }
});

function showLogin() {
    adminLoginSection.classList.remove('hidden');
    adminDashboardSection.classList.add('hidden');
    adminEmailInput.value = '';
    adminPasswordInput.value = '';
    adminLoginStatus.textContent = '';
}

function showDashboard() {
    adminLoginSection.classList.add('hidden');
    adminDashboardSection.classList.remove('hidden');
}

// --- Dashboard Stats ---
async function loadDashboardStats() {
    try {
        const usersSnapshot = await db.collection('users').get();
        totalUsersStat.textContent = usersSnapshot.size;

        const postsSnapshot = await db.collection('posts').get();
        totalPostsStat.textContent = postsSnapshot.size;

        const reportsSnapshot = await db.collection('reports').where('status', '==', 'pending').get();
        pendingReportsCount.textContent = reportsSnapshot.size;

        const withdrawalsSnapshot = await db.collection('withdrawalRequests').where('status', '==', 'pending').get();
        pendingWithdrawalsCount.textContent = withdrawalsSnapshot.size;
    } catch (error) {
        console.error("Error loading dashboard stats:", error);
        showAdminToast("Error loading stats.", 'error');
    }
}

// --- Tab Navigation ---
adminTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        adminTabs.forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');

        const tabId = e.currentTarget.dataset.tab;
        document.querySelectorAll('.admin-tab-content').forEach(content => content.classList.add('hidden'));
        document.getElementById(`${tabId}-tab`).classList.remove('hidden');

        if (tabId === 'reports') {
            loadReports();
        } else if (tabId === 'withdrawals') {
            loadWithdrawals();
        } else if (tabId === 'users') {
            loadUsers();
        }
    });
});

// --- Reports Management ---
async function loadReports() {
    reportsList.innerHTML = '<div class="loader"></div>';
    try {
        const snapshot = await db.collection('reports').where('status', '==', 'pending').orderBy('timestamp', 'asc').get();
        reportsList.innerHTML = '';
        if (snapshot.empty) {
            noReports.classList.remove('hidden');
        } else {
            noReports.classList.add('hidden');
            snapshot.docs.forEach(doc => {
                const report = doc.data();
                const reportItem = document.createElement('div');
                reportItem.className = 'data-item';
                reportItem.innerHTML = `
                    <div class="data-item-details">
                        <p><strong>Post ID:</strong> <span>${report.postId}</span></p>
                        <p><strong>Reported By:</strong> <span>${report.reportedBy}</span></p>
                        <p><strong>Time:</strong> <span>${formatTimestamp(report.timestamp)}</span></p>
                    </div>
                    <div class="data-item-actions">
                        <button class="btn primary-btn" data-id="${doc.id}" data-action="resolve-report">Resolve</button>
                        <button class="btn danger-btn" data-id="${doc.id}" data-action="delete-post-report">Delete Post & Resolve</button>
                    </div>
                `;
                reportsList.appendChild(reportItem);
            });

            reportsList.querySelectorAll('button').forEach(button => {
                button.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const action = e.target.dataset.action;
                    if (action === 'resolve-report') {
                        resolveReport(id);
                    } else if (action === 'delete-post-report') {
                        const postId = e.target.closest('.data-item').querySelector('span').textContent; // Get post ID from display
                        deletePostAndResolveReport(id, postId);
                    }
                });
            });
        }
    } catch (error) {
        console.error("Error loading reports:", error);
        showAdminToast("Error loading reports.", 'error');
        reportsList.innerHTML = '<p class="error-text">Error loading reports.</p>';
    } finally {
        loadDashboardStats(); // Refresh stats
    }
}

async function resolveReport(reportId) {
    if (!confirm("Are you sure you want to mark this report as resolved?")) return;
    try {
        await db.collection('reports').doc(reportId).update({
            status: 'resolved',
            resolvedAt: firebase.firestore.FieldValue.serverTimestamp(),
            resolvedBy: auth.currentUser.uid
        });
        showAdminToast("Report resolved.", 'success');
        loadReports();
    } catch (error) {
        console.error("Error resolving report:", error);
        showAdminToast("Failed to resolve report.", 'error');
    }
}

async function deletePostAndResolveReport(reportId, postId) {
    if (!confirm("Are you sure you want to DELETE this post and resolve the report? This is irreversible!")) return;
    try {
        await db.runTransaction(async (transaction) => {
            // 1. Delete the post
            const postRef = db.collection('posts').doc(postId);
            transaction.delete(postRef);

            // 2. Delete related comments
            const commentsSnapshot = await db.collection('comments').where('postId', '==', postId).get();
            commentsSnapshot.docs.forEach(commentDoc => {
                transaction.delete(db.collection('comments').doc(commentDoc.id));
            });

            // 3. Delete post views record
            transaction.delete(db.collection('postViews').doc(postId));

            // 4. Update user's post count (if needed, this could also be a cloud function trigger)
            const postDoc = await db.collection('posts').doc(postId).get();
            if (postDoc.exists) {
                const postOwnerId = postDoc.data().userId;
                const userRef = db.collection('users').doc(postOwnerId);
                transaction.update(userRef, {
                    postCount: firebase.firestore.FieldValue.increment(-1)
                });
            }

            // 5. Resolve the report
            const reportRef = db.collection('reports').doc(reportId);
            transaction.update(reportRef, {
                status: 'resolved',
                resolvedAt: firebase.firestore.FieldValue.serverTimestamp(),
                resolvedBy: auth.currentUser.uid,
                action: 'post_deleted'
            });
        });
        showAdminToast("Post deleted and report resolved.", 'success');
        loadReports();
    } catch (error) {
        console.error("Error deleting post and resolving report:", error);
        showAdminToast("Failed to delete post/resolve report.", 'error');
    }
}


// --- Withdrawals Management ---
async function loadWithdrawals() {
    withdrawalsList.innerHTML = '<div class="loader"></div>';
    try {
        const snapshot = await db.collection('withdrawalRequests').where('status', '==', 'pending').orderBy('requestTimestamp', 'asc').get();
        withdrawalsList.innerHTML = '';
        if (snapshot.empty) {
            noWithdrawals.classList.remove('hidden');
        } else {
            noWithdrawals.classList.add('hidden');
            snapshot.docs.forEach(doc => {
                const request = doc.data();
                const requestItem = document.createElement('div');
                requestItem.className = 'data-item';
                requestItem.innerHTML = `
                    <div class="data-item-details">
                        <p><strong>User:</strong> <span>@${request.username || request.userId}</span></p>
                        <p><strong>Method:</strong> <span>${request.method.toUpperCase()}</span></p>
                        <p><strong>ID:</strong> <span>${request.id}</span></p>
                        <p><strong>Views:</strong> <span>${request.monetizedViewsAtRequest}</span></p>
                        <p><strong>Amount:</strong> <span>${request.estimatedAmount ? request.estimatedAmount.toFixed(2) : '0.00'} $</span></p>
                        <p><strong>Requested:</strong> <span>${formatTimestamp(request.requestTimestamp)}</span></p>
                    </div>
                    <div class="data-item-actions">
                        <button class="btn primary-btn" data-id="${doc.id}" data-action="complete-withdrawal">Mark Completed</button>
                        <button class="btn danger-btn" data-id="${doc.id}" data-action="reject-withdrawal">Reject</button>
                    </div>
                `;
                withdrawalsList.appendChild(requestItem);
            });

            withdrawalsList.querySelectorAll('button').forEach(button => {
                button.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const action = e.target.dataset.action;
                    if (action === 'complete-withdrawal') {
                        completeWithdrawal(id);
                    } else if (action === 'reject-withdrawal') {
                        rejectWithdrawal(id);
                    }
                });
            });
        }
    } catch (error) {
        console.error("Error loading withdrawals:", error);
        showAdminToast("Error loading withdrawals.", 'error');
        withdrawalsList.innerHTML = '<p class="error-text">Error loading withdrawals.</p>';
    } finally {
        loadDashboardStats(); // Refresh stats
    }
}

async function completeWithdrawal(requestId) {
    if (!confirm("Confirm you have sent the payment and want to mark this request as completed.")) return;
    try {
        await db.collection('withdrawalRequests').doc(requestId).update({
            status: 'completed',
            completedAt: firebase.firestore.FieldValue.serverTimestamp(),
            completedBy: auth.currentUser.uid
        });
        showAdminToast("Withdrawal marked as completed.", 'success');
        loadWithdrawals();
    } catch (error) {
        console.error("Error completing withdrawal:", error);
        showAdminToast("Failed to complete withdrawal.", 'error');
    }
}

async function rejectWithdrawal(requestId) {
    if (!confirm("Are you sure you want to reject this withdrawal request?")) return;
    try {
        await db.collection('withdrawalRequests').doc(requestId).update({
            status: 'rejected',
            rejectedAt: firebase.firestore.FieldValue.serverTimestamp(),
            rejectedBy: auth.currentUser.uid
        });
        showAdminToast("Withdrawal rejected.", 'info');
        loadWithdrawals();
    } catch (error) {
        console.error("Error rejecting withdrawal:", error);
        showAdminToast("Failed to reject withdrawal.", 'error');
    }
}


// --- User Management (Basic) ---
async function loadUsers() {
    usersList.innerHTML = '<div class="loader"></div>';
    try {
        const snapshot = await db.collection('users').orderBy('username', 'asc').get();
        usersList.innerHTML = '';
        if (snapshot.empty) {
            noUsers.classList.remove('hidden');
        } else {
            noUsers.classList.add('hidden');
            snapshot.docs.forEach(doc => {
                const user = doc.data();
                const userId = doc.id;
                const userItem = document.createElement('div');
                userItem.className = 'data-item';
                userItem.innerHTML = `
                    <div class="data-item-details">
                        <p><strong>Username:</strong> <span>@${user.username || 'N/A'}</span></p>
                        <p><strong>UID:</strong> <span>${userId}</span></p>
                        <p><strong>Posts:</strong> <span>${user.postCount || 0}</span></p>
                        <p><strong>Monetized Views:</strong> <span>${user.monetizedViewsCount || 0}</span></p>
                        <p><strong>Earnings:</strong> <span>${(user.earnedAmount || 0).toFixed(2)} $</span></p>
                    </div>
                    <div class="data-item-actions">
                        <button class="btn danger-btn" data-id="${userId}" data-action="delete-user">Delete User</button>
                        <button class="btn primary-btn" data-id="${userId}" data-action="reset-earnings">Reset Earnings</button>
                    </div>
                `;
                usersList.appendChild(userItem);
            });

            usersList.querySelectorAll('button').forEach(button => {
                button.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const action = e.target.dataset.action;
                    if (action === 'delete-user') {
                        deleteUser(id);
                    } else if (action === 'reset-earnings') {
                        resetUserEarnings(id);
                    }
                });
            });
        }
    } catch (error) {
        console.error("Error loading users:", error);
        showAdminToast("Error loading users.", 'error');
        usersList.innerHTML = '<p class="error-text">Error loading users.</p>';
    }
}

async function deleteUser(userId) {
    if (!confirm("Are you sure you want to DELETE this user and ALL their data (posts, messages, etc.)? This is irreversible!")) return;
    try {
        // IMPORTANT: Deleting user AUTH record also should be done from Cloud Functions
        // for security (admin SDK). Client-side delete only removes Firestore data.
        // auth.deleteUser(userId) - This would be done on a secure server.

        await db.runTransaction(async (transaction) => {
            // Delete user document
            const userRef = db.collection('users').doc(userId);
            transaction.delete(userRef);

            // Delete all user's posts
            const postsSnapshot = await db.collection('posts').where('userId', '==', userId).get();
            postsSnapshot.docs.forEach(doc => {
                transaction.delete(db.collection('posts').doc(doc.id));
                // Also delete associated comments, postViews for these posts (complex, could be a separate CF)
            });

            // Delete user's messages (both sent and received by this user)
            const sentMessages = await db.collection('messages').where('senderId', '==', userId).get();
            sentMessages.docs.forEach(doc => transaction.delete(db.collection('messages').doc(doc.id)));

            const receivedMessages = await db.collection('messages').where('receiverId', '==', userId).get();
            receivedMessages.docs.forEach(doc => transaction.delete(db.collection('messages').doc(doc.id)));

            // Delete user's reports (if any)
            const reportedBy = await db.collection('reports').where('reportedBy', '==', userId).get();
            reportedBy.docs.forEach(doc => transaction.delete(db.collection('reports').doc(doc.id)));

            // Delete user's withdrawal requests
            const withdrawalRequests = await db.collection('withdrawalRequests').where('userId', '==', userId).get();
            withdrawalRequests.docs.forEach(doc => transaction.delete(db.collection('withdrawalRequests').doc(doc.id)));

            // Potentially update follower/following lists of other users (highly complex, often done by CF)
        });

        showAdminToast("User and associated data deleted.", 'success');
        loadUsers();
    } catch (error) {
        console.error("Error deleting user:", error);
        showAdminToast("Failed to delete user.", 'error');
    }
}

async function resetUserEarnings(userId) {
    if (!confirm("Are you sure you want to RESET this user's monetized views and earnings to 0?")) return;
    try {
        await db.collection('users').doc(userId).update({
            monetizedViewsCount: 0,
            earnedAmount: 0.00
        });
        showAdminToast("User earnings reset.", 'success');
        loadUsers();
    } catch (error) {
        console.error("Error resetting earnings:", error);
        showAdminToast("Failed to reset earnings.", 'error');
    }
}
