// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBJZNwNXqAGr9j9o7FRpfKdtAHQGwVfs-k",
  authDomain: "warghh-a1747.firebaseapp.com",
  projectId: "warghh-a1747",
  storageBucket: "warghh-a1747.firebasestorage.app", 
  messagingSenderId: "437602300160",
  appId: "1:437602300160:web:15dc0f50a0b38a751a83e5",
  measurementId: "G-TX7K6V33PE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup function
function signUp() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Sign-up successful!");
    })
    .catch((error) => {
      console.error("Sign-up error: ", error.message);
      alert(error.message);
    });
}

// Sign-in function
function signIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      errorMessage.textContent = ""; // Clear any previous error
      window.location.href = "landing.html";
    })
    .catch((error) => {
      console.error("Error signing in: ", error.message);
      errorMessage.textContent = "Error: " + error.message;
    });
}

// Sign-out function
function signOut() {
  auth.signOut()
    .then(() => {
      alert("Signed out successfully!");
    })
    .catch((error) => {
      console.error("SignOut Error: ", error.message);
      alert("Error signing out: " + error.message);
    });
}

// Monitor active user status
firebase.auth().onAuthStateChanged((user) => {
  var statusMessage = document.getElementById("status-message");
  if (statusMessage) {
    if (user) {
      statusMessage.textContent = "Logged in as: " + user.email;
    } else {
      statusMessage.textContent = "No active user found.";
    }
  }
});

