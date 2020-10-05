
let form = document.querySelector("form")
let email = document.querySelector("#email")
let name = document.querySelector("#name")
let username = document.querySelector("#username")
let age = document.querySelector("#age")
let photo = document.querySelector("#photo")
let errorAlert = document.querySelector(".error")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  errorAlert.innerText = ""
    try {
        let res = await axios.post("http://localhost:3000/users", {
          email: email.value,    
          name: name.value,
          username: username.value,
          age: age.value,
          photo_url: photo.value
          });
        sessionStorage.setItem("username", username.value)
        sessionStorage.setItem("id", res.data.user.id)
        window.location.href = "../HomePage/index.html"
    } catch (error) {  
      errorAlert.innerText = "Please Enter a Valid Username and Email"
    }
  form.reset()
})