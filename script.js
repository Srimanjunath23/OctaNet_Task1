document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Thank you for signing up!');
        // You can add code here to handle the submission (e.g., sending data to the server)
    }
});
