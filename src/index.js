// Array of images and their correct answers
const images = [
  { src: "https://www.svgrepo.com/show/463266/sunset.svg", answer: "sunset" },
  {
    src: "https://www.svgrepo.com/show/484314/mountain.svg",
    answer: "mountain",
  },
  {
    src: "https://www.svgrepo.com/show/489286/beach-area.svg",
    answer: "beach",
  },
  { src: "https://www.svgrepo.com/show/481600/forest.svg", answer: "forest" },
  {
    src: "https://www.svgrepo.com/show/490640/city-buildings.svg",
    answer: "city",
  },
];

// Function to select a random image from the array
function selectRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// Initial setup: Select random image and set initial blur value
let selectedImage = selectRandomImage();
let blurValue = 20;
let maxAttempts = 5; // Limit the number of guesses
let currentAttempt = 0;

// Get the image element from the DOM
const mysteryImage = document.getElementById("mystery-image");

// Set the image's `src` attribute to the selected random image
mysteryImage.src = selectedImage.src;

// Main game loop
function playGame() {
  while (currentAttempt < maxAttempts) {
    // Get user input using BOM (window.prompt)
    let userGuess = window.prompt("Guess the image!");

    // Check if user clicked "Cancel" or entered nothing
    if (userGuess === null) {
      window.alert("You canceled the game. Exiting.");
      return; // Exit the game if the user cancels
    }

    // Convert guess to lowercase for comparison
    if (userGuess.toLowerCase() === selectedImage.answer) {
      // If the guess is correct, display a success message
      window.alert("Congratulations! You've guessed correctly.");
      mysteryImage.style.filter = "blur(0px)"; // Remove the blur completely
      break;
    } else {
      // If incorrect, decrease the blur and give feedback
      currentAttempt++;
      blurValue -= 4; // Reduce blur with each attempt
      mysteryImage.style.filter = `blur(${blurValue}px)`; // Update DOM to reduce blur
      window.alert(
        `Incorrect! You have ${maxAttempts - currentAttempt} guesses left.`
      );
    }
  }

  if (currentAttempt === maxAttempts) {
    window.alert("Game over! The correct answer was: " + selectedImage.answer);
    mysteryImage.style.filter = "blur(0px)"; // Reveal the image at the end
  }
}

// Start the game
playGame();
