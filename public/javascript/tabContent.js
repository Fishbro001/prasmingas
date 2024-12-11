function openContent(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab content, and add an "active" class to the clicked tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Optionally, you can set the default tab to be shown on page load like this:
document.addEventListener("DOMContentLoaded", function() {
  // Trigger the first tab to be opened by default
  document.querySelector(".tablinks").click();
});
