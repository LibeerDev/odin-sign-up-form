const form = document.querySelector('form');
const inputElements = form.querySelectorAll('input');

// valid/invalid input css change

const validInput = "5px solid green";
const invalidInput = "5px solid red";

inputElements.forEach((input) => {
    input.addEventListener('change', () => {
        if (input.validity.valid) {
            input.style.border = validInput;
          } else {
            // Input is not valid, you can check specific properties for details
            if (input.validity.valueMissing) {
              
            }
            if (input.validity.typeMismatch) {
                input.style.border = invalidInput;
            }
          }
      
    });
  });
  
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

confirmPassword.addEventListener('change', () => {
    if( confirmPassword.value != password.value)
    {
        console.log("incorrect confirmation");
        confirmPassword.style.border = invalidInput;
    }
})

const submitButton = document.getElementById('register');

submitButton.addEventListener("click", function(event) {
    if (password.value !== confirmPassword.value) {
      event.preventDefault(); // Prevent button click
      alert("Passwords do not match. Please try again.");
    }
  });
