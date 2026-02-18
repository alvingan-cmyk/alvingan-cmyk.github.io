let mybutton = document.getElementById("backToTop");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    // Add the class to trigger the fade-in
    mybutton.classList.add("show");
  } else {
    // Remove the class to trigger the fade-out
    mybutton.classList.remove("show");
  }
};

mybutton.onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};