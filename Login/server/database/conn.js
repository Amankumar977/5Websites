import mongoose from "mongoose";
async function connect() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("MOngo Db Connected");
    })
    .catch((error) => {
      console.log("There is a error in cretaing the DB", error.message);
    });
}
export default connect;
