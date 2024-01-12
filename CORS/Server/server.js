import express from "express";
import cors from "cors";
const app = express();
app.use(
  cors({
    cors: "*",
  })
);
const PORT = 5000;
app.get("/", (req, res) => {
  res.send({ name: "Aman", topicStuding: "Cors study" });
});
app.listen(PORT, () => {
  console.log("The server has started");
});
