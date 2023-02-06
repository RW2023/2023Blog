// Select the media object element
var mediaObject = document.querySelector(".media");

// Listen for a click event on the media object
mediaObject.addEventListener("click", function () {
  // Toggle the class that expands the media object
  mediaObject.classList.toggle("media-expanded");
});
