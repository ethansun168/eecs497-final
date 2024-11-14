// Get the buttons and feedback message element
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const chooseBtn = document.getElementById('chooseBtn');
const feedbackMessage = document.getElementById('feedbackMessage');

// Add event listeners
likeBtn.addEventListener('click', () => {
likeBtn.classList.toggle('active');
dislikeBtn.classList.remove('active'); // Ensure only one button is active

// Display a message using an alert
// alert('You liked the recommended outfit!');

// Display the feedback message on the page
feedbackMessage.textContent = 'You liked the recommended outfit!';
});

dislikeBtn.addEventListener('click', () => {
dislikeBtn.classList.toggle('active');
likeBtn.classList.remove('active'); // Ensure only one button is active

// Display a message using an alert
// alert('You disliked the recommended outfit!');

// Display the feedback message on the page
feedbackMessage.textContent = 'You disliked the recommended outfit!';
});

// Event listener for Choose Outfit button
chooseBtn.addEventListener('click', () => {
    // Display an alert when outfit is added to the closet
    // alert('Outfit added to closet!');

    feedbackMessage.textContent = 'Outfit added to closet!';
});