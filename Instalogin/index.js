require("dotenv").config();
const PORT = 8000;
const app = require("./app");

app.listen(process.env.PORT || PORT, () => {
  console.log("Server Started a the PORT", process.env.PORT || PORT);
});
