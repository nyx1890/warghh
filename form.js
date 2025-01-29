// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBJZNwNXqAGr9j9o7FRpfKdtAHQGwVfs-k",

    authDomain: "warghh-a1747.firebaseapp.com",

    projectId: "warghh-a1747",

    storageBucket: "warghh-a1747.firebasestorage.app",

    messagingSenderId: "437602300160",

    appId: "1:437602300160:web:15dc0f50a0b38a751a83e5",

    measurementId: "G-TX7K6V33PE"
,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Signup function
function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));
  alert("SignUp Successfully");
}

// SignIN function
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(
            email.value, password.value);
  promise.catch((e) => alert(e.message));
firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful sign-in, redirect to landing.html
            window.location.href = "landing.html";
}

// SignOut
function signOut() {
  auth.signOut();
  alert("SignOut Successfully from System");
}

// Active user to homepage
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
    alert("Active user " + email);
  } else {
    alert("No Active user Found");
  }
});
