import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("tiny"));
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5015;
app.get("/", (req, res) => {
  return res.status(201).end("<h1>Hello Ji</h1>");
});
// start server only when we have the valid connection
connect()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log("The server has started at the PORT " + " " + PORT);
      });
    } catch (error) {
      console.log("There is issue while starting the server", error.message);
    }
  })
  .catch((error) => {
    console.log("There is issue while Connecting to MogoDB", error.message);
  });
