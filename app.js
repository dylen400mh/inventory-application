const express = require("express");
const app = express();
const departmentsRouter = require("./routes/departmentsRouter");
const itemsRouter = require("./routes/itemsRouter");

require("dotenv").config();

app.use(departmentsRouter);
app.use(itemsRouter);

app.get("/", (req, res) => res.send("Hello"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
