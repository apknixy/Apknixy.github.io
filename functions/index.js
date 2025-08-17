/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
const db = admin.firestore(); // Initialize Firestore instance for batch operations

// Configure Nodemailer with environment variables
// IMPORTANT: Set these variables using `firebase functions:config:set gmail.email="YOUR_GMAIL_EMAIL" gmail.password="YOUR_GMAIL_APP_PASSWORD"`
// Your Gmail account must have 2-Step Verification enabled, and you must generate an "App password" for use here.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const APP_EMAIL = 'apknixy@gmail.com'; // The recipient for withdrawal requests

/**
 * Cloud Function to send withdrawal request email.
 * Triggers when a new document is created in the 'withdrawalRequests' collection.
 */
exports.sendWithdrawalEmail = functions.firestore
  .document('withdrawalRequests/{requestId}')
  .onCreate(async (snap, context) => {
    const requestData = snap.data();
    const requestId = context.params.requestId;

    const { userId, username, views, paymentId, timestamp } = requestData;

    functions.logger.info(`Processing withdrawal request ${requestId} for user ${username}.`);

    const mailOptions = {
      from: `AddMint Withdrawal <${gmailEmail}>`, // Sender email (your Gmail)
      to: APP_EMAIL, // Recipient email (apknixy@gmail.com)
      subject: `New AddMint Withdrawal Request from @${username}`,
      html: `
        <p>Dear Admin,</p>
        <p>A new withdrawal request has been submitted on AddMint.</p>
        <ul>
          <li><strong>Request ID:</strong> ${requestId}</li>
          <li><strong>User ID:</strong> ${userId}</li>
          <li><strong>Username:</strong> @${username}</li>
          <li><strong>Requested Views (Amount):</strong> ${views.toLocaleString()} monetized views</li>
          <li><strong>Payment Method:</strong> ${paymentId}</li>
          <li><strong>Timestamp:</strong> ${new Date(timestamp.toMillis()).toLocaleString()}</li>
        </ul>
        <p>Please process this withdrawal request manually.</p>
        <p>Thank you,<br>The AddMint Team</p>
      `,
    };

    try {
      await mailTransport.sendMail(mailOptions);
      functions.logger.info(`Withdrawal email sent for request ${requestId}.`);
      // Update the request document status in Firestore
      await snap.ref.update({ emailStatus: 'sent' });
    } catch (error) {
      functions.logger.error(`Error sending withdrawal email for request ${requestId}:`, error);
      // Update the request document status to 'error'
      await snap.ref.update({ emailStatus: 'error', errorMessage: error.message });
    }
  });

/**
 * Cloud Function to clean up expired posts (e.g., after 24 hours).
 * This is a scheduled function that runs periodically.
 * You can adjust the schedule (e.g., 'every 1 hour', 'every 30 minutes').
 * To deploy, you need to be in the 'functions' directory and run 'firebase deploy --only functions'.
 *
 * NOTE: This function is commented out by default. Uncomment it if you want automatic post deletion.
 */
// exports.cleanupExpiredPosts = functions.pubsub.schedule('every 12 hours').onRun(async (context) => {
//   const now = admin.firestore.Timestamp.now();
//   functions.logger.info(`Starting cleanup for expired posts at ${now.toDate().toLocaleString()}`);

//   try {
//     const expiredPostsSnapshot = await db.collection('posts')
//       .where('expiryTime', '<=', now)
//       .get();

//     if (expiredPostsSnapshot.empty) {
//       functions.logger.info('No expired posts found.');
//       return null;
//     }

//     const batch = db.batch(); // Create a batch for atomic updates
//     let deletedCount = 0;

//     for (const postDoc of expiredPostsSnapshot.docs) {
//       batch.delete(postDoc.ref); // Delete the post document

//       // To delete subcollection documents (comments) for each post:
//       // You need to fetch them and add them to the batch.
//       // Note: For very large subcollections, this might hit batch limits (500 operations).
//       // For extremely large subcollections, a recursive delete Cloud Function might be needed.
//       const commentsSnapshot = await postDoc.ref.collection('comments').get();
//       commentsSnapshot.docs.forEach(commentDoc => {
//         batch.delete(commentDoc.ref);
//       });

//       // Decrement the user's postCount
//       const userId = postDoc.data().userId;
//       if (userId) {
//         const userRef = db.collection('users').doc(userId);
//         batch.update(userRef, {
//           postCount: admin.firestore.FieldValue.increment(-1)
//         });
//       }
//       deletedCount++;
//     }

//     await batch.commit(); // Commit all batch operations
//     functions.logger.info(`Successfully deleted ${deletedCount} expired posts and their associated comments.`);
//     return null;

//   } catch (error) {
//     functions.logger.error(`Error during expired post cleanup:`, error);
//     return null;
//   }
// });
