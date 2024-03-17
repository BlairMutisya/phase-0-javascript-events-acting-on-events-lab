// Your code here
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") { // Add condition for right arrow key
      moveDodgerRight();
    }
  });
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left.replace('px', ''), 10);
    if (left < 360) { // Check if the dodger is not at the right edge of the game field
      dodger.style.left = `${left + 1}px`;
    }
  }
  function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left.replace('px', ''), 10);
    const newPosition = left - 1; // Adjust the number of pixels to move left
  
    // Check if the new position is within the game field (left edge)
    if (newPosition >= 0) {
      dodger.style.left = `${newPosition}px`; // Update the dodger's left position
    }
  }
  