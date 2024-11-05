document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Show confirmation message
    document.getElementById('confirmationMessage').classList.remove('hidden');

    // Populate details in the confirmation message
    const detailsList = document.getElementById('detailsList');
    
    detailsList.innerHTML = ''; // Clear previous details
    detailsList.innerHTML += `<li><strong>Name:</strong> ${name}</li>`;
    detailsList.innerHTML += `<li><strong>Email:</strong> ${email}</li>`;
    detailsList.innerHTML += `<li><strong>Date:</strong> ${date}</li>`;
    detailsList.innerHTML += `<li><strong>Time:</strong> ${time}</li>`;
    
    // Clear the input fields
    document.getElementById('bookingForm').reset();
});
