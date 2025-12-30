if (!localStorage.getItem("loggedIn")) {
  window.location.href = "index.html";
}

const user = JSON.parse(localStorage.getItem("user"));
document.getElementById("username").textContent = user.username;
document.getElementById("avatar").src = user.avatar;

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
