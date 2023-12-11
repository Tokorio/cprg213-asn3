//Submit button
const submitButton = document.getElementById('submit-button');

//Contact page
const contactPage = document.getElementById('contact-page');

// Add a click event listener to the submit button
submitButton.addEventListener('click', () => {
  // Replace the contents of the contact page with a single <p> element
  contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message!</p>';
});
