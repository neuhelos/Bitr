let form = document.querySelector("#form");
let p = document.querySelector("#invalidLogin");
    
const getUserLogin = async (username) => {
  try {
      let res = await axios.get(`http://localhost:3000/users/${username}`);
      console.log(username)
      if (res.data.user) {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("id", res.data.user.id)
        window.location.href = "../HomePage/index.html"
      } 
    } catch (err) {
      p.innerHTML = "Please Enter a Valid Username or Sign the F*ck Up"
    }
}
  
form.addEventListener("submit", (event) => {
  p.innerHTML = "";
  event.preventDefault();
  let username = document.querySelector("#username").value;
  getUserLogin(username)
  form.reset()
})
