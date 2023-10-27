const { v4: uuidv4 } = require("uuid");
const skills = [
    {
        id: uuidv4(),
        name: "JavaScript",
        detail: "This is a place holder of JavaScript",
        comment: "This is a comment for JavaScript",
    },
    {
        id: uuidv4(),
        name: "CSS",
        detail: "This is a place holder of CSS",
        comment: "This is a comment for CSS",
    },
    {
        id: uuidv4(),
        name: "HTML",
        detail: "This is a place holder of HTML",
        comment: "This is a comment for HTML",
    },
    {
        id: uuidv4(),
        name: "Express",
        detail: "This is a place holder of Express",
        comment: "This is a comment for Express",
    },
];

const getAll = () => {
    return skills;
};

const getOne = (id) => {
    return skills.find((skill) => skill.id === id);
};

module.exports = {
    getAll,
    getOne,
    uuidv4,
};
