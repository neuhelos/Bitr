const userFollowing = require("express").Router({mergeParams: true})
const {addHater, removeHater, getHaters, getHaterFeed} = require("../../../queries/following")

userFollowing.post("/", addHater)

userFollowing.delete("/", removeHater)

userFollowing.get("/", getHaters)

userFollowing.get("/", getHaterFeed)

module.exports = userFollowing
