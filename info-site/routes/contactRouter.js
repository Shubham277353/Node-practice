const {Router} = require("express");
const path = require("path");

const contactRouter = Router();

contactRouter.get("/", (req, res) => {
    const filePath = path.join(__dirname, "..", "contact-me.html");
      res.sendFile(filePath);
})

module.exports = contactRouter;