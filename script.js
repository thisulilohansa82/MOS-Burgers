const users = [
    { username: "admin", password: "12345" },
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

function openLoginModal() {
  document.getElementById("login-modal").style.display = "block";
}

function closeLoginModal() {
  document.getElementById("login-modal").style.display = "none";
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert("Login successful! Welcome, " + username + "!");
    errorMessage.textContent = "";
    closeLoginModal();
    window.location.href = "place order.html"; // Redirect to home page
  } else {
    errorMessage.textContent = "Invalid username or password. Please try again.";
  }
});

window.onclick = function (event) {
  const modal = document.getElementById("login-modal");
  if (event.target === modal) {
    closeLoginModal();
  }
};
 