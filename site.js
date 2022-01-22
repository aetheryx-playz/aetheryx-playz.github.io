let root = document.documentElement;
document.querySelector(".js-dark-mode-toggle").addEventListener("click", function() {
  darkmodeToggle();
});

function darkmodeToggle() {
  root.classList.toggle("theme--dark");
  if (root.classList.contains("theme--dark")) {
    localStorage.setItem("mode", "dark");
  }
  else {
    localStorage.setItem("mode", "light");
  }
}

if (localStorage.getItem("visited") == "true") {
  if (localStorage.getItem("mode") == "light") {
    root.classList.remove("theme--dark");
  }
} else {
  localStorage.setItem("visited", "true");
  localStorage.setItem("mode", "dark");
}
