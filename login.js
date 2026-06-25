const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Show Forms
function showLogin() {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
}

function showSignup() {
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
}

// SIGNUP
function signup(event) {
  event.preventDefault();

  const name = document.querySelector("#signupForm input[type='text']").value;
  const email = document.querySelectorAll("#signupForm input")[1].value;
  const password = document.querySelectorAll("#signupForm input")[2].value;
  const confirmPassword = document.querySelectorAll("#signupForm input")[3].value;

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match");
    return;
  }

  const user = {
    name,
    email,
    password
  };

  localStorage.setItem("stacklyUser", JSON.stringify(user));

  alert("✅ Account Created Successfully");
  showLogin();
}

// LOGIN
function login(event) {
  event.preventDefault();

  const email = document.querySelector("#loginForm input[type='email']").value;

  const savedUser = JSON.parse(localStorage.getItem("stacklyUser"));

  if (!savedUser) {
    alert("❌ No Account Found. Please Sign Up First");
    return;
  }

  // Email match ayithe password yedaina accept chestundi
  if (email === savedUser.email) {
    alert("✅ Login Successful");
    window.location.href = "dashboard.html";
  } else {
    alert("❌ Invalid Email");
  }
}