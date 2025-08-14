const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const gmailUser = functions.config().gmail.user;
const gmailPass = functions.config().gmail.pass;

if(!gmailUser || !gmailPass){
  console.error('Missing Gmail config for functions: set functions.config().gmail.user/pass');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: gmailUser, pass: gmailPass }
});

exports.onWithdrawalRequest = functions.firestore.document('withdrawalRequests/{reqId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const adminEmail = 'apknixy@gmail.com';
    const mailOptions = {
      from: `"AddMint Notifier" <${gmailUser}>`,
      to: adminEmail,
      subject: `Withdrawal request from ${data.username} (${data.userId})`,
      text: `
Withdrawal Request Details:

User: ${data.username}
User ID: ${data.userId}
Views: ${data.views}
Payment ID (PayPal / UPI): ${data.paymentId}
Timestamp: ${data.timestamp ? data.timestamp.toDate() : new Date()}

Please review and process the withdrawal.
      `
    };
    try{
      await transporter.sendMail(mailOptions);
      await admin.firestore().doc(`withdrawalRequests/${context.params.reqId}`).update({ emailStatus: 'sent' });
      console.log('Withdrawal email sent.');
    }catch(err){
      console.error('Error sending withdrawal email:', err);
      await admin.firestore().doc(`withdrawalRequests/${context.params.reqId}`).update({ emailStatus: 'error' });
    }
  });
