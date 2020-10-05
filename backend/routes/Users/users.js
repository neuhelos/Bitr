const users = require("express").Router()
const {createUser, deleteUser, getUser, getAllUsers, getUserSearch} = require("../../queries/users")

//Nested Route
const userPostsRouter = require("./posts/posts") 
users.use("/:id/posts", userPostsRouter)

//Nested Route
const userHatersRouter = require("./following/following")
users.use("/:id/haters", userHatersRouter)

users.post("/", createUser)

users.delete("/:id", deleteUser)

users.get("/:id", getUser)

users.get("/", getAllUsers)

users.get("/", getUserSearch)

module.exports = users


