
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

let input = document.getElementById("input");
let password = document.getElementById("pass");
let btn = document.getElementById("btn");

function test() {
  window.location = "login.html";
}

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 10;
}

function addNewlogin() {
  let data = input.value;
  let pass = password.value;

  if (data.length === "" || pass.length === "") {
    window.alert("Please Enter Valid Data");
  } else if (!validateEmail(data)) {
    window.alert("Please Enter a Valid Email");
  } else if (!validatePassword(pass)) {
    window.alert("Password must be at least 10 characters long");
  } else {
    window.location.href = "index.html";
    window.alert("You are now logged in");
  }
}

btn.addEventListener("click", function (event) {
  event.preventDefault(); // لمنع إعادة تحميل الصفحة
  addNewlogin();
});

btn.addEventListener("click", addNewlogin);
