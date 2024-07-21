// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById('modal').classList.add('hidden');

// Add click event listener to the heart
const hearts = document.querySelectorAll('.like-glyph');
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    // If the heart is empty, mimic a server call
    if (heart.innerText === EMPTY_HEART) {
      mimicServerCall()
        .then(() => {
          // Change the heart to a full heart
          heart.innerText = FULL_HEART;
          // Add the .activated-heart class to make the heart appear red
          heart.classList.add('activated-heart');
        })
        .catch((error) => {
          // Display the error modal by removing the .hidden class
          const errorModal = document.getElementById('modal');
          errorModal.classList.remove('hidden');
          // Display the server error message in the modal
          document.getElementById('modal-message').innerText = error;
          // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    } else {
      // If the heart is full, change it back to an empty heart
      heart.innerText = EMPTY_HEART;
      // Remove the .activated-heart class
      heart.classList.remove('activated-heart');
    }
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
