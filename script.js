const pwd = document.querySelector("#password");
const pwd_confirm = document.querySelector("#password-confirm");
const pwd_error = document.querySelector("#password-error");

function addEventListenerTo(pwd) {
  pwd.addEventListener('oninput', (event) => checkPassword());
}

function checkPassword() {
  if (pwd.value != pwd_confirm.value) {
    pwd_error.style.color = "black";
    pwd.classList.add("error");
    pwd_confirm.classList.add("error");
  }
  else {
    pwd_error.style.color = "white";
    pwd.classList.remove("error");
    pwd_confirm.classList.remove("error");
  }
}

addEventListenerTo(pwd);
addEventListenerTo(pwd_confirm);