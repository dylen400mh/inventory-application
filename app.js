const express = require("express");
const app = express();
const departmentsRouter = require("./routes/departmentsRouter");
const itemsRouter = require("./routes/itemsRouter");
const path = require("node:path");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/departments", departmentsRouter);
app.use("/items", itemsRouter);

app.get("/", (req, res) => res.redirect("/departments"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
