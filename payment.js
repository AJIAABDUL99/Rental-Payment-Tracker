// payment.js
document.getElementById('paymentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const rentalType = document.getElementById('rentalType').value;
    const amount = document.getElementById('amount').value;
    const user = auth.currentUser;

    if (user) {
        db.collection('payments').add({
            userId: user.uid,
            rentalType: rentalType,
            amount: amount,
            date: new Date()
        }).then(() => {
            alert('Payment submitted successfully!');
        }).catch(error => alert(error.message));
    } else {
        alert('Please log in to submit a payment.');
    }
});

// Real-time updates: Listen to changes in the payment collection
db.collection('payments').onSnapshot(snapshot => {
    let payments = [];
    snapshot.forEach(doc => {
        payments.push({ ...doc.data(), id: doc.id });
    });

    displayPayments(payments); // Function to display payments dynamically
});

// Function to display payments
function displayPayments(payments) {
    const paymentList = document.getElementById('paymentList');
    paymentList.innerHTML = ''; // Clear the previous content

    payments.forEach(payment => {
        let listItem = document.createElement('li');
        listItem.textContent = `Rental Type: ${payment.rentalType}, Amount: ${payment.amount}, Date: ${new Date(payment.date.seconds * 1000).toLocaleString()}`;
        paymentList.appendChild(listItem);
    });
}

