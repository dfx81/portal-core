const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({
        email: "internship@uum.edu.my",
        addresses: {
            base: "Practicum Unit, Academic Affairs Department, Universiti Utara Malaysia, 06010 Sintok, Kedah, Malaysia",
            office: "Centre for University-Industry Collaboration (CUIC), Convention Centre, Universiti Utara Malaysia, 06010 Sintok, Kedah, Malaysia.",
        },
        phone: {
            cas: "04-928 3352",
            cob: "04-928 3351",
            colgis: "04-928 3348",
        },
    });
});

module.exports = router;