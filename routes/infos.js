const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({
        articles: [
            {
                title: "Guide A",
                content: "Guide contents",
            },
            {
                title: "Guide B",
                content: "Guide contents",
            },
            {
                title: "Info A",
                content: "Info contents",
            }
        ]
    });
});

module.exports = router;