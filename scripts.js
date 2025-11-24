/* Add your JavaScript to this file */
window.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailValue = emailInput.value.trim();

         if (emailValue === "" || !isValidEmail(emailValue)) {
            messageDiv.textContent = "Please enter a valid email address.";
         } else {
            messageDiv.textContent = `Thank you! Your email address ${emailValue} has been added to our mailing list!`;
            emailInput.value = "";
         }
    });

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    
    }


});

