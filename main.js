import './style.css'

let usermail = document.querySelector("#email")
let userPassword = document.querySelector("#password")

let submit = document.querySelector("#signIn")

submit.addEventListener("click", (i) => {
  i.preventDefault()

  checkInput()
})

function checkInput()  {

}