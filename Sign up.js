// auth.js
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('User signed up successfully!');
            window.location.href = "login.html";
        })
        .catch(error => alert(error.message));
});
