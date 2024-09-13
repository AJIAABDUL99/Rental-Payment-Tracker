// auth.js
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('User logged in successfully!');
            window.location.href = "index.html"; // Redirect to dashboard or homepage
        })
        .catch(error => alert(error.message));
});
