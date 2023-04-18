const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({
        files: [
            {
                name: "File A",
                url: "https://example.com",
            },
            {
                name: "File B",
                url: "https://example.com",
            },
            {
                name: "File C",
                url: "https://example.com",
            },
        ]
    });
});

module.exports = router;