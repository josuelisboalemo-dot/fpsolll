const auth = firebase.auth();

// REGISTRAR
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Conta criada!");
      window.location.href = "index.html";
    })
    .catch(error => {
      alert(error.message);
    });
}

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(error => {
      alert(error.message);
    });
}

// LOGOUT
function logout() {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
}

// PROTEÇÃO
auth.onAuthStateChanged(user => {
  if (!user && window.location.pathname.includes("index.html")) {
    window.location.href = "login.html";
  }
});
