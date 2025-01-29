<script type="module">

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyBJZNwNXqAGr9j9o7FRpfKdtAHQGwVfs-k",

    authDomain: "warghh-a1747.firebaseapp.com",

    projectId: "warghh-a1747",

    storageBucket: "warghh-a1747.firebasestorage.app",

    messagingSenderId: "437602300160",

    appId: "1:437602300160:web:15dc0f50a0b38a751a83e5",

    measurementId: "G-TX7K6V33PE"
 // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

</script>
};



// Debugging: Check if Firebase is properly loaded
console.log("Firebase Loaded:", firebase);
console.log("Firebase Auth Loaded:", firebase.auth);
console.log("Firebase Config:", firebase.apps.length > 0 ? "Initialized" : "Not Initialized");

// Ensure buttons trigger functions
window.onload = function () {
  document.getElementById("signUp").addEventListener("click", signUp);
  document.getElementById("signIn").addEventListener("click", signIn);
  document.getElementById("signOut").addEventListener("click", signOut);
};

// Signup function
function signUp() {
  console.log("SignUp clicked");
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Sign-up successful!", userCredential);
      alert("Sign-up successful!");
    })
    .catch((error) => {
      console.error("Sign-up error: ", error.message);
      alert("Error: " + error.message);
    });
}

// SignIN function
function signIn() {
  console.log("SignIn clicked");
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Sign-in successful!", userCredential);
      errorMessage.textContent = ""; // Clear previous errors
      window.location.href = "landing.html";
    })
    .catch((error) => {
      console.error("Error signing in: ", error.message);
      errorMessage.textContent = "Error: " + error.message;
    });
}

// SignOut function
function signOut() {
  console.log("SignOut clicked");
  auth.signOut()
    .then(() => {
      alert("SignOut Successfully from System");
    })
    .catch((error) => {
      console.error("Sign-out error: ", error.message);
      alert("Error: " + error.message);
    });
}

// Active user detection
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Active user:", user.email);
  } else {
    console.log("No Active user Found");
  }
});
