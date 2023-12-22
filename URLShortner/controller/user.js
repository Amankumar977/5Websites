const User = require("../models/user");
async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}
async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  console.log(user);
  if (!user) {
    return res.status(400).render("login", {
      error: "Inavlid Username or Password",
    });
  }
  return res.redirect("/");
}
module.exports = {
  handleUserSignup,
  handleLogin,
};
