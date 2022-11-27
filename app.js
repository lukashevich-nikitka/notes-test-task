const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/notes", require("./routes/routes"));


app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));

