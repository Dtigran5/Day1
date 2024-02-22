// JavaScript code to handle button click event
document.getElementById("toggleButton").addEventListener("click", function() {
    var myDiv = document.getElementById("myDiv");
    if (myDiv.style.display === "none") {
      myDiv.style.display = "block";
    } else {
      myDiv.style.display = "none";
    }
  });
  