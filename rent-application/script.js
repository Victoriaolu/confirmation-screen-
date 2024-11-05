document.getElementById('rentalApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const income = document.getElementById('income').value;

    // Simulate sending the application (you can replace this with an actual API call)
    console.log(`Application submitted by ${name}, Email: ${email}, Phone: ${phone}, Income: ${income}`);

    // Show confirmation message
    document.getElementById('confirmationMessage').classList.remove('hidden');
    
    // Clear the input fields
    document.getElementById('rentalApplicationForm').reset();
});
