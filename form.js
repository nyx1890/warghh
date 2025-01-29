<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

  // Firebase Configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBJZNwNXqAGr9j9o7FRpfKdtAHQGwVfs-k",
    authDomain: "warghh-a1747.firebaseapp.com",
    projectId: "warghh-a1747",
    storageBucket: "warghh-a1747.firebasestorage.app",
    messagingSenderId: "437602300160",
    appId: "1:437602300160:web:15dc0f50a0b38a751a83e5",
    measurementId: "G-TX7K6V33PE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);

  // Ensure buttons trigger functions
  window.onload = function () {
    document.getElementById("signUp").addEventListener("click", signUp);
    document.getElementById("signIn").addEventListener("click", signIn);
    document.getElementById("signOut").addEventListener("click", signOut);
  };

  // SignUp function
  function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Sign-up successful!", userCredential);
        alert("Sign-up successful!");
      })
      .catch((error) => {
        console.error("Sign-up error: ", error.message);
        alert("Error: " + error.message);
      });
  }

  // SignIn function
  function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    signInWithEmailAndPassword(auth, email, password)
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
    signOut(auth)
      .then(() => {
        alert("SignOut Successfully from System");
      })
      .catch((error) => {
        console.error("Sign-out error: ", error.message);
        alert("Error: " + error.message);
      });
  }

  // Active user detection
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Active user:", user.email);
    } else {
      console.log("No Active user Found");
    }
  });
</script>

