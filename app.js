const express = require("express");
const app = express();
const prisma = require('./lib/prisma');

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.DEFAULT_PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Application running on port ${PORT}`);
});
