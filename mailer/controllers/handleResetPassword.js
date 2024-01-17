import MailGen from "mailgen";
import nodemailer from "nodemailer";
function handleResetPassword(req, res) {
  const { userEmail, data } = req.body;
  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  };
  const transpoter = nodemailer.createTransport(config);
  let mailGenerator = new MailGen({
    theme: "default",
    product: {
      name: "Aman Kumar",
      link: "https://book-management-front.vercel.app/",
      logo: "https://mailgen.js/img/logo.png",
    },
  });

  let email = {
    body: {
      name: "Pathsala",
      intro: "Welcome to Pathsala",
      action: {
        instructions: "To get started wit mailgen to reset the password: ",
        button: {
          color: "#22BC66",
          text: "Reset your password",
          link: "https://www.youtube.com/",
        },
      },
      table: [
        {
          title: "Order 1",
          data: data.map((items) => ({
            items: items.item,
            description: items.description,
            price: items.price,
          })),
          columns: {
            customWidth: {
              item: "20%",
              price: "15%",
            },
          },
        },
      ],
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
  let emailBody = mailGenerator.generate(email);
  const message = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: "Order Summary",
    html: emailBody,
  };
  transpoter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        success: true,
        msg: "Email sent",
      });
    })
    .catch((err) => {
      return res.status(201).json({
        success: true,
        msg: "Email sent fail",
        error: err.message,
      });
    });
}

export default handleResetPassword;
