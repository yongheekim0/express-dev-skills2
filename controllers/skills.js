const Skills = require("../models/skill");
let skills = Skills.getAll();

function index(req, res) {
    res.render("skills/index", { skills, title: "Yonghee's dev skills" });
}

function show(req, res) {
    const skill = Skills.getOne(req.params.id);
    res.render("skills/show", { skill });
}

function newSkill(req, res) {
    res.render("skills/create");
}

function create(req, res) {
    const { name, detail, comment } = req.body;
    console.log(req.body);
    Skills.getAll().push({ id: Skills.uuidv4(), name, detail, comment });
    res.redirect("/skills");
}

function update(req, res) {
    const { id } = req.params;
    const { name: newName, detail: newDetail, comment: newComment } = req.body;
    Skills.getOne(id).name = newName;
    Skills.getOne(id).detail = newDetail;
    Skills.getOne(id).comment = newComment;
    res.redirect("/skills");
}

function edit(req, res) {
    const { id } = req.params;
    const skill = Skills.getOne(id);
    res.render("skills/edit", { skill });
}

function deleteSkill(req, res) {
    const { id } = req.params;
    skills = skills.filter((skill) => skill.id !== id);
    res.redirect("/skills");
}

module.exports = {
    index,
    show,
    create,
    new: newSkill,
    update,
    edit,
    delete: deleteSkill,
};
