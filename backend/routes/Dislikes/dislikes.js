const dislikes = require('express').Router();
const { createDislike, removeDislike, showDislikes } = require("../../queries/dislikes");

dislikes.get("/", showDislikes);
dislikes.post("/", createDislike);
dislikes.delete("/:id", removeDislike);

module.exports = dislikes;