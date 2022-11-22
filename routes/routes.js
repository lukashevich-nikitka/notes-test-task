const { Router } = require("express");
const fs = require("fs");
const db = require("../notedb.json");
const uniqid = require("uniqid");

const router = Router();

router.get("/list", async (req, res) => {
  res.send([...db]);
});

router.post("/new", async (req, res) => {
  const upgradeDB = [{ ...req.body, id: uniqid() }, ...db];
  fs.writeFile("notedb.json", JSON.stringify(upgradeDB), function (err) {
    if (err) throw err;
  });
  res.send(upgradeDB);
});

router.delete("/delete/:id", async (req, res) => {
  const upgradeDB = db.filter((el) => el.id !== req.params.id);
  fs.writeFile("notedb.json", JSON.stringify(upgradeDB), function (err) {
    if (err) throw err;
  });
  res.send(upgradeDB);
});

router.put("/edit/:id", async (req, res) => {
  const idx = db.findIndex((el) => el.id === req.params.id);
  db[idx].note = req.body;
  fs.writeFile("notedb.json", JSON.stringify(db), function (err) {
    if (err) throw err;
  });
  res.send(db);
});

module.exports = router;
