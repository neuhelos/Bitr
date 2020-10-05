const db = require("../db/index")

const addComment = async(request,response,next)=>{
    try{
        await db.one("INSERT INTO comments (user_comments_id, post_comment_id, body) VALUES ${user_comments_id}, ${post_comment_id}, ${body}", request.body)
        response.status(200).json({
            status: "success",
            message: "NEW COMMENT" 
        })
    }catch(err){
        next(err)
    }
}

const deleteComment = async(request,response,next)=>{
    try{
        await db.none("DELETE FROM comments WHERE id = $1 ", request.params.id)
        response.status(200).json({
            status: "success",
            message: "COMMENT DELETED" 
        })
    }catch(err){
        next(err)
    }
}

const getAllComments =async(request,response,next) =>{
    try{

        let comments = await db.any("SELECT * FROM comments")
        response.status(200).json({
            comments, 
            status: "success",
            message: "ALL COMMENTS"
        })
    }catch(err){
        next(err)
    }
}
const getComment = async(request, response,next)=>{
    try{
        let comment = await db.one(
            "SELECT * FROM comments WHERE id = $1 ", [request.params.id]

        )
        response.status(200).json({
            comment, 
            status: "success",
            message: "ONE COMMENT FETCHED"
        })

    }catch(err){
        next(err)
    }
}

const updateComments =async(request, response,next)=>{
    try{
        db.none("UPDATE comments SET body = '$1' WHERE user_comments_id = $2 AND post_comments_id =$3", [request.body.body. request.params_comments_id, request.params.post_id])
        response.status(200).json({
            status: "success",
            message: "COMMENT UPDATED"
        })
    }catch(err){
        next(err)
    }
}

module.exports = {getAllComments,getComment,addComment,deleteComment, updateComments}