// Get references to the button and paragraph elements
const button = document.getElementById('changeTextButton');
const paragraph = document.getElementById('textContent');

// Add click event listener to the button
button.addEventListener('click', function() {
  // Change the text content of the paragraph
  paragraph.textContent = 'New Text';
});
