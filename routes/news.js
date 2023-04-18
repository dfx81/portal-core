const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({
        a222: [
            {
                title: "News A",
                content: "News contents",
            },
            {
                title: "News B",
                content: "News contents",
            },
            {
                title: "News C",
                content: "News contents",
            }
        ]
    });
});

router.get("/motd", (req, res) => {
    res.send({
        messages: [
            "REMINDER: Don't forget to upload your report duty form WITHIN TWO WEEKS of starting your practicum.",
            "REMINDER: Don't forget to pay your practicum fees via FIMS.",
            "Have a nice day!",
        ]
    });
});

module.exports = router;