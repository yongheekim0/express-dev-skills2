var express = require("express");
var router = express.Router();

const skillsControl = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillsControl.index);

router.get("/new", skillsControl.new);

router.get("/:id", skillsControl.show);

router.post("/", skillsControl.create);

router.patch("/:id", skillsControl.update);

router.get("/:id/edit", skillsControl.edit);

router.delete("/:id", skillsControl.delete);

module.exports = router;
