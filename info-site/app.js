const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req,res)=> {
    res.sendFile(path.join(__dirname,"index.html"));
})
app.get("/about", (req,res)=> {
    res.sendFile(path.join(__dirname,"about.html"));
})
app.get("/contact-me", (req,res)=> {
    res.sendFile(path.join(__dirname,"contact-me.html"));
})

app.use((req, res) => {
    res.Status(404).sendFile(path.join(__dirname, "404.html"));
})

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log(`listening on port ${3000}!`);
});