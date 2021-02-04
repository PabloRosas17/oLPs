const cors = require('cors')({origin: true});
const sgMail = require('@sendgrid/mail');
const functions = require('firebase-functions');

exports.fxtest = functions.https.onRequest((request, response) => {

 cors(request, response, () => {}); 

 sgMail.setApiKey(process.env.OLPS_SG_RESTRICTED_KEY);
 const msg = {
  to: 'pablo.rosas.0170@gmail.com',
  from: request.body.email,
  subject: 'customer email !!!',
  text: request.body.name,
  html: '<b>oLPs</b>',
 };
 sgMail.send(msg);

 return response.send("SENT");
 });
