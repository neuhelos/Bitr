const userPosts = require("express").Router({mergeParams: true})
const {getPostsForUser} = require("../../../queries/posts")

userPosts.get("/",getPostsForUser) 


module.exports = userPosts

