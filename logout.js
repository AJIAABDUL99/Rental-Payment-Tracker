// auth.js
document.getElementById('logoutBtn').addEventListener('click', () => {
    auth.signOut().then(() => {
        alert('User logged out successfully!');
        window.location.href = "login.html";
    });
});
