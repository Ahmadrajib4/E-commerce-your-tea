// Toggle
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Message
function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const url = "https://api.whatsapp.com/send?phone=6281292963664&text=Halo%20Admin.%0A%0ASaya%20*" + name + "*%0AEmail%20saya%20*" + email + "*%0A%0A*" + message + "*";
  window.open(url);
}
