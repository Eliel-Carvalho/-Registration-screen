import './style.css'

let userEmail = document.querySelector("#email")
let userPassword = document.querySelector("#password")
let submit = document.querySelector("#signIn")


submit.addEventListener("click", (i) => {
  i.preventDefault()
  
  checkInput()
})

function checkInput() {
  if(userEmail.value === ""){
    setError(userEmail, "Digite um E-mail valido!")
  }else{
    setSeccess(userEmail)
  }

  if(userPassword.value === ""){
    setError(userPassword, "Digite uma senha valida!")
  }else{
    setSeccess(userPassword)
  }
}

function setError(input, message){
  const InputBox = input.parentElement
  const small = InputBox.querySelector("small")

  InputBox.className = "input-box error"
  small.innerText = message

}

function setSeccess (input) {
  const InputBox = input.parentElement

  InputBox.className = "input-box success"
}