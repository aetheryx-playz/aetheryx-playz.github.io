//google sign in
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); 

//google sign out
line function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }


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


  }
