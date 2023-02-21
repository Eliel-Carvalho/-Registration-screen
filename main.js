import './style.css'

let userEmail = document.querySelector("#email")
let userPassword = document.querySelector("#password")
let submit = document.querySelector("#signIn")

const setError = (input, message) => {
  const InputBox = input.parentElement
  const small = InputBox.querySelector("small")

  InputBox.className = "form input-group input-box error"
  small.innerText = message

}

const setSeccess = (input) => {
  const InputBox = input.parentElement

  InputBox.className = "form input-group input-box success"
}

const checkInput = () => {
  if(userEmail === ""){
    setError(userEmail, "Digite um E-mail valido")
  }else{
    setSeccess(userEmail)
  }
}


submit.addEventListener("click", (i) => {
  i.preventDefault()

  checkInput()
})
