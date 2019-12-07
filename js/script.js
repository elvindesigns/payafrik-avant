// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the header
var header = document.getElementById("navig");

// Get the offset position of the navbar
// var sticky = header.offsetTop;
var sticky = 100;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("addBGColor");
  } else {
    header.classList.remove("addBGColor");
  }
}
