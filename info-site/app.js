const express = require("express");
const path = require("path");
const app = express();
const homeRouter = require("./routes/homeRouter");
const aboutRouter = require("./routes/aboutRouter");
const contactRouter = require("./routes/contactRouter");


app.use("/contact", contactRouter);
app.use("/about", aboutRouter);
app.use("/", homeRouter);

app.get("/{*splat}", (req, res ) => {
    res.status(400).send("not found");
})



app.listen(5000, (error) => {
  if (error) {
    throw error;
  }
  console.log(`listening on port ${5000}!`);
});