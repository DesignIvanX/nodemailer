const express = require("express");
const nodemailer = require("nodemailer");
const response = require("../../network/response");

const router = express.Router();
router.get("/", (req, res) => {
  res.json({
    body: "",
  });
});
router.post("/", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Portfolio React</h3>
      <ul>
        <li>name: ${req.body.name}</li>
        <li>from: ${req.body.email}</li>
        <li>subject: ${req.body.subject}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      auth: {
        user: "ivandcdesign@gmail.com",
        pass: "xsmtpsib-6d30414db13b069e67ab66b81e9114aafee12a61a6e9437a42397fb87a56096e-QI6W4JXrbfh70Zxt",
      },
    });
    const emailOptions = {
      from: req.body.email,
      to: "ivandcdesign@gmail.com",
      replyTo: "ivandcdesign@gmail.com",
      subject: req.body.subject,
      text: req.body.message,
      html: htmlEmail,
    };
    transporter
      .sendMail(emailOptions)
      .then((data) => {
        console.log(data);
        response.success(req, res, data, 200);
      })
      .catch((err) => {
        console.log(err);
        response.error(req, res, err, 500, "Error");
      });
  });
});

module.exports = router;
