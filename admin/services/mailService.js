const nodemailer = require("nodemailer");
require("dotenv").config();
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kalathiyaneel02@gmail.com",
    pass: "zrxb koce wfbd xqjq",
  },
});

const sendingMail = async (to, subject, content) => {
  try {
    const mailOptions = {
      from: "kalathiyaneel02@gmail.com",
      to: to,
      subject: subject,
      html: content,
    };
    let res = await transport.sendMail(mailOptions);
    // console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendingMail;