// Form validation
function validateForm() {
  var name = document.forms["contact-form"]["fname"].value; // get name field
  var email = document.forms["contact-form"]["email"].value; // get email field
  var reason = document.forms["contact-form"]["reason"].value; // get reason field
  var location = document.forms["contact-form"]["location"].value; // get location field
  var comment = document.forms["contact-form"]["comments"].value; // get comments textarea
  // Ensure name is not left blank
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  // Ensure email is not left blank
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  // Ensure email is valid
  if(!email.includes("@")) {
    alert("Invalid Email");
    return false;
  }
  // Ensures a reason is chosen
  if (reason == "") {
    alert('Must select reason for contact')
    return false;
  }
  // Ensures the location is given
  if (location == "") {
    alert('Must select if located near Chicago')
    return false;
  }
  // Ensures a comment is left
  if (comment == "") {
    alert('Must include a comment')
    return false;
  }
}
