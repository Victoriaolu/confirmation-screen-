document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the email input value
    const email = document.getElementById('email').value;

    // Simulate sending a reset link (you can replace this with an actual API call)
    console.log(`Reset link sent to ${email}`); // For demonstration purposes

    // Show confirmation message
    document.getElementById('confirmationMessage').classList.remove('hidden');
    
    // Clear the input field
    document.getElementById('email').value = '';
});
