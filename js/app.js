let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-nav_bar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});


$(function () {
  
$('.main-nav li').click( function () {
  $(this).addClass('active').siblings().removeClass('active')
});

});
 
