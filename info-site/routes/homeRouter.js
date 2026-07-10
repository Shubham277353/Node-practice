const {Router} = require("express");

const homeRouter = Router();

authorRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"));
})

module.exports = authorRouter;