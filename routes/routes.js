const { Router } = require("express");
const fs = require("fs");
const db = require("../notedb.json");
const uniqid = require("uniqid");

const router = Router();

router.get("/list", async (req, res) => {
  res.send([...db]);
});

router.post("/new", async (req, res) => {
  const tags = [];
  const wordsArray = req.body.note.split(" ");
  wordsArray
    .forEach((el, index) => {
      if (el[0] === "#") {
        tags.push({ id: uniqid(), tag: el.replace(/[\s.,:;]/g, '') });
        wordsArray[index] = el.slice(1);
      }
    });
  const note = wordsArray.join(" ");
  const upgradeDB = [
    { note, tags, id: uniqid() },
    ...db,
  ];
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
  const wordsArray = req.body.note.split(" ");
  wordsArray
    .forEach((el) => {
      if (el[0] === "#" && db[idx].tags.every((element) => element.tag !== el)) {
        db[idx].tags.push({ id: uniqid(), tag: el.replace(/[\s.,:;]/g, '') });
      }
    });
  const note = wordsArray.join(" ").replace(/#/g, '');
  db[idx].note = note;
  fs.writeFile("notedb.json", JSON.stringify(db), function (err) {
    if (err) throw err;
  });
  res.send(db);
});

module.exports = router;
