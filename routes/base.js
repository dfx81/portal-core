const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    if (req.query.name) {
        res.send(`Hello, ${req.query.name}!`);
    } else {
        res.send("Core service is running normally.<br><br>Access the service using any of the endpoints available.");
    }
});

module.exports = router;