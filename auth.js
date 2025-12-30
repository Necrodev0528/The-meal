console.log("auth.js loaded");

/* ================= SIGNUP ================= */
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 🔥 STOP PAGE RELOAD

    const username = document.getElementById("signupUsername").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username already exists
    const userExists = users.find(user => user.username === username);
    if (userExists) {
      alert("Username already exists ❌");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful ✅");
    window.location.href = "login.html";
  });
}
/* ================= LOGIN ================= */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 🔥 STOP PAGE RELOAD

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      user => user.username === username && user.password === password
    );

    if (!foundUser) {
      alert("Invalid username or password ❌");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    alert("Login successful ✅");

    window.location.href = "home.html";
  });
}
