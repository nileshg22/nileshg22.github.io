// Allows scroll down from
// Code from source: https://www.solodev.com/blog/web-design/adding-a-scroll-down-anchor-to-your-website.stml
$(document).ready(function(){
  $("a").on('click', function(event) { // Identifies when arrow clicked 
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({ // animates the scroll
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
