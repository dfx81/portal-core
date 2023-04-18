const express = require("express");
const app = express();
const port = 3000;

const baseRoute = require("./routes/base");
const newsRoute = require("./routes/news");
const offersRoute = require("./routes/offers");
const infosRoute = require("./routes/infos");
const resourcesRoute = require("./routes/resources");
const contactsRoute = require("./routes/contacts");

app.use("/", baseRoute);
app.use("/news", newsRoute);
app.use("/offers", offersRoute);
app.use("/infos", infosRoute);
app.use("/resources", resourcesRoute);
app.use("/contacts", contactsRoute);

app.listen(port, () => {
    console.log(`Server is now listening on port ${port}.`);
});