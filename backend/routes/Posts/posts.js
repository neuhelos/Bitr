const posts = require('express').Router();
const { createPost, deletePost, getPostsForUser, getAllPosts } = require("../../queries/posts");

posts.post("/", createPost);
posts.delete("/:id", deletePost);
posts.get("/:id", getPostsForUser);
// posts.get("/:id", getPostsForUser);
posts.get("/", getAllPosts);

module.exports = posts