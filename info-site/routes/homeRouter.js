const { Router } = require("express");
const path = require("path");

const homeRouter = Router();

homeRouter.get("/", (req, res) => {
  const filePath = path.join(__dirname, "..", "index.html");
  res.sendFile(filePath);
});

module.exports = homeRouter;
