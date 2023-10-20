      // JavaScript code for form validation
      document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('myForm');
        const inputField = document.getElementById('inputField');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
	
       // Regular expression pattern for alphanumeric input
       const alphanumericPattern = /^[a-zA-Z0-9]+$/;
       form.addEventListener('submit', function (event) {

      // Retrieve the input field value
      const inputValue = inputField.value.trim();
      if (!alphanumericPattern.test(inputValue)) {
     
        // Invalid input: display error message
        errorElement.textContent = 'Invalid input. Please enter only alphanumeric characters.';
        inputField.insertAdjacentElement('afterend', errorElement);

        // Prevent form from submitting
        event.preventDefault();
      } else {
        // Valid input: display confirmation and submit the form
        if (errorElement.parentNode) {
          errorElement.parentNode.removeChild(errorElement);
        }
      }
    });
  });