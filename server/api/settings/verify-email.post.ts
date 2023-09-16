// import sgMail from '@sendgrid/mail';
import crypto from 'node:crypto';
import { usersCollection } from '../../lib/mongoDBCollections';
import checkUserIsNotSignedIn from '../../handlers/auth/checkUserIsNotSignedIn';

export default defineEventHandler(async (event) => {
  // Get the user from session.
  const { user } = event.context.session;

  const body = await readBody(event);

  const { emailAddress } = body;

  // Check user is signed in.
  checkUserIsNotSignedIn(user);

  // Create an expiry time 10 minutes from now.
  const now = new Date();
  const expiryTime = new Date(now.getTime() + 10 * 60 * 1000).getTime();

  const token = crypto.randomUUID();

  return await usersCollection.findOneAndUpdate(
    {
      emailAddress,
    },
    {
      $set: {
        verifyEmail: {
          token,
          expiryTime,
        },
      },
    },
  );

  //   sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));
  //   const msg = {
  //     to: 'robertthedev@gmail.com', // Change to your recipient
  //     from: 'robertthedev@gmail.com', // Change to your verified sender
  //     subject: 'Sending with SendGrid is Fun',
  //     text: 'and easy to do anywhere, even with Node.js',
  //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  //   };

  //   return await sgMail
  //     .send(msg)
  //     .then(() => {
  //       return 'Email sent';
  //     })
  //     .catch((error) => {
  //       return error;
  //     });
});
