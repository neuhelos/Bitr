    let main = document.querySelector("main")
    let newDivs = document.createElement("div")
    let ul = document.createElement("ul")
    const getAllPosts = async() => {
        try {
            let res = await axios.get(`http://localhost:3000/posts`)
            let posts = res.data.posts.reverse()
            // debugger
            posts.forEach(post=>{
                let li = document.createElement("li")
                let img = document.createElement("img")
                img.src = post.photo_url
                li.innerText = post.body
                li.setAttribute("class", "caption")
                ul.appendChild(img)
                ul.appendChild(li)
            })
            newDivs.appendChild(ul)
            main.appendChild(newDivs)
            // debugger
        } catch (err) {
            console.log(err)
        }
    }
    
    getAllPosts()

    //Add Post Form
    let addPostForm = document.querySelector(".addPostForm")

    addPostForm.addEventListener("submit", async (event) => {
      let image = document.querySelector("#addImageURL")
      let caption = document.querySelector("#addImageCaption")
      event.preventDefault()
        try {
            let res = await axios.post("http://localhost:3000/posts", {
            user_post_id: sessionStorage.id, 
            photo_url: image.value,
            body: caption.value
              });
        } catch (error) {  
          console.log(error)
        }
        addPostForm.reset()
        closeForm()
      })
      
    
    const openForm = () => {
      document.querySelector(".addPostFormContainer").style.display === "none" ? document.querySelector(".addPostFormContainer").style.display = "block" : document.querySelector(".addPostFormContainer").style.display = "none"
    }
    const closeForm = () =>{
        document.querySelector(".addPostFormContainer").style.display = "none";
      }