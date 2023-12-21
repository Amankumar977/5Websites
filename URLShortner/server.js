const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/urlShortner")
  .then(() => console.log("Mongo Connected"))
  .catch(() => console.log("failed to connect to MOngoDB"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index.ejs", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ fullUrl: req.body.fullUrl });
  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  try {
    const shortUrl = await ShortUrl.findOne({ shortUrl: req.params.shortUrl });

    if (!shortUrl) {
      return res.sendStatus(404);
    }

    // Increment clicks in memory
    shortUrl.clicks++;

    // Save the updated shortUrl to the database
    await shortUrl.save();

    // Log the clicks for debugging
    console.log("Clicks after update:", shortUrl.clicks);

    // Redirect to the full URL
    res.json({ count: shortUrl.clicks });
    res.redirect(shortUrl.fullUrl);
  } catch (error) {
    console.error("Error in redirect route:", error);
    res.sendStatus(500);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Started");
});
