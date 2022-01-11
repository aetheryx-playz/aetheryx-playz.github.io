 let btnLogin = document.getElementById("login");
 let btnSignUp = document.getElementById("signup");

 let signIn = document.querySelector(".signin");
 let signUp = document.querySelector(".signup");

 btnLogin.onclick = function(){
     signIn.classList.add("active");
     signUp.classList.add("inActive");
 }

 btnSignUp.onclick = function(){
    signIn.classList.remove("active");
    signUp.classList.remove("inActive");
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
