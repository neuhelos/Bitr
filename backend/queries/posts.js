const db = require("../db/index");

const createPost = async (req, res, next) => {
  try {
    let post = await db.one("INSERT INTO posts (user_post_id, photo_url, body) VALUES(${user_post_id}, ${photo_url}, ${body}) RETURNING body", req.body);
    res.status(200).json({
      post,
      status: "success",
      message: "user created post"
    })
  } catch (err) {
    next(err)
  }
}

const deletePost = async (req, res, next) => {
  try {
    await db.none("DELETE FROM posts WHERE id = $1", req.params.id)
    res.status(200).json({
        status: "Success",
        message: "Post Deleted"
    })
  } catch(err) {
    next(err)
  }
}

const getPostsForUser = async (req, res, next) => {
  try {
    let posts = await db.any("SELECT * FROM posts WHERE user_post_id = $1", req.params.id);
    res.status(200).json({
      posts,
      status: "success",
      message: "user posts retrieved"
    })
  } catch(err) {
    next(err);
  }
}

const getAllPosts = async (req, res, next) => {
  try {
    let posts = await db.any("SELECT * FROM posts");
    res.status(200).json({
      posts,
      status: "success",
      message: "user posts retrieved"
    })
  } catch(err) {
    next(err);
  }
}

module.exports = {getPostsForUser, createPost, deletePost, getAllPosts}