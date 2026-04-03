// // Import Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// // Your Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyB6FMgrNQTd0GCbjMva4-VbWkPDRoAn11Q",
//     authDomain: "scholarbay-f5d55.firebaseapp.com",
//   databaseURL: "https://your-project-default-rtdb.firebaseio.com",
//   projectId: "scholarbay-f5d55",
//    storageBucket: "scholarbay-f5d55.firebasestorage.app",
//     messagingSenderId: "140514709575",
//     appId: "1:140514709575:web:dca205fb9902208e6a2162",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// // Save data function
// window.saveData = function () {
//   const name = document.getElementById("nameInput").value;

//   set(ref(database, "users/user1"), {
//     username: name
//   })
//     .then(() => {
//       alert("Data saved successfully!");
//     })
//     .catch((error) => {
//       alert("Error: " + error.message);
//     });
// };

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6FMgrNQTd0GCbjMva4-VbWkPDRoAn11Q",
    authDomain: "scholarbay-f5d55.firebaseapp.com",
    projectId: "scholarbay-f5d55",
   appId: "1:140514709575:web:dca205fb9902208e6a2162",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const message = document.getElementById("message");

window.signUp = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    message.innerText = "Signup successful: " + userCredential.user.email;
  } catch (error) {
    message.innerText = "Signup error: " + error.message;
  }
};

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    message.innerText = "Login successful: " + userCredential.user.email;
  } catch (error) {
    message.innerText = "Login error: " + error.message;
  }
};

window.logout = async function () {
  try {
    await signOut(auth);
    message.innerText = "Logged out successfully";
  } catch (error) {
    message.innerText = "Logout error: " + error.message;
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user.email);
  } else {
    console.log("No user logged in");
  }
});
