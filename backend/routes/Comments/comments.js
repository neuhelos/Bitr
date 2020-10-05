const comments = require('express').Router();
const { addComment, deleteComment, getAllComments, getComment } = require("../../queries/comments");

comments.post("/", addComment);
comments.delete("/:id", deleteComment);
comments.get("/", getAllComments);
comments.get("/:id", getComment);

module.exports = comments