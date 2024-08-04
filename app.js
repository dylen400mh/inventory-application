const express = require("express");
const app = express();
const departmentsRouter = require("./routes/departmentsRouter");
const itemsRouter = require("./routes/itemsRouter");
const path = require("node:path");

require("dotenv").config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(departmentsRouter);
app.use(itemsRouter);

app.get("/", (req, res) => res.redirect("/departments"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
