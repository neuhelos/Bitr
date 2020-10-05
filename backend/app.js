const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;
const usersRouter = require("./routes/Users/users")
const postsRouter = require("./routes/Posts/posts")
const commentsRouter = require("./routes/Comments/comments")
const dislikesRouter = require("./routes/Dislikes/dislikes")
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/users", usersRouter)
app.use("/posts", postsRouter)
app.use("/comments", commentsRouter)
app.use("/dislikes", dislikesRouter)

app.listen(port, () => console.log("server running on port ", port))