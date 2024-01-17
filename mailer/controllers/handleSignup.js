import nodemailer from "nodemailer";
import Mailgen from "mailgen";
async function handleSignup(req, res) {
  const { userEmail } = req.body;
  let config = {
    // here you have to write the service which you are using
    service: "gmail",
    auth: {
      // here you have to write the user Email
      user: process.env.EMAIL,
      // here you have to write the user Password
      pass: process.env.PASSWORD,
    },
  };
  let transpoter = nodemailer.createTransport(config);
  let mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Aman Kumar",
      link: "https://book-management-front.vercel.app/",
      logo: "https://mailgen.js/img/logo.png",
    },
  });
  let response = {
    body: {
      name: "User",
      intro: "Your order is confirmed",
      table: {
        data: [
          {
            item: "SQL",
            description: "Database book",
            price: "$10",
          },
        ],
      },
      action: {
        instruction: "Click on the button to know more",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Confirm your account",
          link: "https://book-management-front.vercel.app/",
        },
      },
      goToAction: {
        text: "Go to Dashboard",
        link: "https://mailgen.com/confirm?s=d9729feb74992cc3482b350163a1a010",
        description: "Check the status of your order in your dashboard",
      },
      dictionary: {
        date: "June 11th, 2016",
        address: "123 Park Avenue, Miami, Florida",
      },
      outro: "looking forward to do more business",
    },
  };
  let mail = mailGenerator.generate(response);
  let message = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: "Place order",
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
}

export default handleSignup;
