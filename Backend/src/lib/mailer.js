import nodemailer from "nodemailer";

// keeping it async to avoid blocking the main thread.
export const sendEmail = (ReceiverEmail, mailSubject, mailBody) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "r20324pavitra@dpsrkp.net",
      pass: "PASSWORD",
    },
  });

  transporter.sendMail({
    from: "Team 7",
    to: ReceiverEmail,
    subject: mailSubject,
    text: mailBody,
  });
  console.log("Mail Request Initiated");
};
