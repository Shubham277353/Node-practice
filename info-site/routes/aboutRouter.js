const {Router} = require("express");
const path = require("path");

const aboutRouter = Router();

aboutRouter.get("/", (req, res) => {
    const filePath = path.join(__dirname, "..", "about.html");
      res.sendFile(filePath);
})

module.exports = aboutRouter;