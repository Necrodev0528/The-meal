// SIGNUP
function signup(e){
  e.preventDefault();
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const profile = document.getElementById("signupProfile").value || "https://via.placeholder.com/30";
  const user = { username,password,profile };
  localStorage.setItem("user",JSON.stringify(user));
  alert("Signup successful!");
  window.location.href = "login.html";
}

// LOGIN
function login(e){
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const savedUser = JSON.parse(localStorage.getItem("user"));
  if(!savedUser){ alert("No account found. Please sign up."); return; }
  if(username===savedUser.username && password===savedUser.password){
    localStorage.setItem("loggedInUser",JSON.stringify(savedUser));
    window.location.href = "home.html";
  } else alert("Invalid login details");
}

// LOGOUT
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if(!loggedInUser) window.location.href="login.html";

document.getElementById("navUsername").textContent = loggedInUser.username;
document.getElementById("navImg").src = loggedInUser.profile || "https://via.placeholder.com/35";

function logout(){
  localStorage.removeItem("loggedInUser");
  window.location.href="login.html";
}
