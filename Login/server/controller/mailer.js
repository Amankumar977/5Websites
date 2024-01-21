import nodemailer from "nodemailer";
import Mailgen from "mailgen";

let config = {
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

let transpoter = nodemailer.createTransport(config);
let mailGenerator = new Mailgen({
  theme: "salted",
  product: {
    name: "Orange",
    logo: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    logoHeight: "30px",
    link: "https://www.google.com",
  },
});
/** POST: http://localhost:5000/api/registerMail 
 * @param : {
  "username" : "example123",
  "userEmail" : "example@gmail.com",
  "text": "",
  "subject": ""
}
*/
export const registerMail = async (req, res) => {
  const { username, userEmail, text, subject } = req.body;
  var email = {
    body: {
      name: username,
      intro: text || "Welcome to the Orange, We are glad to have you onboard",
      action: {
        instructions: "To get started with Mailgen, please click here:",
        button: {
          color: "#48cfad", // Optional action button color
          text: "Confirm your account",
          link: "https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010",
        },
      },
      outro: "Looking forward to see you smiling :)",
    },
  };
  let mail = mailGenerator.generate(email);

  let message = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: subject || "Welcome OnBoard",
    html: mail,
  };
  transpoter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        success: true,
        message: "Email sent",
      });
    })
    .catch((error) => {
      return res.status(500).json({
        success: false,
        message: "error",
        err: error.message,
      });
    });
};
