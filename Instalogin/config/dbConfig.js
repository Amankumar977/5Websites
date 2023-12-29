const mongoose = require("mongoose");
function dataBaseConnect() {
  mongoose
    .connect(
      "mongodb+srv://ak9330674:Aman%4013579%23@cluster0.buq7tln.mongodb.net/instaLogin?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Mongo DB is conected");
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = { dataBaseConnect };
