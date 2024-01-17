import express from "express";
import "dotenv/config";
const app = express();
import appRoute from "./routes/routes.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let PORT = process.env.PORT;
app.use("/api", appRoute);
app.listen(PORT || 5000, () => {
  console.log("Server Started at the PORT : " + PORT);
});
