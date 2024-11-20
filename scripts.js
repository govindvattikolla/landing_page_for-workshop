

// Animation loader - Hide loader after page load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
});

// Variables for form and landing page handling
const formOpenBtn = document.querySelector("#form-open");
const formRegBtn = document.querySelector("#form-reg"),

  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", (e) =>{
  home.classList.add("show")
  
  e.preventDefault();
});
formRegBtn.addEventListener("click", (e) =>{
  home.classList.add("show")
  formContainer.classList.add("active");
  e.preventDefault();
});

formCloseBtn.addEventListener("click", (e) =>{
  home.classList.remove("show")
  formContainer.classList.remove("active");
  e.preventDefault();
});


pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

