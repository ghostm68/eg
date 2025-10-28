/*
 * A clean, modern, and dependency-free form submission handler.
 * This version waits for the HTML to be fully loaded before running.
 */

// We wrap the entire script in this event listener.
document.addEventListener('DOMContentLoaded', function() {

    // Get the form element from the HTML. Make sure the 'id' matches!
    const form = document.getElementById('contact-form');
    // Get the element where we will display status messages
    const statusMessage = document.getElementById('form-status-message');

    if (!form) {
        console.error("Error: Could not find the form with id 'contact-form'.");
        return; // Stop if the form doesn't exist
    }
    
    if (!statusMessage) {
        console.warn("Warning: Could not find the status message element with id 'form-status-message'.");
    }

    // This function will be called when the form is submitted.
    async function handleSubmit(event) {
        // This is the most important line: it stops the browser from redirecting.
        event.preventDefault();

        // Get all the data from the form
        const data = new FormData(event.target);
        const scriptURL = event.target.action;

        // Display a "sending" message
        if (statusMessage) {
            statusMessage.style.display = 'block'; // Make it visible
            statusMessage.textContent = 'Sending...';
        }
        
        try {
            // Use the modern 'fetch' API to send the data.
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                // If the submission was successful...
                if (statusMessage) {
                    statusMessage.textContent = 'Your message was sent, thank you!';
                }
                form.reset(); // Clear the form fields
            } else {
                // If there was a network error...
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            // If something went wrong during the submission...
            console.error('Error submitting form:', error);
            if (statusMessage) {
                statusMessage.textContent = 'Oops! There was a problem submitting your form. Please try again.';
            }
        }
    }

    // Attach the handleSubmit function to the form's 'submit' event.
    form.addEventListener('submit', handleSubmit);
    
}); // This closes the DOMContentLoaded listener
