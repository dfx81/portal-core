const express = require("express");
const router = express.Router();

const data = {
    a222: [
        {
            company: "Company A",
            description: "A typical company",
            location: "Sungai Petani",
            state: "Kedah",
            target: [
                "IT",
                "Multimedia",
            ],
        },
        {
            company: "Company B",
            description: "A typical company",
            location: "Georgetown",
            state: "Pulau Pinang",
            target: [
                "IT",
                "Computer Science",
                "Multimedia",
            ],
        },
        {
            company: "Company C",
            description: "A typical company",
            location: "Bayan Lepas",
            state: "Pulau Pinang",
            target: [
                "IT",
                "Business",
                "Marketing",
            ],
        },
    ]
};

router.get("/", (req, res) => {
    if (!(req.query.course || req.query.state)) {
        res.send(data);
    } else {
        console.log(`Filtering - ${req.query.course}, ${req.query.state}`);

        let filteredList = [];

        if (req.query.course && req.query.state) {
            filteredList = data.a222.filter(offer => offer.target.includes(req.query.course) && offer.state === req.query.state);
        } else if (req.query.course) {
            filteredList = data.a222.filter(offer => offer.target.includes(req.query.course));
        } else if (req.query.state) {
            filteredList = data.a222.filter(offer => offer.state === req.query.state);
        }

        res.send({
            a222: filteredList
        });
    }
});

module.exports = router;