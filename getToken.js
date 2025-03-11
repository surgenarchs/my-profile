import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USER,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Server is ready to send emails");
  }
});

