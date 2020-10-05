const db = require("../db/index")

const createDislike = async(req, res, next) => {
    try {
        let dislike = await db.one("INSERT INTO dislikes (dislike_user, dislike_post) VALUES(${dislike_user}, ${dislike_post}) RETURNING *", req.body);
        res.status(200).json({
            dislike,
            status: "success",
            message: "one dislike added"
        })
    } catch(err) {
        next(err)
    }
}

const showDislikes = async(req, res, next) => {
    try{
        let dislikes = await db.any("SELECT * FROM dislikes")
        res.status(200).json({
            dislikes, 
            status: "success",
            message: "ALL DISLIKES" 
    })
        } catch (err) {
            next(err)
    }
}

const removeDislike = async(request,response,next)=>{
    try{
        await db.none("DELETE FROM dislikes WHERE dislike_post = $1 ", request.params.id)
        response.status(200).json({
            status: "success",
            message: "DISLIKED REMOVED" 
        })
    }catch(err){
        next(err)
    }
}

module.exports = {createDislike, removeDislike, showDislikes}