function signup() {
  const username = signupUsername.value;
  const password = signupPassword.value;

  if (!username || !password) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("user", JSON.stringify({
    username,
    password,
    avatar: "assets/default-avatar.png"
  }));

  alert("Signup successful!");
}

function login() {
  const username = loginUsername.value;
  const password = loginPassword.value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.username !== username || user.password !== password) {
    alert("Invalid login");
    return;
  }

  localStorage.setItem("loggedIn", true);
  window.location.href = "home.html";
}
