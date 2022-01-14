//login
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

//dropdown
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

//google sign in
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

//google sign out
    line function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
