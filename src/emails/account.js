const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "takkarudit@gmail.com",
    subject: "This is my First Creation",
    text: `Welcome to the app ${name}`,
  });
};

module.exports = {
  sendWelcomeMail,
};
